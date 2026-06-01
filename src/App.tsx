import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calculator, 
  Atom, 
  Globe, 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RefreshCw, 
  Sparkles, 
  ArrowRight, 
  History, 
  User, 
  Trophy, 
  ChevronRight, 
  AlertCircle, 
  ThumbsUp, 
  RotateCcw,
  Sparkle,
  MessageSquare,
  Send,
  Users,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PREDEFINED_QUESTIONS } from './questions';
import { CategoryKey, CategoryInfo, Question, StudySession, ChatMessage, CelebrationBubble } from './types';
import { getQuestionHint } from './utils/hints';

// Informations d'affichage des matières/catégories
const CATEGORIES: CategoryInfo[] = [
  {
    key: 'francais',
    label: 'Français',
    icon: '✍️',
    color: 'bg-[#EAEFF2] hover:bg-[#DCE6ED] transition-colors',
    borderColor: 'border-[#BCD1E0]',
    textColor: 'text-[#2D4554]',
    shadowColor: 'shadow-[#EAEFF2]',
    description: 'Grammaire, conjugaison, orthographe et vocabulaire pour bien s’exprimer.'
  },
  {
    key: 'maths',
    label: 'Mathématiques',
    icon: '🧮',
    color: 'bg-[#F5F1E9] hover:bg-[#EAE4D9] transition-colors',
    borderColor: 'border-[#E6DFD3]',
    textColor: 'text-[#5A5A40]',
    shadowColor: 'shadow-[#F5F1E9]',
    description: 'Calcul, problèmes, géométrie et conversions de mesures pratiques.'
  },
  {
    key: 'sciences',
    label: 'Sciences',
    icon: '🔬',
    color: 'bg-[#EDF2EB] hover:bg-[#DCE6D9] transition-colors',
    borderColor: 'border-[#C6D5C2]',
    textColor: 'text-[#3B4D35]',
    shadowColor: 'shadow-[#EDF2EB]',
    description: 'Corps humain, hygiène, faune et flore, et l’univers physique.'
  },
  {
    key: 'culture_generale',
    label: 'Culture Générale',
    icon: '🌍',
    color: 'bg-[#F2EDEB] hover:bg-[#EAE0DC] transition-colors',
    borderColor: 'border-[#DBC4BC]',
    textColor: 'text-[#593E35]',
    shadowColor: 'shadow-[#F2EDEB]',
    description: 'Histoire de la RDC, géographie du fleuve Congo et nos symboles nationaux.'
  }
];

