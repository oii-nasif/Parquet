// DP-800: SQL AI Developer Associate — Interactive Quiz System
// localStorage keys, chapter list, progress helpers

(function() {
  const STORAGE_KEY = 'dp800_quiz_progress_v1';

  // --- Chapter definitions -------------------------------------------------
  const QUIZ_META = [
    { id: 0,  label: 'Online Dumps',           sub: 'Mixed Practice',             href: 'quiz-dp800.html?q=0'  },
    { id: 1,  label: 'Database Objects',       sub: 'Tables, Indexes, Views',      href: 'quiz-dp800.html?q=1'  },
    { id: 2,  label: 'Programmability',        sub: 'Procedures, Functions, Triggers', href: 'quiz-dp800.html?q=2'  },
    { id: 3,  label: 'Advanced T-SQL',         sub: 'CTEs, Window Functions',      href: 'quiz-dp800.html?q=3'  },
    { id: 4,  label: 'AI-Assisted Design',     sub: 'Copilot & AI Tools',          href: 'quiz-dp800.html?q=4'  },
    { id: 5,  label: 'Security & Compliance',  sub: 'Auth, Encryption, RLS',       href: 'quiz-dp800.html?q=5'  },
    { id: 6,  label: 'Performance Tuning',     sub: 'Query Plans, Indexes',        href: 'quiz-dp800.html?q=6'  },
    { id: 7,  label: 'CI/CD & DevOps',         sub: 'SQL Projects, Pipelines',     href: 'quiz-dp800.html?q=7'  },
    { id: 8,  label: 'Azure Integration',      sub: 'Functions, Event Hubs, etc.',  href: 'quiz-dp800.html?q=8'  },
    { id: 9,  label: 'Models & Embeddings',    sub: 'Vector Search, AI',           href: 'quiz-dp800.html?q=9'  },
    { id: 10, label: 'Intelligent Search',     sub: 'Full-Text, Semantic Search',  href: 'quiz-dp800.html?q=10' },
    { id: 11, label: 'Mock Exam',             sub: 'Comprehensive Review',        href: 'quiz-dp800.html?q=11' }
  ];

  const CHAPTER_COUNT = QUIZ_META.length;
  const QUESTIONS_PER_CHAPTER = 50;
  const TOTAL_QUESTIONS = 600;

  // --- Storage helpers ----------------------------------------------------
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return getDefaultState();
      const stored = JSON.parse(raw);
      // Merge with defaults to handle new chapters added
      return { ...getDefaultState(), ...stored };
    } catch (e) {
      console.error('Error loading progress:', e);
      return getDefaultState();
    }
  }

  function getDefaultState() {
    const chapters = {};
    for (let i = 0; i < CHAPTER_COUNT; i++) {
      chapters[i] = { completed: false, correctCount: 0, bookmarked: [] };
    }
    return { chapters };
  }

  function save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving progress:', e);
    }
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }

  // --- Public API ---------------------------------------------------------
  window.DP800 = {
    META: QUIZ_META,
    CHAPTER_COUNT,
    QUESTIONS_PER_CHAPTER,
    TOTAL_QUESTIONS,

    // Progress operations
    load,
    save,
    reset,

    // Chapter helpers
    getChapterLabel(id) { return QUIZ_META[id]?.label || `Chapter ${id}`; },
    getChapterHref(id) { return QUIZ_META[id]?.href || `quiz-dp800.html?q=${id}`; },

    // Stats helpers
    getOverallProgress() {
      const data = load();
      let completed = 0;
      let totalCorrect = 0;

      for (let i = 0; i < CHAPTER_COUNT; i++) {
        if (data.chapters[i]?.completed) completed++;
        totalCorrect += data.chapters[i]?.correctCount || 0;
      }

      return {
        chaptersCompleted: completed,
        totalChapters: CHAPTER_COUNT,
        percent: Math.round((completed / CHAPTER_COUNT) * 100),
        totalCorrect
      };
    },

    markChapterComplete(chapterId, correctCount) {
      const data = load();
      if (!data.chapters[chapterId]) data.chapters[chapterId] = {};
      data.chapters[chapterId].completed = true;
      data.chapters[chapterId].correctCount = correctCount;
      save(data);
    },

    toggleBookmark(chapterId, questionNum) {
      const data = load();
      if (!data.chapters[chapterId]) data.chapters[chapterId] = { bookmarked: [] };
      const bookmarks = data.chapters[chapterId].bookmarked || [];
      const idx = bookmarks.indexOf(questionNum);
      if (idx >= 0) {
        bookmarks.splice(idx, 1);
      } else {
        bookmarks.push(questionNum);
      }
      data.chapters[chapterId].bookmarked = bookmarks;
      save(data);
      return bookmarks;
    },

    getBookmarks(chapterId) {
      const data = load();
      return data.chapters[chapterId]?.bookmarked || [];
    },

    getRecommendedChapter() {
      const data = load();
      // Return first incomplete chapter
      for (let i = 1; i < CHAPTER_COUNT; i++) { // Skip chapter 0 (Online Dumps)
        if (!data.chapters[i]?.completed) {
          return i;
        }
      }
      return 1; // Default to first real chapter
    }
  };

  // Export for landing page
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.DP800;
  }
})();
