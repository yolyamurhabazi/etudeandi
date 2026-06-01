import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

// Charger les variables d'environnement si nécessaire
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Client Gemini initialisé paresseusement (Lazy initialization)
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY manquante. Veuillez configurer le secret dans AI Studio.');
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// -------------------------------------------------------------
// API ENDPOINTS
// -------------------------------------------------------------

// 1. Générer une nouvelle question ENAFEP à la demande
app.post('/api/gemini/generate', async (req, res) => {
  try {
    const { category } = req.body;
    if (!category) {
      res.status(400).json({ error: 'La catégorie est obligatoire.' });
      return;
    }

    // Traduction conviviale pour le prompt
    let categoryDisplay = 'Culture générale de la RDC';
    if (category === 'maths') categoryDisplay = 'Mathématiques (calculs, aires, prix de vente, fractions)';
    else if (category === 'francais') categoryDisplay = 'Français (grammaire, conjugaison, orthographe, vocabulaire)';
    else if (category === 'sciences') categoryDisplay = 'Sciences physiques, anatomie, botanique, santé et hygiène';

    const ai = getGeminiClient();

    const prompt = `Génère 1 question à choix multiples de niveau 6ème année primaire (ENAFEP) en République Démocratique du Congo pour la matière : ${categoryDisplay}. 
    La question doit être contextualisée en RDC (fleuve Congo, francs congolais FC, marchés de Kinshasa ou Goma, élèves congolais, etc.).
    Génère exactement 4 choix d'options plausibles mais avec une seule réponse correcte évidente. 
    L'explication doit être d'un ton chaleureux et concis.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "Tu es un inspecteur de l'enseignement primaire en République Démocratique du Congo (RDC), concepteur officiel des épreuves de l'ENAFEP. Tu rédiges des questions claires, instructives, stimulantes, et exemptes d'ambiguïtés linguistiques.",
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          required: ['text', 'options', 'correctAnswerIndex', 'explanation'],
          properties: {
            text: {
              type: Type.STRING,
              description: 'Le texte complet de la question ou du problème posé, clair et bien orthographié.',
            },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Exactement 4 options de réponses proposées sous forme de tableau de chaînes.',
            },
            correctAnswerIndex: {
              type: Type.INTEGER,
              description: "L'index de l'option correcte dans la liste (entre 0 et 3).",
            },
            explanation: {
              type: Type.STRING,
              description: "Une brève explication (1 à 2 phrases) du pourquoi cette réponse est la bonne.",
            },
          },
        },
      },
    });

    const responseText = response.text || '{}';
    const parsedData = JSON.parse(responseText);

    // Retourner la question avec un identifiant unique temporaire
    res.json({
      id: `gen-${Date.now()}`,
      category,
      text: parsedData.text || 'Question générée',
      options: parsedData.options || ['A', 'B', 'C', 'D'],
      correctAnswerIndex: typeof parsedData.correctAnswerIndex === 'number' ? parsedData.correctAnswerIndex : 0,
      explanation: parsedData.explanation || 'Explication de la réponse correcte.',
      isCustomGenerated: true,
    });
  } catch (error: any) {
    console.error('Erreur de génération de question:', error);
    res.status(500).json({
      error: "Impossible de générer une nouvelle question.",
      details: error.message,
    });
  }
});

// 2. Obtenir une explication de Maître Jean-Pierre pour une question
app.post('/api/gemini/explain', async (req, res) => {
  try {
    const { question, selectedOption, isCorrectCategory } = req.body;
    if (!question) {
      res.status(400).json({ error: 'La question est requise.' });
      return;
    }

    const ai = getGeminiClient();

    const prompt = `Voici une question d'examen ENAFEP :
    "${question.text}"
    Options de réponses :
    0. ${question.options[0]}
    1. ${question.options[1]}
    2. ${question.options[2]}
    3. ${question.options[3]}
    La bonne réponse est l'option numéro ${question.correctAnswerIndex} : "${question.options[question.correctAnswerIndex]}".
    
    L'élève a répondu : "${selectedOption}" (${isCorrectCategory ? 'C’est correct !' : 'C’est incorrect, il a eu faux.'}).
    
    Explique de façon encourageante et très simple (niveau primaire) quel est le bon raisonnement à suivre. 
    Si l'élève s'est trompé, ne lui donne pas d'abord la réponse directement si possible mais donne-lui un superbe indice imagé ou un grand encouragement chaleureux pour l'aiguiller vers la bonne réflexion.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "Tu es Maître Jean-Pierre, un enseignant d'école primaire en RDC extrêmement chaleureux, aimant et enthousiaste. Tu aides les élèves à préparer l'ENAFEP. Tu parles avec douceur, emploies des expressions congolaises encourageantes ('C'est du bon travail !', 'Allez champion !', 'Courage mon petit !', 'Tu y es presque !') et restes toujours positif.",
      },
    });

    res.json({ explanation: response.text || "Continue de réfléchir, tu es rempli de talent !" });
  } catch (error: any) {
    console.error('Erreur d’explication:', error);
    res.status(500).json({
      error: "Maître Jean-Pierre n'a pas pu envoyer son explication.",
      details: error.message,
    });
  }
});

// -------------------------------------------------------------
// VITE INTEGRATION
// -------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}

startServer();