export default function App() {
  // Prénom de l'élève
  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem('enafep_student_name') || '';
  });
  const [isEditingName, setIsEditingName] = useState<boolean>(!localStorage.getItem('enafep_student_name'));

  // Historique local sauvegardé
  const [history, setHistory] = useState<any[]>(() => {
    const rawHistory = localStorage.getItem('enafep_study_history');
    return rawHistory ? JSON.parse(rawHistory) : [];
  });

  // Sélection de la matière courante
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);

  // État de la session active
  const [session, setSession] = useState<StudySession | null>(null);

  // Réponses incorrectes déjà cliquées pour la question actuelle
  const [answeredOptions, setAnsweredOptions] = useState<Set<number>>(new Set());

  // Explications de Maître Jean-Pierre
  const [tutorExplanation, setTutorExplanation] = useState<string | null>(null);
  const [isLoadingExplanation, setIsLoadingExplanation] = useState<boolean>(false);

  // Génération de nouvelles questions par IA
  const [isAiMode, setIsAiMode] = useState<boolean>(false);
  const [isGeneratingQuestion, setIsGeneratingQuestion] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Nombre de questions demandé par session (5, 10, 25, ou 50)
  const [sessionLength, setSessionLength] = useState<number>(5);

  // Indice direct révélé pour la question actuelle
  const [revealedHint, setRevealedHint] = useState<string | null>(null);

  // Bulles célébration actives pour effet "boule d'ambiance"
  const [celebrationBubbles, setCelebrationBubbles] = useState<CelebrationBubble[]>([]);

  // Gradients de couleurs festives pour les boules d'ambiance
  const BUBBLE_GRADIENTS = [
    'radial-gradient(circle at 30% 30%, rgba(253, 224, 71, 0.75), rgba(234, 179, 8, 0.85))', // Gold
    'radial-gradient(circle at 30% 30%, rgba(52, 211, 153, 0.75), rgba(16, 185, 129, 0.85))', // Emerald
    'radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.75), rgba(37, 99, 235, 0.85))', // Blue
    'radial-gradient(circle at 30% 30%, rgba(244, 114, 182, 0.75), rgba(219, 39, 119, 0.85))', // Pink
    'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.75), rgba(109, 40, 217, 0.85))', // Purple
    'radial-gradient(circle at 30% 30%, rgba(251, 146, 60, 0.75), rgba(234, 88, 12, 0.85))', // Orange
  ];

  // Synthétiseur audio chiptune/chime pour fêter la victoire (Pentatonique C Majeur)
  const playSuccessSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const playTone = (freq: number, startTime: number, duration: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine'; // Ton pur très propre
        osc.frequency.setValueAtTime(freq, startTime);
        
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.18, startTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(startTime);
        osc.stop(startTime + duration);
      };
      
      const now = ctx.currentTime;
      // Succession rapide ascendante de notes célestes
      playTone(523.25, now, 0.35);        // C5
      playTone(587.33, now + 0.08, 0.35);  // D5
      playTone(659.25, now + 0.16, 0.35);  // E5
      playTone(783.99, now + 0.24, 0.35);  // G5
      playTone(880.00, now + 0.32, 0.35);  // A5
      playTone(1046.50, now + 0.40, 0.55); // C6 (clochette finale magique)
    } catch (e) {
      console.warn("L'API Web Audio est inactive ou restreinte sur ce navigateur.", e);
    }
  };

  // Lance l'effet complet : chœur sonore + envolée de boules de célébration
  const triggerCelebration = () => {
    playSuccessSound();

    const newBubbles: CelebrationBubble[] = Array.from({ length: 30 }).map((_, idx) => {
      const size = Math.floor(Math.random() * 45) + 20; // 20px à 65px
      const x = Math.floor(Math.random() * 90) + 5; // 5vw à 95vw
      const drift = (Math.random() * 14) - 7; // -7vw à +7vw
      const gradientColor = BUBBLE_GRADIENTS[Math.floor(Math.random() * BUBBLE_GRADIENTS.length)];
      const duration = Math.random() * 1.8 + 2.4; // 2.4s à 4.2s d'envolée
      const delay = Math.random() * 0.9; // délai étagé
      const scaleMultiplier = Math.random() * 0.4 + 0.95;

      return {
        id: Date.now() + idx,
        x,
        drift,
        size,
        gradientColor,
        duration,
        delay,
        scaleMultiplier
      };
    });

    setCelebrationBubbles(newBubbles);

    // Nettoyage après 5,5 secondes
    setTimeout(() => {
      setCelebrationBubbles([]);
    }, 5500);
  };

  // Vue active de l'application ('student' pour l'élève ou 'teacher' pour l'enseignant)
  const [activeView, setActiveView] = useState<'student' | 'teacher'>('student');

  // Historique des messages échangés entre l'apprenant et l'enseignant
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    const raw = localStorage.getItem('enafep_chat_messages');
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        return [];
      }
    }
    return [
      {
        id: 'msg-init-1',
        sender: 'teacher',
        text: "Bonjour champion ! Je suis ton enseignant tuteur. Ici, tu peux m'envoyer un message si tu coinces sur un problème d'examen ou si tu as une suggestion. Je te répondrai depuis mon tableau de bord !",
        timestamp: Date.now() - 3600000,
        studentName: 'Tuteur'
      }
    ];
  });

  // Texte temporaire saisi par le jeune apprenant
  const [studentMsgText, setStudentMsgText] = useState<string>('');

  // Saisies temporaires de réponses de l'enseignant par message ID
  const [replyMsgTexts, setReplyMsgTexts] = useState<{ [msgId: string]: string }>({});

  // Envoyer un message en tant qu'apprenant
  const sendStudentMessage = (text: string, questionText?: string, categoryLabel?: string) => {
    if (!text.trim()) return;
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'student',
      text: text.trim(),
      timestamp: Date.now(),
      studentName: studentName || 'Élève anonyme',
      questionText,
      categoryLabel
    };
    const updated = [...chatMessages, newMessage];
    setChatMessages(updated);
    localStorage.setItem('enafep_chat_messages', JSON.stringify(updated));
  };

  // Envoyer une réponse en tant qu'enseignant
  const sendTeacherReply = (msgId: string, replyText: string) => {
    if (!replyText.trim()) return;
    const replyMessage: ChatMessage = {
      id: `reply-${Date.now()}`,
      sender: 'teacher',
      text: replyText.trim(),
      timestamp: Date.now(),
      studentName: 'Enseignant',
    };
    const updated = [...chatMessages, replyMessage];
    setChatMessages(updated);
    localStorage.setItem('enafep_chat_messages', JSON.stringify(updated));
  };

  // Sauvegarde le prénom de l'élève
  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = studentName.trim();
    if (cleanName) {
      localStorage.setItem('enafep_student_name', cleanName);
      setStudentName(cleanName);
      setIsEditingName(false);
    }
  };

  // Lance l'étude d'une matière
  const startSession = (categoryKey: CategoryKey, useAi: boolean = false, customLength: number = sessionLength) => {
    setSelectedCategory(categoryKey);
    setIsAiMode(useAi);
    setTutorExplanation(null);
    setRevealedHint(null);
    setAnsweredOptions(new Set());
    setAiError(null);

    if (useAi) {
      // Démarrer une session vide et générer la première question
      setSession({
        category: categoryKey,
        questions: [],
        currentQuestionIndex: 0,
        attempts: {},
        isCorrectChosen: false,
        score: 0,
        completed: false
      });
      generateNextAiQuestion(categoryKey, true);
    } else {
      // Utiliser un lot mélangé de questions prédéfinies
      const filtered = PREDEFINED_QUESTIONS.filter(q => q.category === categoryKey);
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffled.slice(0, Math.min(customLength, filtered.length));

      setSession({
        category: categoryKey,
        questions: selectedQuestions,
        currentQuestionIndex: 0,
        attempts: {},
        isCorrectChosen: false,
        score: 0,
        completed: false
      });
    }
  };

  // Requête API pour générer une question par IA
  const generateNextAiQuestion = async (category: CategoryKey, isFirst: boolean = false) => {
    setIsGeneratingQuestion(true);
    setAiError(null);
    try {
      const response = await fetch('/api/gemini/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category })
      });

      if (!response.ok) {
        throw new Error("L'IA n'a pas pu créer la question. Vérifiez la clé API.");
      }

      const newQuestion: Question = await response.json();

      setSession(prev => {
        if (!prev) return null;
        const updatedQuestions = isFirst ? [newQuestion] : [...prev.questions, newQuestion];
        return {
          ...prev,
          questions: updatedQuestions,
          currentQuestionIndex: isFirst ? 0 : prev.questions.length,
          isCorrectChosen: false
        };
      });
      setAnsweredOptions(new Set());
      setTutorExplanation(null);
      setRevealedHint(null);
    } catch (err: any) {
      console.error(err);
      setAiError("Oups ! Nous n'avons pas pu charger une question par l'IA. Commençons avec nos questions classiques !");
      // Fallback automatique vers le mode standard si l'IA échoue
      setIsAiMode(false);
      const filtered = PREDEFINED_QUESTIONS.filter(q => q.category === category);
      setSession({
        category,
        questions: filtered,
        currentQuestionIndex: 0,
        attempts: {},
        isCorrectChosen: false,
        score: 0,
        completed: false
      });
    } finally {
      setIsGeneratingQuestion(false);
    }
  };

  // Traiter la sélection d'une réponse
  const handleOptionClick = (optionIndex: number) => {
    if (!session || session.isCorrectChosen) return;

    const currentQuestion = session.questions[session.currentQuestionIndex];
    const isCorrect = optionIndex === currentQuestion.correctAnswerIndex;
    const qId = currentQuestion.id;

    if (isCorrect) {
      // Calcul du score basé sur les essais
      const prevAttempts = session.attempts[qId] || 0;
      let pointsToGain = 10;
      if (prevAttempts === 1) pointsToGain = 7;
      else if (prevAttempts === 2) pointsToGain = 5;
      else if (prevAttempts >= 3) pointsToGain = 2;

      setSession(prev => {
        if (!prev) return null;
        return {
          ...prev,
          score: prev.score + pointsToGain,
          isCorrectChosen: true,
          attempts: {
            ...prev.attempts,
            [qId]: prevAttempts + 1 // Inclut l'essai gagnant
          }
        };
      });

      // Effacer l'explication intermédiaire s'il y en avait une
      setTutorExplanation(null);

      // Célébration festive de la bonne réponse
      triggerCelebration();
    } else {
      // Mauvaise réponse cliquée
      setSession(prev => {
        if (!prev) return null;
        const currentAttempts = prev.attempts[qId] || 0;
        return {
          ...prev,
          attempts: {
            ...prev.attempts,
            [qId]: currentAttempts + 1
          }
        };
      });
      setAnsweredOptions(prev => new Set([...prev, optionIndex]));
    }
  };

  // Passage à la question suivante
  const handleNextQuestion = () => {
    if (!session) return;

    const isLast = session.currentQuestionIndex === session.questions.length - 1;

    // Si on est en mode IA et qu'on n'a pas encore atteint le nombre de questions de la session
    if (isAiMode && session.questions.length < sessionLength) {
      generateNextAiQuestion(session.category);
    } 
    // Sinon si c'est la dernière de notre lot
    else if (isLast || session.questions.length >= sessionLength) {
      // Sauvegarder la session complétée dans l'historique
      const newHistoryEntry = {
        id: `hist-${Date.now()}`,
        category: session.category,
        score: session.score,
        questionsCount: session.questions.length,
        date: new Date().toLocaleDateString('fr-FR'),
        isAi: isAiMode,
        attempts: session.attempts,
        questions: session.questions
      };

      const updatedHistory = [newHistoryEntry, ...history];
      setHistory(updatedHistory);
      localStorage.setItem('enafep_study_history', JSON.stringify(updatedHistory));

      setSession(prev => {
        if (!prev) return null;
        return {
          ...prev,
          completed: true
        };
      });
    } else {
      // Mode standard et reste des questions prédéfinies
      setSession(prev => {
        if (!prev) return null;
        return {
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
          isCorrectChosen: false
        };
      });
      setAnsweredOptions(new Set());
      setTutorExplanation(null);
      setRevealedHint(null);
    }
  };

  // Obtenir de l'aide de l'IA (Maître Jean-Pierre)
  const fetchTutorHelp = async () => {
    if (!session) return;
    setIsLoadingExplanation(true);
    setTutorExplanation(null);

    const currentQuestion = session.questions[session.currentQuestionIndex];
    const isCorrectCategory = session.isCorrectChosen;
    
    // Déterminer la réponse incorrecte la plus récente si applicable
    const lastWrongOptionIndex = Array.from(answeredOptions).pop();
    const selectedOptionText = lastWrongOptionIndex !== undefined ? currentQuestion.options[lastWrongOptionIndex] : "aucune";

    try {
      const response = await fetch('/api/gemini/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: currentQuestion,
          selectedOption: selectedOptionText,
          isCorrectCategory
        })
      });

      if (!response.ok) {
        throw new Error("L'IA n'est pas disponible pour l'instant.");
      }

      const data = await response.json();
      setTutorExplanation(data.explanation);
    } catch (err: any) {
      console.error(err);
      // Fallback si l'IA échoue
      if (isCorrectCategory) {
        setTutorExplanation(`C'est exact ! Car : ${currentQuestion.explanation || 'Excellent calcul.'}`);
      } else {
        setTutorExplanation("Pense bien à relire la question attentivement. Élimine les réponses impossibles et cherche le petit mot caché ou la règle logique. Tu as tout le talent nécessaire pour trouver !");
      }
    } finally {
      setIsLoadingExplanation(false);
    }
  };

  // Revenir au panneau de sélection d'étude
  const exitSession = () => {
    setSession(null);
    setSelectedCategory(null);
    setTutorExplanation(null);
    setAnsweredOptions(new Set());
  };

  // Reset de tout l'historique de l'étudiant
  const resetAllProgress = () => {
    if (window.confirm("Es-tu sûr de vouloir effacer tout ton historique d'étude ? Toutes tes médailles seront perdues !")) {
      localStorage.removeItem('enafep_study_history');
      setHistory([]);
    }
  };

  // Données statistiques générales
  const totalSessions = history.length;
  const bestScore = history.reduce((max, curr) => curr.score > max ? curr.score : max, 0);
  const totalMedals = history.filter(h => h.score >= 40).length; // Médaille d'or pour les scores >= 40

  const getCategoryDetails = (key: CategoryKey) => {
    return CATEGORIES.find(c => c.key === key);
  };

  // Points max possible et score normalisé sur 50 (standard ENAFEP)
  const maxPossibleScore = session ? session.questions.length * 10 : 50;
  const scaledScore = session && maxPossibleScore > 0 ? Math.round((session.score / maxPossibleScore) * 50) : 0;

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#3D3B33] flex flex-col antialiased">
      
      {/* HEADER DE L'APPLICATION */}
      <header className="bg-[#F5F1E9] border-b border-[#E6DFD3] shadow-xs text-[#3D3B33]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={exitSession}>
            <div className="bg-white text-[#5A5A40] p-2 rounded-xl shadow-xs border border-[#E6DFD3]">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight flex items-center gap-1.5 text-[#5A5A40]">
                ENAFEP <span className="text-[#FDFBF7] font-bold text-lg px-2 py-0.5 bg-[#5A5A40] rounded-lg">RDC</span>
              </h1>
              <p className="text-xs text-[#8C867A] font-medium">Cap sur l'examen national de fin d'études primaires !</p>
            </div>
          </div>

          {/* SÉLECTEUR DE VUE (ÉLÈVE VS ENSEIGNANT) */}
          <div className="flex bg-[#EAE4D9]/80 p-1 rounded-2xl border border-[#D9D1C2] gap-1 w-full sm:w-auto overflow-hidden">
            <button
              onClick={() => {
                setActiveView('student');
                exitSession();
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer ${
                activeView === 'student'
                  ? 'bg-[#5A5A40] text-white shadow-xs'
                  : 'text-[#5A564D] hover:bg-[#FAF7F0]'
              }`}
            >
              🎒 Révisions Élève
            </button>
            <button
              onClick={() => {
                setActiveView('teacher');
                exitSession();
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer ${
                activeView === 'teacher'
                  ? 'bg-[#5A5A40] text-white shadow-xs'
                  : 'text-[#5A564D] hover:bg-[#FAF7F0]'
              }`}
            >
              📊 Suivi Parent / Enseignant
            </button>
          </div>

          {/* Profil de l'élève */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-[#E6DFD3] shadow-xs">
            {isEditingName ? (
              <form onSubmit={handleSaveName} className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Écris ton prénom..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="bg-[#FDFBF7] text-[#3D3B33] border border-[#E6DFD3] outline-none text-xs rounded-lg px-2.5 py-1.5 font-bold w-40 placeholder-slate-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#5A5A40] text-white font-bold text-xs rounded-lg px-3 py-1.5 hover:bg-[#4A4A34] transition cursor-pointer"
                >
                  Ok
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3">
                <div className="flex flex-col text-right">
                  <span className="text-xs font-semibold text-[#8C867A] flex items-center justify-end gap-1">
                    <User className="w-3.5 h-3.5 text-[#8C867A]" /> Futur Lauréat :
                  </span>
                  <span className="text-sm font-bold text-[#5A5A40]">{studentName || 'Jeune Génie'}</span>
                </div>
                <button
                  onClick={() => setIsEditingName(true)}
                  className="text-[10px] bg-[#EAE4D9] text-[#5A564D] hover:bg-[#D9D1C2] px-2.5 py-1 rounded transition cursor-pointer font-bold"
                >
                  Changer
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL DE L'APPLICATION */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 flex flex-col gap-6">

        {/* ALERTE API KEY MANQUANTE SI NON CONFIGUREE (POUR FACILITER L'EXPÉRIENCE DE RÉVISION) */}
        {!process.env.GEMINI_API_KEY && (
          <div className="bg-[#F5F1E9] border border-[#E6DFD3] text-[#5A5A40] px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-xs font-semibold">
            <AlertCircle className="w-4 h-4 text-[#5A5A40] shrink-0" />
            <span>
              <strong>Note de révision locale :</strong> L'intelligence artificielle est prête sur le serveur. Pour l'explication interactive en classe avec Maître Jean-Pierre et la génération instantanée d'autres questions, ajoutez votre clé API Gemini dans le panneau Secrets de l'AI Studio !
            </span>
          </div>
        )}

        <AnimatePresence mode="wait">
          
          {activeView === 'student' && (
            <motion.div
              key="student-space"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-6"
            >
              {/* 1. ÉCRAN D'ACCUEIL / TABLEAU DE BORD (Si aucune session en cours) */}
              {!session && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              
              {/* Colonne gauche : Matières et Sélection */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                
                {/* Message chaleureux */}
                <div className="bg-[#F5F1E9] border-2 border-[#E6DFD3] rounded-3xl p-6 text-[#3D3B33] shadow-xs relative overflow-hidden">
                  <div className="absolute right-4 bottom-0 opacity-5">
                    <GraduationCap className="w-48 h-48 text-[#5A5A40]" />
                  </div>
                  <h2 className="text-2xl font-black font-serif text-[#5A5A40] mb-2 leading-snug">
                    Prépare ton ENAFEP avec succès, {studentName || 'champion(ne)'} ! 🌟
                  </h2>
                  <p className="text-sm text-[#5A564D] leading-relaxed max-w-lg mb-4 font-medium">
                    Choisis une matière ci-dessous pour t'entraîner. Réponds correctement à chaque question. Si tu te trompes, ne t'inquiète pas : tu conserves ta question jusqu'à débloquer la solution avec nos explications et conseils !
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/80 border border-[#E6DFD3] text-[#5A5A40] px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                      🎖️ Banque de 50 questions réelles par domaine
                    </span>
                    <span className="bg-white/80 border border-[#E6DFD3] text-[#5A5A40] px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                      ⚡ Notation immédiate et conseils de Maître Jean-Pierre
                    </span>
                  </div>
                </div>

                {/* SÉLECTEUR DE TAILLE DE SESSION */}
                <div className="bg-[#FAF7F0] border border-[#E6DFD3] rounded-3xl p-5 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#5A5A40] text-white p-2 rounded-xl mt-0.5">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-[#5A5A40]">Format de ta session de révision :</h4>
                      <p className="text-xs text-[#8C867A] font-semibold mt-0.5">Sélectionne le nombre de questions (tirées au sort parmi les 50 de la base) :</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 w-full md:w-auto bg-[#F5F1E9] p-1.5 rounded-xl border border-[#D9D1C2]">
                    {[5, 10, 25, 50].map((len) => (
                      <button
                        key={len}
                        type="button"
                        onClick={() => setSessionLength(len)}
                        className={`flex-1 md:flex-none text-center text-xs px-3.5 py-2.5 rounded-lg font-extrabold transition cursor-pointer ${
                          sessionLength === len
                            ? 'bg-[#5A5A40] text-white shadow-xs'
                            : 'text-[#5A564D] hover:bg-[#EAE4D9]'
                        }`}
                      >
                        {len === 50 ? "🎖️ 50 (Examen Complet)" : `${len} questions`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grille des matières */}
                <div>
                  <h3 className="text-lg font-black text-[#3D3B33] mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#5A5A40]" />
                    Choisis ta matière d'étude :
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CATEGORIES.map((cat) => {
                      const stats = history.filter(h => h.category === cat.key);
                      const isCompletedBefore = stats.length > 0;
                      const hasGoldMedal = stats.some(s => s.score >= 40);

                      return (
                        <div
                          key={cat.key}
                          className={`border rounded-2xl p-5 ${cat.color} ${cat.borderColor} flex flex-col justify-between gap-4 transition-all hover:scale-[1.01] hover:shadow-lg ${cat.shadowColor}`}
                        >
                          <div>
                            <div className="flex justify-between items-start">
                              <span className="text-4xl">{cat.icon}</span>
                              {hasGoldMedal && (
                                <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-1 rounded-full border border-amber-300 flex items-center gap-1">
                                  <Trophy className="w-3 h-3 text-amber-500Fill" /> Champion
                                </span>
                              )}
                            </div>
                            <h4 className={`text-lg font-extrabold mt-3 ${cat.textColor}`}>{cat.label}</h4>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">{cat.description}</p>
                          </div>

                          <div className="flex flex-col gap-2 mt-2">
                            {/* Bouton Classique */}
                            <button
                              onClick={() => startSession(cat.key, false)}
                              className="w-full bg-[#5A5A40] hover:bg-[#4A4A34] text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition shadow-xs active:scale-95 cursor-pointer"
                            >
                              S'entraîner (Questions Officielles)
                              <ChevronRight className="w-4 h-4" />
                            </button>

                            {/* Bouton IA */}
                            <button
                              onClick={() => startSession(cat.key, true)}
                              className="w-full bg-[#EAE4D9] text-[#5A5A40] border border-[#C8C0B0] font-black text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#D9D1C2] transition shadow-xs active:scale-95 cursor-pointer"
                            >
                              <Sparkles className="w-3.5 h-3.5 text-[#5A5A40] fill-[#5A5A40] animate-pulse" />
                              Questions Infinies avec l'IA
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Colonne droite : Profil, Stats & Récompenses de l'élève */}
              <div className="flex flex-col gap-6">
                
                {/* Boîte Profil Globale */}
                <div className="bg-white border border-[#E6DFD3] rounded-3xl p-6 shadow-xs flex flex-col gap-4">
                  <div className="flex items-center gap-3 border-b border-[#E6DFD3] pb-4">
                    <div className="bg-[#5A5A40] text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-xs">
                      {studentName ? studentName.charAt(0).toUpperCase() : 'JG'}
                    </div>
                    <div>
                      <h4 className="text-base font-black text-[#3D3B33]">{studentName || 'Futur Diplômé de RDC'}</h4>
                      <p className="text-xs text-[#8C867A] font-medium">Élève de la 6ème Année Primaire</p>
                    </div>
                  </div>

                  {/* Statistiques en bulles */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#FDFBF7] border border-[#E6DFD3] p-3 rounded-2xl">
                      <span className="text-[10px] text-[#8C867A] font-bold block uppercase tracking-wide">Sessions</span>
                      <span className="text-lg font-black text-[#3D3B33]">{totalSessions}</span>
                    </div>
                    <div className="bg-[#FDFBF7] border border-[#E6DFD3] p-3 rounded-2xl">
                      <span className="text-[10px] text-[#5A5A40] font-bold block uppercase tracking-wide">Médailles</span>
                      <span className="text-lg font-black text-[#5A5A40] flex items-center gap-1">
                        <Award className="w-4 h-4 text-[#5A5A40]" />
                        {totalMedals}
                      </span>
                    </div>
                  </div>

                  {/* Meilleur Score */}
                  <div className="bg-[#5A5A40] text-white p-4 rounded-2xl shadow-xs text-center">
                    <span className="text-[10px] text-[#EAE4D9] font-bold uppercase tracking-wider block">Meilleur Performance ENAFEP</span>
                    <span className="text-2xl font-black">{bestScore ? `${bestScore} / 50` : '0 / 50'}</span>
                    <span className="text-xs font-semibold block mt-1 text-[#EAE4D9]">Points récoltés</span>
                  </div>
                </div>

                {/* Historique récent d'étude */}
                <div className="bg-white border border-[#E6DFD3] rounded-3xl p-6 shadow-xs flex flex-col gap-4 flex-1 justify-between">
                  <div>
                    <h4 className="text-sm font-black text-[#3D3B33] border-b border-[#E6DFD3] pb-3 flex items-center gap-2">
                      <History className="w-4 h-4 text-[#5A5A40]" />
                      Ton Historique d'Entraînement :
                    </h4>

                    {history.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-xs text-[#8C867A] font-semibold">Aucun examen n'a encore été complété.</p>
                        <p className="text-[10px] text-[#8C867A] mt-1">Sélectionne une matière à gauche pour commencer à récolter des médailles !</p>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3 mt-3 max-h-56 overflow-y-auto pr-1">
                        {history.slice(0, 4).map((item) => {
                          const catInfo = getCategoryDetails(item.category);
                          const isExcellent = item.score >= 40; // 80% réussite
                          const isWarning = item.score < 25; // insuffisant

                          return (
                            <div key={item.id} className="bg-[#FDFBF7] border border-[#E6DFD3] p-2.5 rounded-xl flex items-center justify-between text-xs transition hover:bg-[#F5F1E9]">
                              <div className="flex items-center gap-2">
                                <span className="text-lg">{catInfo?.icon || '📚'}</span>
                                <div className="flex flex-col">
                                  <span className="font-extrabold text-[#3D3B33]">{catInfo?.label || item.category}</span>
                                  <span className="text-[10px] text-[#8C867A]">{item.date} {item.isAi && '• IA'}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`font-black px-2 py-0.5 rounded-lg border ${
                                  isExcellent ? 'bg-[#D7E3D3] text-[#2D3A2B] border-[#B8CBB2]' :
                                  isWarning ? 'bg-[#F2EDEB] text-[#593E35] border-[#DBC4BC]' :
                                  'bg-[#F5F1E9] text-[#5A564D] border-[#E6DFD3]'
                                }`}>
                                  {item.score} / 50
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {history.length > 0 && (
                    <button
                      onClick={resetAllProgress}
                      className="w-full text-[#8C867A] hover:text-[#593E35] text-[10px] font-bold text-center mt-3 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Effacer tout l'historique
                    </button>
                  )}
                </div>

              </div>
            </motion.div>
          )}

          {/* 2. REVISION ACTIVE / INTERFACE DU QUIZ */}
          {session && !session.completed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              
              {/* PANNEAU PRINCIPAL DU QUIZ (2/3 de l'espace sur ordi) */}
              <div className="md:col-span-2 flex flex-col gap-4">
                
                {/* Barre de navigation / Retour */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={exitSession}
                    className="bg-white hover:bg-[#F5F1E9] border border-[#E6DFD3] px-3.5 py-1.5 text-xs font-bold rounded-xl text-[#5A5A40] flex items-center gap-1 transition shadow-xs active:scale-95 cursor-pointer"
                  >
                    Quitter la révision
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-[#EAE4D9]/80 text-[#5A564D] border border-[#E6DFD3]/80 font-bold px-3 py-1.5 rounded-xl">
                      {isAiMode ? "🚀 Générations IA illimitées" : "📋 Questions Officielles"}
                    </span>
                    <span className="text-xs bg-[#F5F1E9] text-[#5A5A40] border border-[#E6DFD3] font-bold px-3 py-1.5 rounded-xl">
                      Matière : <span className="underline font-extrabold">{getCategoryDetails(session.category)?.label}</span>
                    </span>
                  </div>
                </div>

                {/* Question active container */}
                {session.questions.length > 0 ? (
                  <div className="bg-white border-2 border-[#E6DFD3] rounded-[32px] overflow-hidden shadow-xs flex flex-col justify-between">
                    
                    {/* En-tête : Barre de progression et score */}
                    <div className="bg-[#F5F1E9] border-b border-[#E6DFD3] px-6 py-4 flex justify-between items-center flex-wrap gap-2 text-sm font-semibold">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#5A5A40] text-white rounded-lg px-2 py-0.5 text-xs font-black">
                          Question {session.currentQuestionIndex + 1} / {session.questions.length}
                        </span>
                        <div className="w-24 sm:w-36 bg-[#E6DFD3] rounded-full h-2">
                          <div 
                            className="bg-[#5A5A40] h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${((session.currentQuestionIndex + (session.isCorrectChosen ? 1 : 0)) / session.questions.length) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-[#8C867A] text-xs">
                          <AlertCircle className="w-3.5 h-3.5 text-[#8C867A]" />
                          <span>Essais : <strong className="text-[#3D3B33] font-extrabold">{(session.attempts[session.questions[session.currentQuestionIndex].id] || 0)}</strong></span>
                        </div>
                        <span className="bg-white text-[#5A5A40] border border-[#E6DFD3] font-extrabold px-3 py-1 rounded-lg text-xs shadow-xs">
                          🏆 Score : {session.score} Pts
                        </span>
                      </div>
                    </div>

                    {/* Zone de la question */}
                    <div className="p-6 sm:p-8 flex-1">
                      <div className="flex items-start gap-4 mb-6">
                        <span className="text-4xl select-none">{getCategoryDetails(session.category)?.icon}</span>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-serif text-[#2D2D2A] leading-relaxed font-bold">
                            {session.questions[session.currentQuestionIndex].text}
                          </h3>
                        </div>
                      </div>

                      {/* Les assertions / choix de réponse */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {session.questions[session.currentQuestionIndex].options.map((option, idx) => {
                          const isCorrectOption = idx === session.questions[session.currentQuestionIndex].correctAnswerIndex;
                          const wasWrongClicked = answeredOptions.has(idx);
                          const isOptionCorrectAndSolved = session.isCorrectChosen && isCorrectOption;

                          let btnStyle = "border-[#E6DFD3] hover:border-[#5A5A40] text-[#3D3B33] bg-white border-2";
                          
                          if (isOptionCorrectAndSolved) {
                            btnStyle = "bg-[#F9F8F4] border-[#5A5A40] text-[#5A5A40] shadow-[#F5F1E9] border-2 font-bold";
                          } else if (wasWrongClicked) {
                            btnStyle = "bg-[#F2EDEB] border-[#DBC4BC] text-[#593E35] line-through opacity-65 border-2";
                          }

                          return (
                            <motion.button
                              whileHover={!session.isCorrectChosen && !wasWrongClicked ? { scale: 1.01 } : {}}
                              whileTap={!session.isCorrectChosen && !wasWrongClicked ? { scale: 0.99 } : {}}
                              key={idx}
                              onClick={() => handleOptionClick(idx)}
                              disabled={session.isCorrectChosen || wasWrongClicked}
                              className={`text-left p-5 rounded-2xl text-sm flex flex-col justify-between gap-3 font-medium transition cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex flex-col gap-1 w-full">
                                <span className={`block text-xs font-bold mb-1 ${
                                  isOptionCorrectAndSolved ? 'text-[#5A5A40]' :
                                  wasWrongClicked ? 'text-[#593E35]' :
                                  'text-[#8C867A]'
                                }`}>
                                  ASSERTION {String.fromCharCode(65 + idx)}
                                </span>
                                <span className="text-base font-semibold leading-tight">{option}</span>
                              </div>

                              <div className="flex justify-end w-full mt-1">
                                {isOptionCorrectAndSolved && (
                                  <span className="w-6 h-6 bg-[#5A5A40] rounded-full flex items-center justify-center shadow-xs">
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                  </span>
                                )}
                                {wasWrongClicked && (
                                  <span className="w-6 h-6 bg-rose-700/80 rounded-full flex items-center justify-center shadow-xs">
                                    <XCircle className="w-4 h-4 text-white" />
                                  </span>
                                )}
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* Affichage de l'indice si révélé */}
                      {revealedHint && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="mt-4 bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs text-[#5A5A40] font-bold flex items-start gap-2.5"
                        >
                          <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="block text-amber-800 font-extrabold uppercase tracking-wider text-[10px] mb-0.5">💡 Indice du Coach :</span>
                            <p className="leading-relaxed font-semibold">{revealedHint}</p>
                          </div>
                        </motion.div>
                      )}

                      {/* Boîte de succès si réponse trouvée */}
                      {session.isCorrectChosen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6 bg-[#D7E3D3] border border-[#B8CBB2] p-4 rounded-2xl text-xs flex flex-col gap-1.5"
                        >
                          <div className="flex items-center gap-1.5 text-[#2D3A2B] font-extrabold pb-1">
                            <span className="w-6 h-6 bg-[#5A5A40] rounded-full flex items-center justify-center shrink-0 shadow-xs">
                              <ThumbsUp className="w-3.5 h-3.5 text-white" />
                            </span>
                            <span>Parfait ! C’est la bonne réponse ! (+{
                              (session.attempts[session.questions[session.currentQuestionIndex].id] || 1) === 1 ? 10 :
                              (session.attempts[session.questions[session.currentQuestionIndex].id] || 1) === 2 ? 7 :
                              (session.attempts[session.questions[session.currentQuestionIndex].id] || 3) === 3 ? 5 : 2
                            } points)</span>
                          </div>
                          <p className="text-[#4A5D48] font-semibold leading-relaxed">
                            {session.questions[session.currentQuestionIndex].explanation || "Excellent travail ! Tu as très bien analysé cette question."}
                          </p>
                        </motion.div>
                      )}

                      {/* Message d'erreur progressif (bloqué sur place) */}
                      {!session.isCorrectChosen && answeredOptions.size > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-4 bg-[#F2EDEB] border border-[#DBC4BC] p-3.5 rounded-2xl text-xs text-[#593E35] font-medium flex items-start gap-2"
                        >
                          <AlertCircle className="w-4 h-4 text-[#593E35] mt-0.5 shrink-0" />
                          <div>
                            <span className="font-extrabold block">Attention champion ! Ce n'est pas la bonne option.</span>
                            L'examen de l'ENAFEP exige de réfléchir calmement. Essaye une autre réponse ci-dessus. Rappelle-toi que tu dois réussir cette question pour passer à la suivante ! 🚀
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Zone de bas de carte d'action */}
                    <div className="bg-[#F5F1E9] border-t border-[#E6DFD3] px-6 py-4 flex flex-col sm:flex-row justify-between gap-3 items-center">
                      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        {/* Indice local */}
                        <button
                          onClick={() => {
                            const currentQ = session.questions[session.currentQuestionIndex];
                            setRevealedHint(getQuestionHint(currentQ));
                          }}
                          className="bg-amber-100 hover:bg-amber-200 border border-amber-200 text-amber-800 font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
                        >
                          💡 Révéler un indice
                        </button>

                        {/* Demande IA */}
                        <button
                          onClick={fetchTutorHelp}
                          disabled={isLoadingExplanation}
                          className="bg-[#EAE4D9]/80 hover:bg-[#D9D1C2] border border-[#C8C0B0] text-[#5A5A40] font-bold text-xs px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition active:scale-95 disabled:opacity-60 cursor-pointer"
                        >
                          {isLoadingExplanation ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Sparkles className="w-3.5 h-3.5 text-[#5A5A40] fill-[#5A5A40]" />
                          )}
                          Besoin d’un indice ? (Aide IA)
                        </button>
                      </div>

                      {/* Continuer */}
                      <button
                        onClick={handleNextQuestion}
                        disabled={!session.isCorrectChosen}
                        className={`w-full sm:w-auto font-black text-xs px-5 py-2.5 rounded-xl flex items-center justify-center gap-1 transition active:scale-95 cursor-pointer shadow-xs ${
                          session.isCorrectChosen
                            ? 'bg-[#5A5A40] text-white hover:bg-[#4A4A34]'
                            : 'bg-[#E6DFD3] text-[#8C867A] cursor-not-allowed shadow-none'
                        }`}
                      >
                        {session.currentQuestionIndex === (isAiMode ? 4 : session.questions.length - 1) ? "Terminer l'examen 🎓" : "Question Suivante"}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                ) : (
                  /* Chargement de la question IA ou standard */
                  <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-md flex flex-col items-center justify-center gap-4 min-h-[300px]">
                    {isGeneratingQuestion ? (
                      <>
                        <RefreshCw className="w-12 h-12 text-blue-500 animate-spin" />
                        <div>
                          <h4 className="text-lg font-black text-slate-900">Maître Jean-Pierre rédige votre question...</h4>
                          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                            L'IA de Gemini conçoit un problème de niveau ENAFEP exclusif, basé sur des items historiques réels en RDC.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-12 h-12 text-rose-500" />
                        <div>
                          <h4 className="text-lg font-black text-rose-900">Oups, aucune question chargée</h4>
                          <p className="text-xs text-slate-500 mt-1">Cliquez sur retourner pour choisir une autre option de révision.</p>
                        </div>
                        <button onClick={exitSession} className="bg-slate-900 text-white font-bold text-xs px-4 py-2 rounded-xl mt-2">
                          Retourner
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* BARRE LATÉRALE : TUTEUR MAÎTRE JEAN-PIERRE (1/3 de l'espace sur ordi) */}
              <div className="flex flex-col gap-4">
                
                {/* Panneau IA interactif avec Maître Jean-Pierre */}
                <div className="bg-white border-2 border-[#E6DFD3] rounded-3xl p-6 shadow-xs flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute right-2 -top-2 opacity-5">
                    <Sparkles className="w-24 h-24 text-[#5A5A40]" />
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#F5F1E9] text-[#5A5A40] w-11 h-11 rounded-2xl flex items-center justify-center font-black text-lg shadow-xs shrink-0 border border-[#E6DFD3]">
                      👨‍🏫
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-[#3D3B33]">Maître Jean-Pierre</h4>
                      <p className="text-[10px] text-[#8C867A] font-bold uppercase tracking-wide">Conseiller ENAFEP RDC</p>
                    </div>
                  </div>

                  {/* Message initial ou explication dynamique */}
                  <div className="bg-[#FDFBF7] border border-[#E6DFD3] rounded-2xl p-4 min-h-[140px] flex flex-col justify-between">
                    <div>
                      {isLoadingExplanation ? (
                        <div className="flex flex-col items-center justify-center py-6 gap-2 text-center">
                          <RefreshCw className="w-6 h-6 text-[#5A5A40] animate-spin" />
                          <span className="text-[11px] text-[#8C867A] font-semibold">Je prépare une explication simple...</span>
                        </div>
                      ) : tutorExplanation ? (
                        <p className="text-xs text-[#3D3B33] leading-relaxed font-semibold transition-opacity">
                          {tutorExplanation}
                        </p>
                      ) : (
                        <p className="text-xs text-[#5A564D] italic leading-relaxed font-medium">
                          « Salut {studentName || 'champion'} ! Écris-moi si tu as un doute ou besoin d'explication. En cliquant sur le bouton d'aide ci-dessous, je t'aiderai à comprendre et t'orienterai vers la bonne réponse, sans pour autant te priver du plaisir de chercher ! »
                        </p>
                      )}
                    </div>

                    {tutorExplanation && (
                      <button
                        onClick={() => setTutorExplanation(null)}
                        className="text-[10px] text-[#5A5A40] hover:underline font-bold text-left mt-3 block cursor-pointer"
                      >
                        Masquer l'explication
                      </button>
                    )}
                  </div>

                  <div className="text-[10px] text-[#8C867A] font-medium">
                    * Maître Jean-Pierre s'appuie sur le modèle de pointe de Google Gemini pour prodiguer ses explications de manière claire et bienveillante.
                  </div>
                </div>

                {/* Conseils d'Examen ENAFEP au Congo */}
                <div className="bg-[#5A5A40] text-white rounded-3xl p-6 shadow-xs flex flex-col gap-3">
                  <h4 className="text-xs uppercase tracking-widest font-black text-[#EAE4D9]">Conseil de l'inspecteur :</h4>
                  <p className="text-xs text-[#FDFBF7] leading-relaxed font-medium">
                    « Pour réussir le jour des épreuves ENAFEP, commence toujours par lire le texte entier de l'exercice deux fois. Élimine immédiatement les deux assertions qui paraissent fausses ou farfelues. Concentre ton énergie sur les deux restantes. Reste concentré et ne te précipite pas ! »
                  </p>
                </div>

                {/* 3. DISCUSSION EN DIRECT AVEC LE TUTEUR / PARENT */}
                <div className="bg-white border-2 border-[#E6DFD3] rounded-3xl p-5 shadow-xs flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-[#3D3B33] border-b border-[#E6DFD3] pb-2">
                    <MessageSquare className="w-4 h-4 text-[#5A5A40]" />
                    <h4 className="text-xs font-black uppercase tracking-wider">Échanger avec mon Parent / Tuteur</h4>
                  </div>
                  
                  <p className="text-[10px] text-[#8C867A] font-semibold leading-relaxed">
                    Un exercice te semble trop difficile ? Envoie un message rapide à ton parent ou tuteur pour qu'il t'explique.
                  </p>

                  {/* Bouton rapide d'aide contextuelle */}
                  {!session.isCorrectChosen && (
                    <button
                      onClick={() => {
                        const currentQ = session.questions[session.currentQuestionIndex];
                        const text = `S'il te plaît, j'ai besoin d'aide sur cette question de ${getCategoryDetails(session.category)?.label}. On me demande: "${currentQ.text}".`;
                        sendStudentMessage(text, currentQ.text, getCategoryDetails(session.category)?.label);
                        alert("Message d'aide envoyé avec succès ! Ton parent ou tuteur le verra instantanément sur son tableau de bord 📊.");
                      }}
                      className="bg-[#FAF7F0] hover:bg-[#F5F1E9] border border-[#D9D1C2] text-[#5A5A40] font-black text-[10px] px-3 py-2 rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer"
                    >
                      ✉️ Envoyer cette question à mon Tuteur
                    </button>
                  )}

                  {/* Mini-historique des messages */}
                  <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto bg-[#FAF7F0] border border-[#E6DFD3] p-2.5 rounded-xl text-[10px]">
                    {chatMessages.length === 0 ? (
                      <p className="text-[#8C867A] italic text-center py-4 font-semibold">Pas encore de message échangé.</p>
                    ) : (
                      chatMessages.map(msg => (
                        <div key={msg.id} className={`flex flex-col gap-0.5 ${msg.sender === 'student' ? 'items-start' : 'items-end'}`}>
                          <span className="text-[8px] font-bold text-[#8C867A]">
                            {msg.sender === 'student' ? 'Moi' : '👨‍🏫 Tuteur'}
                          </span>
                          <div className={`px-2.5 py-1.5 rounded-xl max-w-[85%] font-semibold leading-relaxed ${
                            msg.sender === 'student' 
                              ? 'bg-white text-[#3D3B33] border border-[#E6DFD3] rounded-tl-none' 
                              : 'bg-[#5A5A40] text-white rounded-tr-none'
                          }`}>
                            {msg.text}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Formulaire de saisie pour l'étudiant */}
                  <div className="flex gap-2 mt-1">
                    <input
                      type="text"
                      placeholder="Tape un message pour ton tuteur..."
                      value={studentMsgText}
                      onChange={(e) => setStudentMsgText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && studentMsgText.trim()) {
                          sendStudentMessage(studentMsgText);
                          setStudentMsgText('');
                        }
                      }}
                      className="flex-1 bg-[#FDFBF7] text-[#3D3B33] border border-[#E6DFD3] outline-none text-[10px] rounded-xl px-2.5 py-2 font-bold placeholder-[#8C867A]/60"
                    />
                    <button
                      onClick={() => {
                        if (studentMsgText.trim()) {
                          sendStudentMessage(studentMsgText);
                          setStudentMsgText('');
                        }
                      }}
                      disabled={!studentMsgText.trim()}
                      className="bg-[#5A5A40] text-white p-2 rounded-xl hover:bg-[#4A4A34] disabled:opacity-50 transition shrink-0 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          )}

          {/* 3. ÉCRAN DE REMISE DES DIPLÔMES / SUCCÈS SESION */}
          {session && session.completed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-3xl mx-auto flex flex-col gap-6"
            >
              
              {/* Le magnifique Diplôme imprimable */}
              <div className="bg-white border-8 border-double border-[#5A5A40] rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden text-center flex flex-col gap-6">
                
                {/* Rubans et décorations tricolores congolais */}
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500" />
                
                {/* Logo Médaille d'or d'ENAFEP */}
                <div className="mx-auto flex justify-center mt-2">
                  <div className="bg-[#F5F1E9] text-[#5A5A40] border-4 border-[#E6DFD3] w-20 h-20 rounded-full flex items-center justify-center shadow-md animate-bounce">
                    <Trophy className="w-10 h-10 text-[#5A5A40]" />
                  </div>
                </div>

                {/* En-tête du Certificat */}
                <div>
                  <span className="text-[10px] text-[#5A5A40] font-black tracking-widest uppercase block mb-1">
                    République Démocratique du Congo
                  </span>
                  <span className="text-[9px] text-[#8C867A] font-bold tracking-wider uppercase block mb-3">
                    Ministère de l'Enseignement Primaire, Secondaire et Technique
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#5A5A40] uppercase tracking-tight font-serif">
                    Brevet de Réussite ENAFEP
                  </h3>
                  <div className="w-24 h-1 bg-[#5A5A40] mx-auto my-3" />
                  <p className="text-xs text-[#8C867A] italic font-semibold">
                    Décerné en reconnaissance de l'excellence académique à :
                  </p>
                </div>

                {/* Nom du lauréat */}
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-[#3D3B33] tracking-tight underline select-all font-serif">
                    {studentName || 'Futur Lauréat Congolais'}
                  </h4>
                  <p className="text-xs text-[#8C867A] font-semibold mt-2">
                    Ayant complété avec bravoure le module d'entraînement intensif
                  </p>
                  <p className="text-sm text-[#3D3B33] font-black mt-1">
                    Matière : <span className="text-[#5A5A40]">{getCategoryDetails(session.category)?.label}</span>
                  </p>
                </div>

                {/* Statistiques d'examen */}
                <div className="bg-[#FDFBF7] border border-[#E6DFD3] p-4 sm:p-6 rounded-2xl max-w-md mx-auto w-full grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] text-[#8C867A] font-bold uppercase block tracking-wider">Score Note ENAFEP</span>
                    <span className="text-xl sm:text-2xl font-black text-[#5A5A40]">{scaledScore} / 50</span>
                    <span className="text-[10px] text-[#8C867A] block mt-0.5">{session.score} / {maxPossibleScore} pts de mérite</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8C867A] font-bold uppercase block tracking-wider">Questions</span>
                    <span className="text-xl sm:text-2xl font-black text-[#3D3B33]">{session.questions.length} / {session.questions.length}</span>
                    <span className="text-[10px] text-[#8C867A] block mt-0.5">Items d'examen résolus</span>
                  </div>
                </div>

                {/* Mention officielle de la RDC */}
                <div className="text-[11px] text-[#5A564D] max-w-md mx-auto leading-relaxed font-semibold">
                  « Le lauréat a fait preuve de ténacité en trouvant infailliblement toutes les bonnes réponses après analyse. Maître Jean-Pierre atteste du sérieux de sa préparation au niveau national congolais. »
                </div>

                {/* Sceau doré visuel */}
                <div className="flex justify-between items-end px-4 mt-4">
                  <div className="text-left text-[9px] text-[#8C867A] font-medium">
                    <div>Fait à Kinshasa, RDC</div>
                    <div>ENAFEP Coach AI Engine</div>
                  </div>
                  <div className="bg-[#EAE4D9]/80 text-[#5A5A40] border border-[#C8C0B0] font-black text-[9px] uppercase px-3 py-1 shadow-inner rounded-md tracking-wider">
                    ★ Sceau ENAFEP Coach ★
                  </div>
                </div>

              </div>

              {/* Actions de redirection */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  onClick={exitSession}
                  className="bg-[#5A5A40] text-white font-extrabold text-xs px-6 py-3 rounded-2xl flex items-center gap-1 shadow-xs hover:bg-[#4A4A34] transition active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retourner au tableau de bord
                </button>

                <button
                  onClick={() => startSession(session.category, true)}
                  className="bg-[#EAE4D9] text-[#5A5A40] border border-[#C8C0B0] font-black text-xs px-6 py-3 rounded-2xl flex items-center gap-2 shadow-xs hover:bg-[#D9D1C2] transition active:scale-95 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#5A5A40] fill-[#5A5A40] animate-pulse" />
                  Générer une autre session IA illimitée
                </button>
              </div>

            </motion.div>
          )}
          
          </motion.div>
        )}

        {/* 4. ESPACE DE SUIVI ENSEIGNANT / PARENT */}
        {activeView === 'teacher' && (
          <motion.div
            key="teacher-space"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-6"
          >
            {/* Entête de l'Espace Tuteur */}
            <div className="bg-[#FAF7F0] border border-[#E6DFD3] rounded-3xl p-6 text-[#3D3B33] shadow-xs">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-xl font-black font-serif text-[#5A5A40] mb-1 flex items-center gap-1.5">
                    <Users className="w-5 h-5 text-[#5A5A40]" />
                    Tableau de Bord de Supervision & Tutorat 👨‍🏫
                  </h2>
                  <p className="text-xs text-[#5A564D] font-semibold">
                    Suivez les efforts de <span className="text-[#3D3B33] font-black underline">{studentName || "l'apprenant"}</span>, analysez ses taux d'échec par question, et répondez à ses questions pour l'aider à réussir l'ENAFEP !
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (window.confirm("Voulez-vous réinitialiser tous les messages de la discussion ?")) {
                        localStorage.removeItem('enafep_chat_messages');
                        setChatMessages([
                          {
                            id: 'msg-init-1',
                            sender: 'teacher',
                            text: "Bonjour champion ! Je suis ton enseignant tuteur. Ici, tu peux m'envoyer un message si tu coinces sur un problème d'examen ou si tu as une suggestion. Je te répondrai depuis mon tableau de bord !",
                            timestamp: Date.now() - 3600000,
                            studentName: 'Tuteur'
                          }
                        ]);
                      }
                    }}
                    className="text-[10px] bg-white text-[#8C867A] hover:text-[#593E35] border border-[#E6DFD3] px-3 py-1.5 rounded-xl font-bold transition cursor-pointer"
                  >
                    Effacer la messagerie
                  </button>
                </div>
              </div>
            </div>

            {/* Grid 1: Analyses Globaux de Progression */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white border border-[#E6DFD3] p-4 rounded-2xl shadow-2xs">
                <span className="text-[10px] text-[#8C867A] font-bold block uppercase tracking-wide">Moyenne aux Examens</span>
                <span className="text-2xl font-black text-[#5A5A40]">
                  {history.length > 0
                    ? `${Math.round(history.reduce((a, b) => a + b.score, 0) / history.length)} / 50`
                    : 'Aucun examen'
                  }
                </span>
                <p className="text-[9px] text-[#8C867A] mt-1 font-semibold">Basé sur {history.length} sessions d'entraînement</p>
              </div>

              <div className="bg-white border border-[#E6DFD3] p-4 rounded-2xl shadow-2xs">
                <span className="text-[10px] text-[#8C867A] font-bold block uppercase tracking-wide">Question-Items Résolus</span>
                <span className="text-2xl font-black text-[#3D3B33]">
                  {history.reduce((acc, curr) => acc + (curr.questionsCount || curr.questions?.length || 5), 0) + 
                   (session && !session.completed ? session.currentQuestionIndex : 0)}
                </span>
                <p className="text-[9px] text-[#8C867A] mt-1 font-semibold">Comprenant les sessions en cours</p>
              </div>

              <div className="bg-white border border-[#E6DFD3] p-4 rounded-2xl shadow-2xs">
                <span className="text-[10px] text-[#8C867A] font-bold block uppercase tracking-wide">Nombre Moyen d'échecs</span>
                <span className="text-2xl font-black text-rose-700">
                  {(() => {
                    let totalFails = 0;
                    let totalQuestions = 0;
                    
                    // Historique
                    history.forEach(h => {
                      if (h.attempts) {
                        Object.values(h.attempts).forEach((att: any) => {
                          totalFails += Math.max(0, att - 1);
                          totalQuestions++;
                        });
                      }
                    });
                    
                    // Session en cours
                    if (session && !session.completed) {
                      Object.values(session.attempts).forEach((att: any) => {
                        totalFails += Math.max(0, att - 1);
                        totalQuestions++;
                      });
                    }

                    return totalQuestions > 0 ? (totalFails / totalQuestions).toFixed(1) : '0.0';
                  })()}
                </span>
                <p className="text-[9px] text-[#8C867A] mt-1 font-semibold">Par question avant réussite</p>
              </div>

              <div className="bg-white border border-[#E6DFD3] p-4 rounded-2xl shadow-2xs">
                <span className="text-[10px] text-[#5A5A40] font-bold block uppercase tracking-wide">Statut de l'Apprenant</span>
                <span className="text-base font-black text-[#5A5A40] flex items-center gap-1 mt-1">
                  🌿 En plein travail
                </span>
                <p className="text-[9px] text-[#8C867A] mt-1 pr-1 font-semibold truncate">
                  {session && !session.completed 
                    ? `En cours de révision : ${getCategoryDetails(session.category)?.label}` 
                    : 'Prêt pour sa prochaine session'
                  }
                </p>
              </div>
            </div>

            {/* Grid 2: Suivi Détaillé & Chat */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Le tableau d'analyse par question */}
              <div className="lg:col-span-2 bg-white border border-[#E6DFD3] rounded-3xl p-6 shadow-xs flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-[#E6DFD3] pb-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#5A5A40]" />
                    <h3 className="text-base font-black text-[#3D3B33]">Registre d'Analyse des Échecs & Réussites</h3>
                  </div>
                  <span className="text-[10px] bg-[#FAF7F0] text-[#5A5A40] border border-[#E6DFD3] font-bold px-2.5 py-1 rounded-lg">
                    Détail par matière
                  </span>
                </div>

                <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-2">
                  
                  {/* Live session active */}
                  {session && !session.completed && (
                    <div className="border border-amber-200 bg-amber-50/20 p-4 rounded-2xl flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
                          Session ACTIVE de l'élève
                        </span>
                        <span className="text-xs text-[#5A5A40] font-extrabold">
                          Matière : {getCategoryDetails(session.category)?.label}
                        </span>
                      </div>

                      {session.questions.map((q, idx) => {
                        const attempts = session.attempts[q.id] || 0;
                        const isCurrent = idx === session.currentQuestionIndex;
                        const fails = Math.max(0, attempts - (session.isCorrectChosen && idx <= session.currentQuestionIndex ? 1 : 0));
                        
                        if (idx > session.currentQuestionIndex) return null;

                        return (
                          <div key={q.id} className="bg-white border border-[#E6DFD3] p-3 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                            <div className="flex-1">
                              <p className="font-extrabold text-[#3D3B33]">{q.text}</p>
                              <div className="flex gap-2 items-center mt-1.5 text-[9px] text-[#8C867A] font-semibold">
                                <span>Question {idx + 1} du lot</span>
                                <span>•</span>
                                <span className="text-[#5A5A40]">Calcul du score : {
                                  attempts === 1 ? '10/10' :
                                  attempts === 2 ? '7/10' :
                                  attempts === 3 ? '5/10' : '2/10'
                                }</span>
                              </div>
                            </div>

                            <div className="shrink-0 flex items-center gap-2">
                              {isCurrent && !session.isCorrectChosen ? (
                                <span className="bg-amber-100 text-amber-800 border border-amber-200 font-bold px-2.5 py-1 rounded-lg">
                                  Élève en cours de réflexion ({attempts} essai{attempts > 1 ? 's' : ''})
                                </span>
                              ) : (
                                <span className={`font-black px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
                                  fails === 0 ? 'bg-[#D7E3D3] text-[#2D3A2B] border-[#B8CBB2]' :
                                  fails === 1 ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                  'bg-rose-50 text-rose-700 border-rose-100'
                                }`}>
                                  {fails === 0 ? '🌟 Aucun échec (Félicitations)' : 
                                   fails === 1 ? '⚠️ 1 échec d\'abord' : 
                                   `🚨 Réussi après ${fails} échecs`}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Consolidé de l'historique */}
                  {(() => {
                    const allHistoryQuestions: Array<{
                      qText: string;
                      qId: string;
                      cat: CategoryKey;
                      attempts: number;
                      date: string;
                    }> = [];

                    history.forEach(h => {
                      if (h.questions && Array.isArray(h.questions)) {
                        h.questions.forEach((q: any) => {
                          const att = h.attempts?.[q.id] || 1;
                          allHistoryQuestions.push({
                            qText: q.text,
                            qId: q.id,
                            cat: q.category || h.category,
                            attempts: att,
                            date: h.date
                          });
                        });
                      } else {
                        if (h.attempts) {
                          Object.keys(h.attempts).forEach(qId => {
                            const matchingQ = PREDEFINED_QUESTIONS.find(pq => pq.id === qId);
                            if (matchingQ) {
                              allHistoryQuestions.push({
                                qText: matchingQ.text,
                                qId: qId,
                                cat: matchingQ.category,
                                attempts: h.attempts[qId],
                                date: h.date
                              });
                            }
                          });
                        }
                      }
                    });

                    if (allHistoryQuestions.length === 0 && (!session || session.completed)) {
                      return (
                        <div className="text-center py-12">
                          <p className="text-xs text-[#8C867A] font-semibold">Aucun historique de questions.</p>
                          <p className="text-[10px] text-[#8C867A] mt-1">Dès que l'élève s'entraînera, les données d'apprentissage apparaîtront ici.</p>
                        </div>
                      );
                    }

                    return allHistoryQuestions.map((item, idx) => {
                      const fails = Math.max(0, item.attempts - 1);
                      const catInfo = getCategoryDetails(item.cat);

                      return (
                        <div key={`${item.qId}-${idx}`} className="bg-[#FAF7F0] border border-[#E6DFD3] p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#3D3B33] hover:bg-[#F5F1E9] transition">
                          <div className="flex-1">
                            <span className="text-[10px] font-black uppercase text-[#5A5A40] block mb-1">
                              {catInfo?.icon} {catInfo?.label || item.cat} • {item.date}
                            </span>
                            <p className="font-extrabold leading-snug">{item.qText}</p>
                          </div>

                          <div className="shrink-0 flex sm:flex-col items-start sm:items-end gap-1">
                            <span className={`font-black px-2.5 py-0.5 rounded-lg border flex items-center gap-1 ${
                              fails === 0 ? 'bg-[#D7E3D3] text-[#2D3A2B] border-[#B8CBB2]' :
                              fails === 1 ? 'bg-amber-100/80 text-amber-800 border-amber-200' :
                              'bg-rose-100/80 text-rose-800 border-rose-200'
                            }`}>
                              {fails === 0 ? '🌟 Réussi du 1er coup' : 
                               fails === 1 ? '⚠️ 1 erreur commise' : 
                               `🚨 Réussi après ${fails} échecs`}
                            </span>
                            <span className="text-[10px] text-[#8C867A] font-bold">
                              {item.attempts === 1 ? '10/10' :
                               item.attempts === 2 ? '7/10' :
                               item.attempts === 3 ? '5/10' : '2/10'} points ENAFEP
                            </span>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>

              {/* Messagerie avec l'auditeur/élève */}
              <div className="bg-white border border-[#E6DFD3] rounded-3xl p-6 shadow-xs flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-[#E6DFD3] pb-3 text-[#3D3B33]">
                  <MessageSquare className="w-5 h-5 text-[#5A5A40]" />
                  <h3 className="text-base font-black">Messagerie et Échanges Directs</h3>
                </div>

                <p className="text-xs text-[#8C867A] font-semibold leading-relaxed">
                  Consultez les messages envoyés en temps réel par <span className="font-extrabold">{studentName || "l'apprenant"}</span> et motivez-le en lui transmettant des astuces pédagogiques !
                </p>

                {/* Messages list */}
                <div className="flex-1 overflow-y-auto max-h-[350px] flex flex-col gap-3.5 p-2 bg-[#FAF7F0] border border-[#E6DFD3] rounded-2xl">
                  {chatMessages.length === 0 ? (
                    <p className="text-xs text-[#8C867A] italic text-center my-auto py-12">Aucun message pour l'instant.</p>
                  ) : (
                    chatMessages.map((msg) => (
                      <div 
                        key={msg.id} 
                        className={`flex flex-col gap-1 w-full max-w-[90%] ${
                          msg.sender === 'student' ? 'self-start' : 'self-end'
                        }`}
                      >
                        <span className={`text-[9.5px] uppercase tracking-wider font-extrabold ${
                          msg.sender === 'student' ? 'text-blue-700' : 'text-[#5A5A40]'
                        }`}>
                          {msg.sender === 'student' ? `🎒 Élève (${msg.studentName})` : '👨‍🏫 Tuteur (Vous)'}
                        </span>
                        
                        <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                          msg.sender === 'student' 
                            ? 'bg-white border border-[#E6DFD3] shadow-2xs rounded-tl-none font-semibold text-[#3D3B33]' 
                            : 'bg-[#5A5A40] text-white rounded-tr-none font-bold'
                        }`}>
                          <p>{msg.text}</p>
                          
                          {/* Contextual question box */}
                          {msg.sender === 'student' && msg.questionText && (
                            <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-500 italic font-medium">
                              <span className="font-black text-slate-700 block not-italic mb-0.5">📚 Matière posée : {msg.categoryLabel || 'Examen'}</span>
                              " {msg.questionText} "
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Formulaire de réponse */}
                <div className="flex flex-col gap-2 border-t border-[#E6DFD3] pt-3 mt-auto">
                  <span className="text-[10px] font-black uppercase text-[#3D3B33]">Votre réponse d'encouragement :</span>
                  {(() => {
                    const lastStudentMsg = [...chatMessages].reverse().find(m => m.sender === 'student');
                    const value = replyMsgTexts['latest'] || '';

                    return (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder={lastStudentMsg ? `Répondre au dernier message...` : "Écrivez une réponse..."}
                          value={value}
                          onChange={(e) => setReplyMsgTexts({ ...replyMsgTexts, latest: e.target.value })}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && value.trim()) {
                              sendTeacherReply(lastStudentMsg?.id || 'msg-init-1', value);
                              setReplyMsgTexts({ ...replyMsgTexts, latest: '' });
                            }
                          }}
                          className="flex-1 bg-[#FDFBF7] text-[#3D3B33] border border-[#E6DFD3] outline-none text-[11px] rounded-xl px-2.5 py-2 font-bold placeholder-slate-400"
                        />
                        <button
                          onClick={() => {
                            if (value.trim()) {
                              sendTeacherReply(lastStudentMsg?.id || 'msg-init-1', value);
                              setReplyMsgTexts({ ...replyMsgTexts, latest: '' });
                            }
                          }}
                          disabled={!value.trim()}
                          className="bg-[#5A5A40] text-white px-3.5 py-2 rounded-xl hover:bg-[#4A4A34] disabled:opacity-50 transition shrink-0 font-extrabold text-xs cursor-pointer"
                        >
                          Répondre
                        </button>
                      </div>
                    );
                  })()}
                </div>
              </div>

            </div>
          </motion.div>
        )}

      </AnimatePresence>

      </main>

      {/* FIN DE PAGE / CREDITS */}
      <footer className="bg-[#F5F1E9] text-[#8C867A] py-6 border-t border-[#E6DFD3] mt-12 text-center text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-left md:text-left text-center">
            <p className="font-extrabold text-[#5A564D]">
              ENAFEP Coach RDC © {new Date().getFullYear()}
            </p>
            <p className="text-[10px] text-[#8C867A] mt-0.5">
              Éducation Nationale RDC - Conçu pour catalyser l'intégration et la réussite scolaire au Congo.
            </p>
          </div>
          <div className="flex gap-4 font-black text-[10px]">
            <span className="text-[#2D4554] px-2 py-1 bg-white border border-[#E6DFD3]/60 rounded-lg shadow-2xs">Français</span>
            <span className="text-[#5A5A40] px-2 py-1 bg-white border border-[#E6DFD3]/60 rounded-lg shadow-2xs">Mathématiques</span>
            <span className="text-[#3B4D35] px-2 py-1 bg-white border border-[#E6DFD3]/60 rounded-lg shadow-2xs">Sciences</span>
            <span className="text-[#593E35] px-2 py-1 bg-white border border-[#E6DFD3]/60 rounded-lg shadow-2xs">Culture Générale</span>
          </div>
        </div>
      </footer>

      {/* EFFET DE BOULES D'AMBIANCE OU DE CÉLÉBRATION CHATOYANTE */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <AnimatePresence>
          {celebrationBubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              initial={{ 
                x: `${bubble.x}vw`, 
                y: '105vh', 
                scale: 0.1, 
                opacity: 0 
              }}
              animate={{ 
                x: [
                  `${bubble.x}vw`, 
                  `${bubble.x + bubble.drift}vw`, 
                  `${bubble.x - bubble.drift}vw`, 
                  `${bubble.x + (bubble.drift * 0.4)}vw`
                ],
                y: '-15vh',
                scale: [0.1, bubble.scaleMultiplier, bubble.scaleMultiplier * 1.1, 0.4],
                opacity: [0, 0.95, 0.85, 0]
              }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ 
                duration: bubble.duration, 
                delay: bubble.delay,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="absolute rounded-full pointer-events-none mix-blend-multiply flex items-center justify-center"
              style={{
                width: bubble.size,
                height: bubble.size,
                background: bubble.gradientColor,
                boxShadow: 'inset -4px -4px 10px rgba(0,0,0,0.12), 0 6px 15px rgba(0,0,0,0.14)',
                border: '1.5px solid rgba(255,255,255,0.45)'
              }}
            >
              {/* Multiples reflets d'éclat sphérique */}
              <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-white rounded-full opacity-65 blur-[0.5px]" />
              <div className="absolute bottom-[18%] right-[18%] w-[15%] h-[15%] bg-white rounded-full opacity-40 blur-[0.5px]" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
    </div>
  );
}
