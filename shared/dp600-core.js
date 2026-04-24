// DP600Prep — shared progress & data utilities for DP-600
// Uses localStorage for per-quiz attempts, scores, bookmarks.

(function(global){
  const STORAGE_KEY = 'dp600prep.v1';
  const QUIZ_COUNT = 14;

  const QUIZ_META = [
    { id: 0,  label: 'Online Dumps',           sub: '',                         href: 'quiz-dp600.html?q=0'  },
    { id: 1,  label: 'Fabric Fundamentals',    sub: 'Workspaces & items',       href: 'quiz-dp600.html?q=1'  },
    { id: 2,  label: 'Lakehouse I',            sub: 'Lakehouse concepts',       href: 'quiz-dp600.html?q=2'  },
    { id: 3,  label: 'Lakehouse II',           sub: 'Delta & tables',           href: 'quiz-dp600.html?q=3'  },
    { id: 4,  label: 'Warehouse I',            sub: 'T-SQL & modeling',         href: 'quiz-dp600.html?q=4'  },
    { id: 5,  label: 'Warehouse II',           sub: 'Performance tuning',       href: 'quiz-dp600.html?q=5'  },
    { id: 6,  label: 'DAX Fundamentals',       sub: 'Core DAX functions',       href: 'quiz-dp600.html?q=6'  },
    { id: 7,  label: 'Advanced DAX',           sub: 'Time intelligence & calc', href: 'quiz-dp600.html?q=7'  },
    { id: 8,  label: 'Semantic Models',        sub: 'Tabular & relationships',   href: 'quiz-dp600.html?q=8'  },
    { id: 9,  label: 'Data Ingestion',         sub: 'Pipelines & connectors',    href: 'quiz-dp600.html?q=9'  },
    { id: 10, label: 'PySpark I',              sub: 'Spark fundamentals',        href: 'quiz-dp600.html?q=10' },
    { id: 11, label: 'PySpark II',             sub: 'Transformations',          href: 'quiz-dp600.html?q=11' },
    { id: 12, label: 'Power BI Integration',   sub: 'Reports & analytics',      href: 'quiz-dp600.html?q=12' },
    { id: 13, label: 'Mock Exam',              sub: 'Mixed 50',                 href: 'quiz-dp600.html?q=13' },
  ];

  function loadState(){
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return Object.assign(defaultState(), parsed);
    } catch(e){ return defaultState(); }
  }
  function defaultState(){
    return {
      quizzes: {},   // { [id]: { attempts:[{date, correct, wrong, skipped, total, seconds}], best: {pct, date}, last: {...} } }
      bookmarks: [], // [{ quizId, num, question }]
      lastQuiz: null,
      lastQuizAt: null,
    };
  }
  function saveState(s){
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch(e){}
  }

  function recordAttempt(quizId, result){
    const s = loadState();
    const q = s.quizzes[quizId] || { attempts: [], best: null };
    const entry = Object.assign({ date: Date.now() }, result);
    q.attempts.push(entry);
    if(q.attempts.length > 20) q.attempts = q.attempts.slice(-20);
    const pct = entry.total ? Math.round(entry.correct/entry.total*100) : 0;
    if(!q.best || pct > q.best.pct) q.best = { pct, date: entry.date };
    q.last = entry;
    s.quizzes[quizId] = q;
    s.lastQuiz = quizId;
    s.lastQuizAt = entry.date;
    saveState(s);
    return s;
  }

  function quizStats(quizId){
    const s = loadState();
    const q = s.quizzes[quizId];
    if(!q) return { attempts: 0, best: null, last: null };
    return { attempts: q.attempts.length, best: q.best, last: q.last };
  }

  function overallStats(){
    const s = loadState();
    let totalAttempts = 0, sumPct = 0, pctCount = 0, bestAnywhere = 0, quizzesAttempted = 0;
    let totalCorrect = 0, totalAnswered = 0;
    Object.values(s.quizzes).forEach(q => {
      if(q.attempts.length) quizzesAttempted++;
      totalAttempts += q.attempts.length;
      q.attempts.forEach(a => {
        if(a.total){ sumPct += Math.round(a.correct/a.total*100); pctCount++; totalCorrect += a.correct; totalAnswered += a.total; }
      });
      if(q.best && q.best.pct > bestAnywhere) bestAnywhere = q.best.pct;
    });
    return {
      totalAttempts,
      avgPct: pctCount ? Math.round(sumPct/pctCount) : 0,
      bestPct: bestAnywhere,
      quizzesAttempted,
      quizzesTotal: QUIZ_COUNT,
      totalCorrect,
      totalAnswered,
      bookmarks: s.bookmarks.length,
    };
  }

  function toggleBookmark(quizId, num, question){
    const s = loadState();
    const idx = s.bookmarks.findIndex(b => b.quizId===quizId && b.num===num);
    if(idx >= 0) s.bookmarks.splice(idx,1);
    else s.bookmarks.push({ quizId, num, question });
    saveState(s);
    return idx < 0; // true if added
  }
  function isBookmarked(quizId, num){
    const s = loadState();
    return s.bookmarks.some(b => b.quizId===quizId && b.num===num);
  }

  function recommendedNext(){
    const s = loadState();
    // Suggest the lowest-scored attempted quiz, or the next unattempted quiz.
    let worst = null, worstPct = 101;
    for(const q of QUIZ_META){
      const st = s.quizzes[q.id];
      if(st && st.best && st.best.pct < worstPct){ worstPct = st.best.pct; worst = q; }
    }
    const unattempted = QUIZ_META.find(q => !s.quizzes[q.id] || !s.quizzes[q.id].attempts.length);
    if(worst && worstPct < 80) return { quiz: worst, reason: 'retake', pct: worstPct };
    if(unattempted) return { quiz: unattempted, reason: 'next' };
    // fully studied — return the most recent
    const recent = QUIZ_META.find(q => q.id === s.lastQuiz) || QUIZ_META[0];
    return { quiz: recent, reason: 'review' };
  }

  function clearAll(){ localStorage.removeItem(STORAGE_KEY); }

  global.DP600Prep = {
    QUIZ_COUNT, QUIZ_META,
    loadState, saveState, recordAttempt,
    quizStats, overallStats,
    toggleBookmark, isBookmarked,
    recommendedNext, clearAll,
  };
})(window);
