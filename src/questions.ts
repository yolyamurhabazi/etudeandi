import { Question } from './types';

export const PREDEFINED_QUESTIONS: Question[] = [
  // ==================== FRANÇAIS (50 Questions) ====================
  {
    id: 'fr-1',
    category: 'francais',
    text: "Dans la phrase : « L'enfant étudie sa leçon chaque soir pour réussir son examen. », quelle est la fonction grammaticale du groupe de mots « chaque soir » ?",
    options: ["COD", "Complément circonstanciel de temps (CCT)", "CC de but", "Sujet"],
    correctAnswerIndex: 1,
    explanation: "« chaque soir » indique le moment où l'action s'accomplit, c'est donc un CCT."
  },
  {
    id: 'fr-2',
    category: 'francais',
    text: "Choisissez la bonne conjugaison du verbe « manger » à la première personne du pluriel au passé simple de l'indicatif :",
    options: ["Nous mangesons", "Nous mangions", "Nous mangeâmes", "Nous mangerons"],
    correctAnswerIndex: 2,
    explanation: "Au passé simple, pour les verbes du 1er groupe, nous se termine en « -âmes ». On ajoute le « e » pour adoucir le 'g'."
  },
  {
    id: 'fr-3',
    category: 'francais',
    text: "Quel est le pluriel correct du nom singulier « corail » ?",
    options: ["Les corails", "Les coraux", "Les corauxs", "Les corailes"],
    correctAnswerIndex: 1,
    explanation: "Le mot « corail » se termine par « -aux » au pluriel. C'est une exception classique en -ail."
  },
  {
    id: 'fr-4',
    category: 'francais',
    text: "Quel est le synonyme du mot « scintillant » ?",
    options: ["Sombre et opaque", "Brillant et étincelant", "Lourd et pesant", "Fragile et cassant"],
    correctAnswerIndex: 1,
    explanation: "Scintiller signifie briller en jetant des lueurs intermittentes."
  },
  {
    id: 'fr-5',
    category: 'francais',
    text: "Dans la phrase : « Les cybercafés facilitent les recherches des élèves intelligents. », quelle est la nature de « intelligents » ?",
    options: ["Nom propre", "Adjectif qualificatif", "Verbe d'action", "Adverbe"],
    correctAnswerIndex: 1,
    explanation: "« intelligents » apporte une précision sur le nom « élèves ». C'est un adjectif qualificatif."
  },
  {
    id: 'fr-6',
    category: 'francais',
    text: "Quel est le féminin correct du mot « inspecteur » ?",
    options: ["Inspectrice", "Inspecteuse", "Inspectere", "Inspecteure"],
    correctAnswerIndex: 0,
    explanation: "Les noms en -teur forment généralement leur féminin en -trice, comme inspecteur / inspectrice."
  },
  {
    id: 'fr-7',
    category: 'francais',
    text: "Trouvez le contraire du mot « éphémère » (qui dure peu) :",
    options: ["Passager", "Éternel ou durable", "Rapide", "Fragile"],
    correctAnswerIndex: 1,
    explanation: "L'opposé d'éphémère est éternel, permanent ou durable."
  },
  {
    id: 'fr-8',
    category: 'francais',
    text: "Dans la phrase passive : « Le gâteau est mangé par la petite fille. », quel est le complément d'agent ?",
    options: ["Le gâteau", "est mangé", "par la petite fille", "la petite"],
    correctAnswerIndex: 2,
    explanation: "Le complément d'agent désigne celui qui fait l'action dans une phrase passive. Ici, c'est « par la petite fille »."
  },
  {
    id: 'fr-9',
    category: 'francais',
    text: "Comment s'accorde le participe passé dans : « Les filles sont (partir) en vacances. » ?",
    options: ["parti", "partis", "partie", "parties"],
    correctAnswerIndex: 3,
    explanation: "Avec l'auxiliaire « être », le participe passé s'accorde en genre (féminin) et en nombre (pluriel) avec le sujet."
  },
  {
    id: 'fr-10',
    category: 'francais',
    text: "Dans la phrase : « Je la vois tous les jours. », quelle est la nature de « la » ?",
    options: ["Article défini", "Pronom personnel", "Adjectif démonstratif", "Préposition"],
    correctAnswerIndex: 1,
    explanation: "Placé devant un verbe, « la » est un pronom personnel (il remplace un COD)."
  },
  {
    id: 'fr-11',
    category: 'francais',
    text: "Quel est le pluriel du mot composé « chou-fleur » ?",
    options: ["des choux-fleur", "des chou-fleurs", "des choux-fleurs", "des chou-fleur"],
    correctAnswerIndex: 2,
    explanation: "Composé de deux noms, les deux prennent la marque du pluriel : des choux-fleurs."
  },
  {
    id: 'fr-12',
    category: 'francais',
    text: "Dans la phrase : « Il parle de son pays. », le groupe « de son pays » est :",
    options: ["Un COD", "Un COI (Complément d'objet indirect)", "Un CCT", "Un sujet"],
    correctAnswerIndex: 1,
    explanation: "Il parle *de quoi ?* -> « de son pays ». C'est un complément d'objet indirect (COI)."
  },
  {
    id: 'fr-13',
    category: 'francais',
    text: "Conjuguez le verbe « faire » à la 2ème personne du pluriel (vous) au présent de l'indicatif :",
    options: ["Vous faisez", "Vous faites", "Vous faisiez", "Vous ferez"],
    correctAnswerIndex: 1,
    explanation: "La conjugaison correcte de faire au présent est : vous faites."
  },
  {
    id: 'fr-14',
    category: 'francais',
    text: "Quel est l'infinitif du verbe dans la phrase : « Nous résolvons le problème. » ?",
    options: ["Résolvrer", "Résolver", "Résoudre", "Résoudreur"],
    correctAnswerIndex: 2,
    explanation: "Le verbe est « résoudre » (3ème groupe)."
  },
  {
    id: 'fr-15',
    category: 'francais',
    text: "Quelle phrase contient une figure de style appelée comparaison ?",
    options: ["Il court très vite.", "Le lion est le roi de la forêt.", "Il est courageux comme un lion.", "La forêt pleure."],
    correctAnswerIndex: 2,
    explanation: "La présence de l'outil « comme » établit une comparaison explicite."
  },
  {
    id: 'fr-16',
    category: 'francais',
    text: "Choisissez la forme correcte : « Malheureusement, ils n'ont ... de chance. »",
    options: ["pas", "aucun", "aucune", "plus"],
    correctAnswerIndex: 2,
    explanation: "Le mot « chance » est féminin singulier, on dit « aucune chance »."
  },
  {
    id: 'fr-17',
    category: 'francais',
    text: "Quelle est l'orthographe correcte du mot signifiant une personne qui écrit des livres ?",
    options: ["Auteur", "Autheur", "Aucteur", "Auter"],
    correctAnswerIndex: 0,
    explanation: "Le mot s'écrit tout simplement « auteur »."
  },
  {
    id: 'fr-18',
    category: 'francais',
    text: "Laquelle de ces phrases exprime une action future par rapport au présent ?",
    options: ["Nous lisions un livre.", "Nous lisons un livre.", "Nous lirons un livre.", "Nous eûmes lu un livre."],
    correctAnswerIndex: 2,
    explanation: "« Nous lirons » correspond au futur simple de l'indicatif."
  },
  {
    id: 'fr-19',
    category: 'francais',
    text: "Dans « Une table en bois », quelle est la fonction de « en bois » ?",
    options: ["Épithète", "Complément du nom", "Attribut du sujet", "COD"],
    correctAnswerIndex: 1,
    explanation: "Introduit par la préposition « en », il complète le nom table : c'est un complément du nom."
  },
  {
    id: 'fr-20',
    category: 'francais',
    text: "Quel verbe s'écrit correctement au présent de l'indicatif à la 3ème personne du singulier ?",
    options: ["Il peins", "Il peind", "Il peint", "Il peindra"],
    correctAnswerIndex: 2,
    explanation: "Le verbe peindre se conjugue : il peint au présent."
  },
  {
    id: 'fr-21',
    category: 'francais',
    text: "Parmi ces mots, quel est l'antonyme d'« égoïste » ?",
    options: ["Avare", "Généreux / Altruiste", "Solitaire", "Triste"],
    correctAnswerIndex: 1,
    explanation: "L'antonyme d'égoïste est altruiste ou généreux."
  },
  {
    id: 'fr-22',
    category: 'francais',
    text: "Quelle est la forme verbale correcte à l'impératif présent (2ème personne du pluriel) pour le verbe « savoir » ?",
    options: ["Savoir", "Sachez", "Savez", "Sachons"],
    correctAnswerIndex: 1,
    explanation: "L'impératif du verbe savoir est : sache, sachons, sachez."
  },
  {
    id: 'fr-23',
    category: 'francais',
    text: "Dans la phrase : « Cet exercice paraît difficile », quelle est la fonction de « difficile » ?",
    options: ["Épithète", "Attribut du sujet", "COD", "Complément de l'adjectif"],
    correctAnswerIndex: 1,
    explanation: "Placé après le verbe d'état « paraître », « difficile » est attribut du sujet « Cet exercice »."
  },
  {
    id: 'fr-24',
    category: 'francais',
    text: "Complétez : « Malgré ses efforts, il a ... son examen de fin d'études primaires. »",
    options: ["réussi", "échoué", "passer", "manquer"],
    correctAnswerIndex: 0,
    explanation: "Le contexte indique qu'avec des efforts, le résultat logique est d'avoir « réussi »."
  },
  {
    id: 'fr-25',
    category: 'francais',
    text: "Trouvez l'homophone correct : « Le boulanger pétrit la ... pour faire du pain kwanza. »",
    options: ["pâte", "patte", "pate", "pâtes"],
    correctAnswerIndex: 0,
    explanation: "La « pâte » (avec accent circonflexe) désigne le mélange de farine et d'eau, alors que la « patte » est le membre d'un animal."
  },
  {
    id: 'fr-26',
    category: 'francais',
    text: "Quelle est la nature grammaticale de « très » dans « un très bon élève » ?",
    options: ["Adjectif", "Adverbe de degré", "Préposition", "Pronom"],
    correctAnswerIndex: 1,
    explanation: "« très » est un adverbe qui modifie l'intensité de l'adjectif « bon »."
  },
  {
    id: 'fr-27',
    category: 'francais',
    text: "Identifiez la phrase correctement orthographiée :",
    options: [
      "Ils ont mangé des pommes rouge.",
      "Ils ont mangé des pommes rouges.",
      "Ils ont mangés des pommes rouges.",
      "Ils ont manger des pommes rouges."
    ],
    correctAnswerIndex: 1,
    explanation: "Le participe passé conjugué avec « avoir » sans COD placé devant reste invariable (mangé). L'adjectif « rouges » s'accorde avec pommes."
  },
  {
    id: 'fr-28',
    category: 'francais',
    text: "Quel est la nature du mot souligné dans : « *Qui* frappe à la porte ? »",
    options: ["Pronom interrogatif", "Pronom relatif", "Adverbe", "Déterminant"],
    correctAnswerIndex: 0,
    explanation: "Il sert à poser une question directe sur l'identité d'une personne, c'est un pronom interrogatif."
  },
  {
    id: 'fr-29',
    category: 'francais',
    text: "Le mot « bibliothèque » désigne :",
    options: ["Un meuble de lit", "Un lieu de conservation de livres", "Un vendeur de cahiers", "Une imprimerie nationale"],
    correctAnswerIndex: 1,
    explanation: "Une bibliothèque est une collection ou un lieu où l'on garde des livres."
  },
  {
    id: 'fr-30',
    category: 'francais',
    text: "Quel est le participe présent du verbe « finir » ?",
    options: ["Fini", "Finissant", "Finis", "Finira"],
    correctAnswerIndex: 1,
    explanation: "Pour les verbes du 2e groupe, le participe présent se termine en -issant (finissant)."
  },
  {
    id: 'fr-31',
    category: 'francais',
    text: "Dans quelle phrase le mot « tout » est-il un adjectif s'accordant avec le nom ?",
    options: ["Elles sont tout émues.", "Toutes les filles étudient.", "Ils travaillent tout doucement.", "Tout va bien."],
    correctAnswerIndex: 1,
    explanation: "« Toutes les filles » : ici « toutes » détermine le nom féminin pluriel « filles »."
  },
  {
    id: 'fr-32',
    category: 'francais',
    text: "Quel est le pluriel de « capital » ?",
    options: ["Capitals", "Capitaux", "Capitales", "Capitauxs"],
    correctAnswerIndex: 1,
    explanation: "Les adjectifs et noms en -al se terminent généralement en -aux au pluriel."
  },
  {
    id: 'fr-33',
    category: 'francais',
    text: "Comment appelle-t-on la forme du verbe qui n'est pas conjuguée ?",
    options: ["L'indicatif", "Le subjonctif", "L'infinitif", "L'impératif"],
    correctAnswerIndex: 2,
    explanation: "L'infinitif est le mode impersonnel exprimant le verbe non conjugué."
  },
  {
    id: 'fr-34',
    category: 'francais',
    text: "Quelle est la nature du mot « durant » dans « durant la récréation » ?",
    options: ["Préposition", "Verbe", "Adjectif", "Conjonction"],
    correctAnswerIndex: 0,
    explanation: "« durant » est une préposition qui marque la durée."
  },
  {
    id: 'fr-35',
    category: 'francais',
    text: "Trouvez le synonyme du verbe « châtier » :",
    options: ["Récompenser", "Punir", "Féliciter", "Chanter"],
    correctAnswerIndex: 1,
    explanation: "Châtier signifie infliger une peine, punir sévèrement."
  },
  {
    id: 'fr-36',
    category: 'francais',
    text: "Dans « La maison que j'ai achetée », quelle est la fonction de « que » ?",
    options: ["Sujet", "COD du verbe acheter", "Attribut du sujet", "Complément de temps"],
    correctAnswerIndex: 1,
    explanation: "« que » remplace la maison, qui est le COD du verbe acheter : j'ai acheté *la maison*."
  },
  {
    id: 'fr-37',
    category: 'francais',
    text: "Quel adjectif s'accorde correctement au féminin singulier ?",
    options: ["Un élève blanc / Une feuille blanche", "Un garçon sec / Une fille seche", "Un habit neuf / Une robe neuf", "Un homme gentil / Une femme gentillee"],
    correctAnswerIndex: 0,
    explanation: "Le féminin de blanc est blanche."
  },
  {
    id: 'fr-38',
    category: 'francais',
    text: "Dans la phrase : « Ne fais pas de bruit ! », à quel mode est conjugué le verbe ?",
    options: ["Indicatif", "Subjonctif", "Impératif", "Conditionnel"],
    correctAnswerIndex: 2,
    explanation: "Il exprime un ordre ou une interdiction, c'est le mode impératif."
  },
  {
    id: 'fr-39',
    category: 'francais',
    text: "Quel mot contient un préfixe de négation ?",
    options: ["Malheureux", "Impossible", "Amener", "Relire"],
    correctAnswerIndex: 1,
    explanation: "« Impossible » utilise le préfixe négatif « im- » pour indiquer le contraire de possible."
  },
  {
    id: 'fr-40',
    category: 'francais',
    text: "Quel est le sujet du verbe dans : « Dans la cour de l'école jouent les élèves. » ?",
    options: ["cour de l'école", "jouent", "les élèves", "l'école"],
    correctAnswerIndex: 2,
    explanation: "Le sujet est inversé, ce sont « les élèves » qui font l'action de jouer."
  },
  {
    id: 'fr-41',
    category: 'francais',
    text: "Quel est le participe passé du verbe « devoir » au masculin singulier ?",
    options: ["du", "dû", "due", "devoiré"],
    correctAnswerIndex: 1,
    explanation: "Le participe passé de devoir prend un accent circonflexe au masculin singulier pour le distinguer de l'article : dû."
  },
  {
    id: 'fr-42',
    category: 'francais',
    text: "Dans « Il mange un fruit délicieux », quelle est la fonction de « délicieux » ?",
    options: ["Attribut du sujet", "Épithète liée du nom fruit", "COD", "Sujet"],
    correctAnswerIndex: 1,
    explanation: "Placé directement à côté du nom « fruit » qu'il qualifie, c'est une épithète liée."
  },
  {
    id: 'fr-43',
    category: 'francais',
    text: "Choisissez la bonne orthographe :",
    options: ["Accueil", "Acueil", "Accueuil", "Accuille"],
    correctAnswerIndex: 0,
    explanation: "Le mot s'écrit « accueil » (la voyelle 'u' est avant le 'e' pour faire le son dur)."
  },
  {
    id: 'fr-44',
    category: 'francais',
    text: "À quel temps de l'indicatif correspond « Nous avions fini » ?",
    options: ["Passé composé", "Plus-que-parfait", "Passé simple", "Futur antérieur"],
    correctAnswerIndex: 1,
    explanation: "Auxiliaire à l'imparfait + participe passé = plus-que-parfait."
  },
  {
    id: 'fr-45',
    category: 'francais',
    text: "Quel nom s'écrit correctement au pluriel ?",
    options: ["Des clous", "Des hibous", "Des caillous", "Des genous"],
    correctAnswerIndex: 0,
    explanation: "Les mots héritant de -ou prennent un 's' (comme clous), sauf les exceptions en -x (comme cailloux, hiboux, genoux)."
  },
  {
    id: 'fr-46',
    category: 'francais',
    text: "Un paragraphe commence généralement par un espace vide appelé :",
    options: ["Une marge", "Une rature", "Un paragraphe", "Un alinéa"],
    correctAnswerIndex: 3,
    explanation: "L'alinéa est le retrait de ligne marquant le début d'un paragraphe."
  },
  {
    id: 'fr-47',
    category: 'francais',
    text: "Trouvez l'intrus parmi ces verbes du 2e groupe :",
    options: ["Finir", "Grandir", "Partir", "Choisir"],
    correctAnswerIndex: 2,
    explanation: "Partir se conjugue « nous partons » alors que le 2e groupe fait « -issons » (nous finissons, nous grandissons, nous choisissons)."
  },
  {
    id: 'fr-48',
    category: 'francais',
    text: "Quelle conjonction de coordination exprime le choix ?",
    options: ["Et", "Ou", "Mais", "Donc"],
    correctAnswerIndex: 1,
    explanation: "« Ou » indique une alternative, un choix à effectuer."
  },
  {
    id: 'fr-49',
    category: 'francais',
    text: "Quelle est la bonne orthographe de cette interjection exprimant la douleur ?",
    options: ["Aille !", "Aïe !", "Ay !", "Haïe !"],
    correctAnswerIndex: 1,
    explanation: "L'exclamation de douleur s'orthographie : Aïe !"
  },
  {
    id: 'fr-50',
    category: 'francais',
    text: "Que signifie le suffixe « -able » dans le mot « lavable » ?",
    options: ["Qui a peur d'être lavé", "Qui peut être lavé", "Qui lave souvent", "Une machine à laver"],
    correctAnswerIndex: 1,
    explanation: "Le suffixe -able exprime la possibilité ou la capacité de subir l'action (qui peut être lavé)."
  },

  // ==================== MATHÉMATIQUES (50 Questions) ====================
  {
    id: 'ma-1',
    category: 'maths',
    text: "Un commerçant de Kinshasa achète 12 sacs de maïs à 15$ le sac. Quel est le montant total de son achat ?",
    options: ["150 $", "180 $", "165 $", "210 $"],
    correctAnswerIndex: 1,
    explanation: "Pour trouver le total, on multiplie le nombre de sacs par le prix unitaire : 12 × 15 = 180 $."
  },
  {
    id: 'ma-2',
    category: 'maths',
    text: "Quelle formule permet d'obtenir l'Aire d'un champ rectangulaire sachant que la Longueur est notée 'L' et la largeur 'l' ?",
    options: ["L + l", "Périmètre × 2", "Longueur × largeur (L × l)", "Longueur × 2"],
    correctAnswerIndex: 2,
    explanation: "L'aire se calcule en multipliant la Longueur par sa largeur : Aire = L × l."
  },
  {
    id: 'ma-3',
    category: 'maths',
    text: "Calculez la somme des fractions suivantes : 3/7 + 2/7. Quelle est la bonne réponse ?",
    options: ["5/14", "6/7", "5/7", "1/7"],
    correctAnswerIndex: 2,
    explanation: "On additionne uniquement les numérateurs sous un dénominateur commun : 3/7 + 2/7 = 5/7."
  },
  {
    id: 'ma-4',
    category: 'maths',
    text: "Un maraîcher vend un panier de légumes à 12 500 FC. Il fait un bénéfice de 3 500 FC. À quel prix avait-il acheté ce panier à l'origine ?",
    options: ["16 000 FC", "9 000 FC", "10 000 FC", "7 500 FC"],
    correctAnswerIndex: 1,
    explanation: "Prix d'achat = Prix de vente - Bénéfice = 12 500 FC - 3 500 FC = 9 000 FC."
  },
  {
    id: 'ma-5',
    category: 'maths',
    text: "Un cycliste parcourt une distance de 2,5 kilomètres pour se rendre à l'école. Convertissez cette distance en mètres (m).",
    options: ["25 m", "250 m", "2 500 m", "25 000 m"],
    correctAnswerIndex: 2,
    explanation: "1 km = 1 000 m. Donc 2,5 km × 1 000 = 2 500 m."
  },
  {
    id: 'ma-6',
    category: 'maths',
    text: "Quelle est la valeur numérique de l'expression suivante : (15 + 5) × 3 - 10 ?",
    options: ["50", "40", "25", "60"],
    correctAnswerIndex: 0,
    explanation: "On commence par les parenthèses : 15 + 5 = 20. Puis la multiplication : 20 × 3 = 60. Enfin, on soustrait : 60 - 10 = 50."
  },
  {
    id: 'ma-7',
    category: 'maths',
    text: "Quelle est la formule du périmètre d'un cercle branchée sur le rayon 'R' ?",
    options: ["Périmètre = Pi × R", "Périmètre = 2 × Pi × R", "Périmètre = Pi × R²", "Périmètre = R × 2"],
    correctAnswerIndex: 1,
    explanation: "Le périmètre de la circonférence d'un cercle vaut 2 × Pi × R (ou Pi × Diamètre)."
  },
  {
    id: 'ma-8',
    category: 'maths',
    text: "Un élève a obtenu 36 points sur 40 à son test annuel de géométrie. Quel pourcentage de réussite cela représente-t-il ?",
    options: ["80%", "72%", "90%", "85%"],
    correctAnswerIndex: 2,
    explanation: "(36 / 40) × 100 = 0,9 × 100 = 90%."
  },
  {
    id: 'ma-9',
    category: 'maths',
    text: "Un cultivateur possède un terrain carré de 12 mètres de côté. Quelle est la surface en mètres carrés (m²) ?",
    options: ["48 m²", "144 m²", "24 m²", "120 m²"],
    correctAnswerIndex: 1,
    explanation: "Aire d'un carré = Côté × Côté. Donc 12 m × 12 m = 144 m²."
  },
  {
    id: 'ma-10',
    category: 'maths',
    text: "Convertissez 4,5 litres (L) en centilitres (cL) :",
    options: ["45 cL", "450 cL", "4 500 cL", "0,45 cL"],
    correctAnswerIndex: 1,
    explanation: "1 L = 100 cL. Donc 4,5 × 100 = 450 cL."
  },
  {
    id: 'ma-11',
    category: 'maths',
    text: "Une horloge indique 14h15. Quelle heure sera-t-il après un quart d'heure et 10 minutes ?",
    options: ["14h30", "14h40", "14h35", "14h25"],
    correctAnswerIndex: 1,
    explanation: "15 min (un quart d'heure) + 10 min = 25 minutes supplémentaires. 14h15 + 25 min = 14h40."
  },
  {
    id: 'ma-12',
    category: 'maths',
    text: "Combien d'arêtes possède un cube parfait ?",
    options: ["6 arêtes", "8 arêtes", "12 arêtes", "4 arêtes"],
    correctAnswerIndex: 2,
    explanation: "Un cube comporte 6 faces, 8 sommets, et 12 arêtes rectilignes."
  },
  {
    id: 'ma-13',
    category: 'maths',
    text: "Quel est le résultat de la division : 350 / 0,5 ?",
    options: ["175", "700", "350", "650"],
    correctAnswerIndex: 1,
    explanation: "Diviser par 0,5 revient à multiplier par 2. Donc 350 × 2 = 700."
  },
  {
    id: 'ma-14',
    category: 'maths',
    text: "Un produit coûte 8 000 FC. Le vendeur accorde une remise immédiate de 10%. Quel est le nouveau prix payé ?",
    options: ["7 200 FC", "7 000 FC", "7 800 FC", "6 400 FC"],
    correctAnswerIndex: 0,
    explanation: "La réduction est de 800 FC (10% de 8 000). Le prix final est 8 000 - 800 = 7 200 FC."
  },
  {
    id: 'ma-15',
    category: 'maths',
    text: "Calculez le périmètre d'un triangle équilatéral ayant 8 cm de côté :",
    options: ["16 cm", "24 cm", "12 cm", "32 cm"],
    correctAnswerIndex: 1,
    explanation: "Un triangle équilatéral a 3 côtés égaux. Le périmètre est de 3 × 8 cm = 24 cm."
  },
  {
    id: 'ma-16',
    category: 'maths',
    text: "Le double d'un nombre augmenté de 5 est égal à 25. Quel est ce nombre ?",
    options: ["10", "15", "20", "5"],
    correctAnswerIndex: 0,
    explanation: "Soit x le nombre. 2x + 5 = 25 => 2x = 20 => x = 10."
  },
  {
    id: 'ma-17',
    category: 'maths',
    text: "Combien y a-t-il de grammes (g) dans un demi-kilogramme ?",
    options: ["50 g", "500 g", "250 g", "100 g"],
    correctAnswerIndex: 1,
    explanation: "Un kilogramme = 1 000 g. La moitié (demi-kilo) de 1 000 g est 500 g."
  },
  {
    id: 'ma-18',
    category: 'maths',
    text: "Comment appelle-t-on un angle qui mesure exactement 90 degrés ?",
    options: ["Angle aigu", "Angle plat", "Angle droit", "Angle obtus"],
    correctAnswerIndex: 2,
    explanation: "Un angle de 90° est classifié comme un angle droit."
  },
  {
    id: 'ma-19',
    category: 'maths',
    text: "Calculez 0,35 + 1,2 :",
    options: ["0,47", "1,55", "1,37", "1,235"],
    correctAnswerIndex: 1,
    explanation: "0,35 + 1,20 = 1,55."
  },
  {
    id: 'ma-20',
    category: 'maths',
    text: "Quel est le plus grand diviseur commun (PGCD) des nombres 12 et 18 ?",
    options: ["2", "3", "6", "12"],
    correctAnswerIndex: 2,
    explanation: "Les diviseurs de 12 sont : 1, 2, 3, 4, 6, 12. Ceux de 18 sont : 1, 2, 3, 6, 9, 18. Le plus grand commun est 6."
  },
  {
    id: 'ma-21',
    category: 'maths',
    text: "Simplifiez au maximum la fraction 15/20 :",
    options: ["5/4", "3/4", "3/5", "1/2"],
    correctAnswerIndex: 1,
    explanation: "On divise le numérateur et le dénominateur par leur diviseur commun le plus grand, qui est 5 : 15/5 = 3 et 20/5 = 4. Donc 3/4."
  },
  {
    id: 'ma-22',
    category: 'maths',
    text: "Une citerne de 400 L se remplit à un rythme de 20 L par minute. Combien de temps faut-il pour qu'elle devienne complètement pleine ?",
    options: ["10 minutes", "20 minutes", "15 minutes", "30 minutes"],
    correctAnswerIndex: 1,
    explanation: "Temps = Capacité totale / Débit = 400 / 20 = 20 minutes."
  },
  {
    id: 'ma-23',
    category: 'maths',
    text: "Quelle est la somme totale de tous les angles intérieurs d'un triangle quelconque ?",
    options: ["90°", "180°", "360°", "270°"],
    correctAnswerIndex: 1,
    explanation: "La somme des 3 angles intérieurs d'un triangle est constante et vaut toujours 180°."
  },
  {
    id: 'ma-24',
    category: 'maths',
    text: "Une maman distribue équitablement 4 500 FC à ses 3 enfants. Quelle somme d'argent reçoit chaque enfant ?",
    options: ["1 200 FC", "1 500 FC", "1 800 FC", "2 000 FC"],
    correctAnswerIndex: 1,
    explanation: "4 500 FC divisé par 3 = 1 500 FC par enfant."
  },
  {
    id: 'ma-25',
    category: 'maths',
    text: "Dans un cercle, de quoi est égal le Diamètre par rapport au Rayon ?",
    options: ["Diamètre = Rayon / 2", "Diamètre = Rayon + 10", "Diamètre = 2 × Rayon", "Diamètre = Rayon × Rayon"],
    correctAnswerIndex: 2,
    explanation: "Le diamètre est la corde passant par le centre. Il vaut exactement deux fois la longueur du rayon."
  },
  {
    id: 'ma-26',
    category: 'maths',
    text: "Calculez l'intérêt annuel d'un capital placé de 5 000 $ au taux annuel de 6% :",
    options: ["30 $", "300 $", "60 $", "500 $"],
    correctAnswerIndex: 1,
    explanation: "Intérêt = Capital × Taux = 5 000 × (6 / 100) = 5 000 × 0,06 = 300 $."
  },
  {
    id: 'ma-27',
    category: 'maths',
    text: "Convertissez 250 décimètres (dm) en mètres (m) :",
    options: ["2,5 m", "25 m", "250 m", "0,25 m"],
    correctAnswerIndex: 1,
    explanation: "1 m = 10 dm. Donc 250 dm divisé par 10 = 25 m."
  },
  {
    id: 'ma-28',
    category: 'maths',
    text: "Trouvez la valeur d'une fraction dont le numérateur est 8 et le dénominateur est le double du numérateur :",
    options: ["1/4", "1/2", "1/3", "2"],
    correctAnswerIndex: 1,
    explanation: "Le dénominateur est 2 × 8 = 16. La fraction est 8/16, qui se simplifie en 1/2."
  },
  {
    id: 'ma-29',
    category: 'maths',
    text: "Un train part à 8h45 et arrive à sa destination à 11h15. Quelle a été la durée du voyage ?",
    options: ["2 heures", "2h30", "3 heures", "1h45"],
    correctAnswerIndex: 1,
    explanation: "De 8h45 à 9h00 = 15 min. De 9h00 à 11h00 = 2h. De 11h00 à 11h15 = 15 min. Total : 2 heures et 30 minutes."
  },
  {
    id: 'ma-30',
    category: 'maths',
    text: "Quelle est la moitié du tiers de 18 ?",
    options: ["6", "3", "2", "9"],
    correctAnswerIndex: 1,
    explanation: "Le tiers de 18 est 18 / 3 = 6. La moitié de 6 est 6 / 2 = 3."
  },
  {
    id: 'ma-31',
    category: 'maths',
    text: "Un rectangle a un périmètre de 40 cm. Sa Longueur mesure 12 cm. Quelle est sa largeur ?",
    options: ["6 cm", "8 cm", "10 cm", "14 cm"],
    correctAnswerIndex: 1,
    explanation: "Demi-périmètre = 20 cm. Largeur = Demi-périmètre - Longueur = 20 - 12 = 8 cm."
  },
  {
    id: 'ma-32',
    category: 'maths',
    text: "Trouvez le nombre manquant : 3/4 = X/12.",
    options: ["6", "8", "9", "10"],
    correctAnswerIndex: 2,
    explanation: "Pour passer de 4 à 12, on multiplie par 3. On multiplie donc aussi le numérateur par 3 : 3 × 3 = 9. Donc x = 9."
  },
  {
    id: 'ma-33',
    category: 'maths',
    text: "Combien d'angles droits possède un rectangle de forme parfaite ?",
    options: ["2 angles", "3 angles", "4 angles", "Aucun"],
    correctAnswerIndex: 2,
    explanation: "Un rectangle possède exactement 4 angles droits de 90° chacun."
  },
  {
    id: 'ma-34',
    category: 'maths',
    text: "Calculez la surface d'un triangle dont la base est de 10 cm et la hauteur est de 6 cm :",
    options: ["60 cm²", "30 cm²", "15 cm²", "45 cm²"],
    correctAnswerIndex: 1,
    explanation: "Aire du triangle = (Base × Hauteur) / 2 = (10 × 6) / 2 = 30 cm²."
  },
  {
    id: 'ma-35',
    category: 'maths',
    text: "Une marchandise coûte 12 000 FC au prix de revient d'achat. Le commerçant la revend en réalisant une perte de 2 000 FC. Quel est le Prix de vente ?",
    options: ["14 000 FC", "10 000 FC", "12 000 FC", "8 000 FC"],
    correctAnswerIndex: 1,
    explanation: "Prix de vente = Prix d'achat - Perte. Donc 12 000 - 2 000 = 10 000 FC."
  },
  {
    id: 'ma-36',
    category: 'maths',
    text: "Un champ rectangulaire mesure 200 m de Longueur sur 100 m de largeur. Quelle est sa surface totale en hectares (ha) ?",
    options: ["20 hectares", "2 hectares", "0,2 hectare", "200 hectares"],
    correctAnswerIndex: 1,
    explanation: "Aire = 200 × 100 = 20 000 m². Sachant que 1 hectare = 10 000 m², le champ fait 20 000 / 10 000 = 2 hectares."
  },
  {
    id: 'ma-37',
    category: 'maths',
    text: "Quel est le résultat de la multiplication : 25 × 11 ?",
    options: ["250", "275", "265", "295"],
    correctAnswerIndex: 1,
    explanation: "25 × 11 = 25 × 10 + 25 = 250 + 25 = 275."
  },
  {
    id: 'ma-38',
    category: 'maths',
    text: "Une famille consomme 1,5 kg de riz par jour. Combien de kg consomme-t-elle durant une semaine de 7 jours ?",
    options: ["7 kg", "10,5 kg", "15 kg", "9,5 kg"],
    correctAnswerIndex: 1,
    explanation: "1,5 kg × 7 = 10,5 kg."
  },
  {
    id: 'ma-39',
    category: 'maths',
    text: "Trouvez le produit de : 0,5 × 0,4 :",
    options: ["2,0", "0,2", "0,02", "0,002"],
    correctAnswerIndex: 1,
    explanation: "0,5 × 0,4 = 0,20 (ou 0,2)."
  },
  {
    id: 'ma-40',
    category: 'maths',
    text: "Quel est le plus petit commun multiple (PPCM) de 4 et 6 ?",
    options: ["24", "12", "8", "6"],
    correctAnswerIndex: 1,
    explanation: "Multiples de 4 : 4, 8, 12, 16... Multiples de 6 : 6, 12, 18, 24... Le plus petit commun est 12."
  },
  {
    id: 'ma-41',
    category: 'maths',
    text: "Le prix d'un cahier de 96 pages s'élève à 1 500 FC. Combien coûtent 6 cahiers de ce même modèle ?",
    options: ["7 500 FC", "9 000 FC", "8 500 FC", "10 000 FC"],
    correctAnswerIndex: 1,
    explanation: "6 × 1 500 FC = 9 000 FC."
  },
  {
    id: 'ma-42',
    category: 'maths',
    text: "Convertissez 3,5 tonnes (t) en kilogrammes (kg) :",
    options: ["350 kg", "3 500 kg", "35 000 kg", "35 kg"],
    correctAnswerIndex: 1,
    explanation: "1 tonne = 1 000 kg. Donc 3,5 × 1 000 = 3 500 kg."
  },
  {
    id: 'ma-43',
    category: 'maths',
    text: "Quel est l'intrus parmi ces formules de géométrie plane ?",
    options: ["Périmètre du carré = Côté × 4", "Périmètre du rectangle = (L + l) × 2", "Aire du cube = Longueur × 12", "Aire du rectangle = L × l"],
    correctAnswerIndex: 2,
    explanation: "« Aire du cube = Longueur × 12 » est fausse. L'aire totale d'un cube est de 6 × Côté²."
  },
  {
    id: 'ma-44',
    category: 'maths',
    text: "Trois ouvriers maçons effectuent un travail manuel complexe en 12 jours. En combien de jours 6 ouvriers du même rendement feraient ce travail ?",
    options: ["24 jours", "6 jours", "12 jours", "18 jours"],
    correctAnswerIndex: 1,
    explanation: "C'est une règle de proportionnalité inverse. Deux fois plus d'ouvriers prendront deux fois moins de temps : 12 / 2 = 6 jours."
  },
  {
    id: 'ma-45',
    category: 'maths',
    text: "Résolvez la soustraction de fractions suivantes : 4/5 - 1/5.",
    options: ["3/5", "3/10", "3", "3/25"],
    correctAnswerIndex: 0,
    explanation: "Les fractions possèdent le même dénominateur, donc : 4/5 - 1/5 = (4-1)/5 = 3/5."
  },
  {
    id: 'ma-46',
    category: 'maths',
    text: "Calculez le volume intérieur d'une armoire parallélépipédique (pavé droit) : Longueur = 2m, largeur = 1m, hauteur = 3m.",
    options: ["5 m³", "6 m³", "8 m³", "10 m³"],
    correctAnswerIndex: 1,
    explanation: "Volume = Longueur × largeur × hauteur = 2 × 1 × 3 = 6 m³."
  },
  {
    id: 'ma-47',
    category: 'maths',
    text: "Une montre de sport achetée à 12$ est revendue 16$. Quel est le taux de bénéfice réalisé sur le prix d'achat ?",
    options: ["25%", "33,3%", "50%", "20%"],
    correctAnswerIndex: 1,
    explanation: "Bénéfice = 4$. Taux = (4 / 12) × 100 = 1/3 × 100 = 33,3%."
  },
  {
    id: 'ma-48',
    category: 'maths',
    text: "Quel nombre multiplié par lui-même donne 64 ?",
    options: ["6", "7", "8", "9"],
    correctAnswerIndex: 2,
    explanation: "8 × 8 = 64 (la racine carrée de 64 est 8)."
  },
  {
    id: 'ma-49',
    category: 'maths',
    text: "Combien y a-t-il de secondes dans une heure accomplie ?",
    options: ["60 secondes", "3 600 secondes", "120 secondes", "86 400 secondes"],
    correctAnswerIndex: 1,
    explanation: "Une heure = 60 minutes. Une minute = 60 secondes. Donc 60 × 60 = 3 600 secondes."
  },
  {
    id: 'ma-50',
    category: 'maths',
    text: "Convertissez la fraction commune 3/4 en valeur décimale simple :",
    options: ["0,34", "0,5", "0,75", "0,8"],
    correctAnswerIndex: 2,
    explanation: "La division entière de 3 par 4 est égale à 0,75."
  },

  // ==================== SCIENCES (50 Questions) ====================
  {
    id: 'sc-1',
    category: 'sciences',
    text: "Parmi ces organes du corps humain, quel est celui qui fonctionne comme une pompe pour faire circuler le sang dans tout l'organisme ?",
    options: ["Les poumons", "Le cœur", "Le foie", "L'estomac"],
    correctAnswerIndex: 1,
    explanation: "Le cœur pousse le sang à travers les vaisseaux pour irriguer l'organisme."
  },
  {
    id: 'sc-2',
    category: 'sciences',
    text: "Comment appelle-t-on le processus chimique par lequel les plantes vertes capturent la lumière du soleil pour fabriquer leur propre sève et nourriture ?",
    options: ["La respiration cellulaire", "La photosynthèse", "La transpiration des feuilles", "La germination de la graine"],
    correctAnswerIndex: 1,
    explanation: "La photosynthèse capture la lumière du soleil pour créer des matières organiques."
  },
  {
    id: 'sc-3',
    category: 'sciences',
    text: "Lorsqu'on baisse la température de l'eau en dessous de 0 °C, elle se solidifie et devient de la glace. De quel état physique de l'eau s'agit-il ?",
    options: ["L'état liquide", "L'état gazeux", "L'état solide", "L'état gazeux"],
    correctAnswerIndex: 2,
    explanation: "La glace représente l'état physique rigide et solide de l'eau."
  },
  {
    id: 'sc-4',
    category: 'sciences',
    text: "Quelle grave maladie de nos régions, caractérisée par une forte fièvre intermittente, est transmise à l'Homme par la piqûre de l'anophèle femelle ?",
    options: ["Le choléra", "Le paludisme (ou Malaria)", "La fièvre typhoïde", "La tuberculose"],
    correctAnswerIndex: 1,
    explanation: "Le paludisme est provoqué par un parasite injecté par l'anophèle moustique femelle."
  },
  {
    id: 'sc-5',
    category: 'sciences',
    text: "Quelle est la planète de notre système solaire qui se trouve juste après la Terre et qui est appelée la « Planète rouge » ?",
    options: ["Vénus", "Mars", "Jupiter", "Saturne"],
    correctAnswerIndex: 1,
    explanation: "Mars possède une couleur rouge brique due à l'oxyde de fer à sa surface."
  },
  {
    id: 'sc-6',
    category: 'sciences',
    text: "Quel est l'organe principal de la respiration chez l'être humain ?",
    options: ["L'œsophage", "Les reins", "Les poumons", "Le cœur"],
    correctAnswerIndex: 2,
    explanation: "Les poumons permettent les échanges gazeux en absorbant l'oxygène et rejetant le CO₂."
  },
  {
    id: 'sc-7',
    category: 'sciences',
    text: "De quel état de la matière s'agit-il lorsque celle-ci change de forme selon le récipient mais conserve le même volume ?",
    options: ["Solide", "Liquide", "Gazeux", "Aérien"],
    correctAnswerIndex: 1,
    explanation: "Un liquide prend la forme du vase qui le contient, contrairement aux solides."
  },
  {
    id: 'sc-8',
    category: 'sciences',
    text: "Comment appelle-t-on le liquide digestif acide fabriqué par notre estomac ?",
    options: ["La salive", "Le suc gastrique", "La bile", "Le suc pancréatique"],
    correctAnswerIndex: 1,
    explanation: "L'estomac produit du suc gastrique très acide pour aider à dissoudre les aliments solides."
  },
  {
    id: 'sc-9',
    category: 'sciences',
    text: "Quelle partie de la fleur porte le pollen nécessaire à la fécondation végétale ?",
    options: ["Le pistil", "L'étamine", "Le pétale", "Le sépale"],
    correctAnswerIndex: 1,
    explanation: "L'étamine est l'organe reproducteur mâle de la fleur et elle produit le pollen."
  },
  {
    id: 'sc-10',
    category: 'sciences',
    text: "Qu'est-ce qui caractérise la classe d'animaux appelés les « Vertébrés » ?",
    options: ["Ils ont du sang froid", "Ils possèdent une colonne vertébrale", "Ils volent tous", "Ils n'ont pas d'os"],
    correctAnswerIndex: 1,
    explanation: "Les vertébrés sont définis par la présence d'une colonne vertébrale et d'un squelette interne."
  },
  {
    id: 'sc-11',
    category: 'sciences',
    text: "Quelle est l'étoile centrale autour de laquelle tournent toutes les planètes de notre galaxie proche ?",
    options: ["La Lune", "L'Étoile polaire", "Le Soleil", "Sirius"],
    correctAnswerIndex: 2,
    explanation: "Le Soleil est notre étoile, au centre d'attraction gravitationnelle du système solaire."
  },
  {
    id: 'sc-12',
    category: 'sciences',
    text: "Quel organe est principalement responsable de la filtration du sang et de la création de l'urine ?",
    options: ["Les intestins", "Le foie", "Les reins", "La rate"],
    correctAnswerIndex: 2,
    explanation: "Les reins jouent un rôle d'épurateur en éliminant les déchets du sang sous forme d'urine."
  },
  {
    id: 'sc-13',
    category: 'sciences',
    text: "Par quel gaz invisible respiré par l'homme remplace-t-on l'air vicié dans nos poumons lors de l'inspiration ?",
    options: ["Le dioxyde de carbone", "L'azote", "L'oxygène (O₂)", "Le monoxyde de carbone"],
    correctAnswerIndex: 2,
    explanation: "Nous absorbons l'oxygène indispensable au fonctionnement de nos cellules."
  },
  {
    id: 'sc-14',
    category: 'sciences',
    text: "Quelle maladie parasitaire chronique des pays tropicaux, causée par de minuscules vers se logeant dans le foie ou la vessie, s'attrape en marchant nus dans de l'eau stagnante ?",
    options: ["Le choléra", "La bilharziose", "La méningite", "Le tétanos"],
    correctAnswerIndex: 1,
    explanation: "La bilharziose (schistosomiase) se contracte par pénétration de larves de vers à travers la peau dans l'eau douce."
  },
  {
    id: 'sc-15',
    category: 'sciences',
    text: "À quelle température l'eau bout-elle dans des conditions de pression atmosphérique normales ?",
    options: ["50 °C", "80 °C", "100 °C", "120 °C"],
    correctAnswerIndex: 2,
    explanation: "Le point d'ébullition (vapeur d'eau) de l'eau est de 100 degrés Celsius."
  },
  {
    id: 'sc-16',
    category: 'sciences',
    text: "De quel minéral est principalement constitué notre squelette d'os pour résister aux chocs ?",
    options: ["Le fer", "Le calcium", "Le potassium", "Le magnésium"],
    correctAnswerIndex: 1,
    explanation: "Le calcium apporte la dureté et la solidité structurelle à nos os et dents."
  },
  {
    id: 'sc-17',
    category: 'sciences',
    text: "Comment caractérise-t-on le phénomène où les arbres perdent toutes leurs feuilles pour survivre à la saison sèche ?",
    options: ["La déforestation", "La feuillaison", "Le défeuillage caduc", "La photosynthèse"],
    correctAnswerIndex: 2,
    explanation: "Les feuilles caduques chutent pour économiser l'eau de la plante durant la sècheresse."
  },
  {
    id: 'sc-18',
    category: 'sciences',
    text: "Quel est le thermomètre de référence permettant de mesurer la température thermique corporelle de l'Homme ?",
    options: ["Le thermomètre médical", "Le baromètre", "L'anémomètre", "Le pluviomètre"],
    correctAnswerIndex: 0,
    explanation: "Le thermomètre médical (souvent rectal ou sous l'aisselle) indique la température pour déceler la fièvre."
  },
  {
    id: 'sc-19',
    category: 'sciences',
    text: "Laquelle de ces substances est un excellent isolant électrique empêchant le courant de passer ?",
    options: ["Le cuivre", "Le fer", "Le caoutchouc", "L'eau salée"],
    correctAnswerIndex: 2,
    explanation: "Le caoutchouc résiste à la circulation d'électrons, contrairement au cuivre métallique."
  },
  {
    id: 'sc-20',
    category: 'sciences',
    text: "Quel est le principal réservoir de stockage de la bile produite par notre foie digestive ?",
    options: ["Le duodénum", "La vésicule biliaire", "Le rectum", "L'appendice"],
    correctAnswerIndex: 1,
    explanation: "La bile est accumulée et concentrée dans la vésicule avant d'être rejetée dans l'intestin."
  },
  {
    id: 'sc-21',
    category: 'sciences',
    text: "Comment nomme-t-on la science qui étudie l'anatomie et les comportements du monde des animaux ?",
    options: ["La géologie", "La botanique", "La zoologie", "La microbiologie"],
    correctAnswerIndex: 2,
    explanation: "La zoologie est la branche de la biologie consacrée à l'étude des caractéristiques du règne animal."
  },
  {
    id: 'sc-22',
    category: 'sciences',
    text: "Quel élément naturel transforme la sève brute d'une plante en sève élaborée nourricière ?",
    options: ["La clarté des étoiles", "La chlorophylle des feuilles vertes", "Les engrais chimiques", "L'arrosage répété"],
    correctAnswerIndex: 1,
    explanation: "La chlorophylle permet d'utiliser l'énergie solaire pour synthétiser des sucres."
  },
  {
    id: 'sc-23',
    category: 'sciences',
    text: "Quelle grave maladie infectieuse provoque une terrible jaunisse et de profonds dégâts à notre tissu de foie ?",
    options: ["L'hépatite", "La carie dentaire", "L'asthme", "Les oreillons"],
    correctAnswerIndex: 0,
    explanation: "L'hépatite est l'inflammation infectieuse du foie provoquée par des virus (A, B, C, etc.)."
  },
  {
    id: 'sc-24',
    category: 'sciences',
    text: "Quel animal marin de très grande taille est en réalité un mammifère allaitant ses petits ?",
    options: ["Le requin blanc", "La baleine", "Le thon rouge", "Combrienne"],
    correctAnswerIndex: 1,
    explanation: "La baleine possède des mamelles pour allaiter son baleineau, c'est un mammifère."
  },
  {
    id: 'sc-25',
    category: 'sciences',
    text: "Qu'est-ce que la sève transportée par les racines de la plante depuis la terre ?",
    options: ["La sève brute complète", "La sève élaborée", "Du jus de sucre", "L'huile aromatique"],
    correctAnswerIndex: 0,
    explanation: "La sève brute est constituée d'eau et de sels minéraux pompés dans les sols par les racines."
  },
  {
    id: 'sc-26',
    category: 'sciences',
    text: "Quel instrument de mesure spécifique permet de mesurer le poids (force de pesanteur) d'un objet en Newtons ?",
    options: ["La balance de cuisine", "Le dynamomètre", "Le thermomètre", "La règle graduée"],
    correctAnswerIndex: 1,
    explanation: "Le dynamomètre utilise un ressort étalonné pour afficher des forces exprimées en Newtons."
  },
  {
    id: 'sc-27',
    category: 'sciences',
    text: "Quel état physique correspond à la vapeur d'eau libérée dans l'air sous l'action de la chaleur ?",
    options: ["Liquide", "Gazeux", "Solide", "Neutre"],
    correctAnswerIndex: 1,
    explanation: "La vapeur d'eau est invisible et occupe tout l'espace disponible, c'est un gaz."
  },
  {
    id: 'sc-28',
    category: 'sciences',
    text: "Quel est l'insecte qui transmet la terrible maladie du sommeil (trypanosomiase africaine) en RDC ?",
    options: ["La mouche tsé-tsé", "L'anophèle moustique", "Le criquet migrateur", "La puce de sable"],
    correctAnswerIndex: 0,
    explanation: "La mouche tsé-tsé (glossine) inocule des trypanosomes provocant cette léthargie."
  },
  {
    id: 'sc-29',
    category: 'sciences',
    text: "Quel organe sécrète le suc pancréatique intervenant dans la digestion des sucres ?",
    options: ["Le foie", "L'estomac", "Le pancréas", "L'intestin grêle"],
    correctAnswerIndex: 2,
    explanation: "Le pancréas est une glande mixte qui déverse de puissantes enzymes digestives."
  },
  {
    id: 'sc-30',
    category: 'sciences',
    text: "Quelle partie de l'œil capte la lumière pour former des images inversées envoyées au cerveau ?",
    options: ["La cornée", "La rétine", "L'iris", "La pupille"],
    correctAnswerIndex: 1,
    explanation: "La rétine tapisse le fond de l'œil et sert d'écran sensible pour les informations visuelles."
  },
  {
    id: 'sc-31',
    category: 'sciences',
    text: "La sève élaborée de la plante découle d'un mouvement partant des :",
    options: ["Feuilles vers toutes les parties", "Racines vers les feuilles", "Branches vers les bourgeons", "Fleurs vers les graines"],
    correctAnswerIndex: 0,
    explanation: "Élaborée au niveau des feuilles grâce à la photosynthèse, elle descend nourrir l'arbre entier."
  },
  {
    id: 'sc-32',
    category: 'sciences',
    text: "Quel élément minéral vital au maintien du sang est très abondant dans les épinards et le foie rouge ?",
    options: ["Le sodium", "Le fer", "Le soufre", "Le plomb"],
    correctAnswerIndex: 1,
    explanation: "Le fer est essentiel pour former de l'hémoglobine qui distribue l'oxygène."
  },
  {
    id: 'sc-33',
    category: 'sciences',
    text: "Quelle est la durée moyenne de gestation (grossesse) complète chez une femme ?",
    options: ["6 mois", "9 mois (environ 270 jours)", "12 mois", "3 mois"],
    correctAnswerIndex: 1,
    explanation: "Une grossesse humaine dure environ 9 mois de développement embryonnaire."
  },
  {
    id: 'sc-34',
    category: 'sciences',
    text: "Quelle maladie bactérienne ravageuse de l'intestin, causant de fortes diarrhées déshydratantes, s'attrape par l'eau souillée contaminée ?",
    options: ["Le paludisme", "La grippe", "Le choléra", "La rubéole"],
    correctAnswerIndex: 2,
    explanation: "Le vibrion cholérique provoque une infection intestinale intense induisant cette maladie."
  },
  {
    id: 'sc-35',
    category: 'sciences',
    text: "De quelle plante tire-t-on le médicament contre le paludisme appelé la Quinine ?",
    options: ["L'eucalyptus", "Le quinquina (arbre écorcé)", "Le manioc", "La canne à sucre"],
    correctAnswerIndex: 1,
    explanation: "La Quinine est extraite de l'écorce jaune ou rouge de l'arbre quinquina."
  },
  {
    id: 'sc-36',
    category: 'sciences',
    text: "Combien d'ailes possèdent la majorité des insectes du règne animal ?",
    options: ["Aucun", "2 ailes", "4 ailes (2 paires)", "8 ailes"],
    correctAnswerIndex: 2,
    explanation: "Les insectes types ont deux paires d'ailes implantées au niveau du thorax, malgré des exceptions."
  },
  {
    id: 'sc-37',
    category: 'sciences',
    text: "Quel phénomène naturel attire inexorablement les pommes tombées vers le sol ?",
    options: ["La force du vent", "La gravitation de la Terre", "Le poids du soleil", "Le magnétisme lunaire"],
    correctAnswerIndex: 1,
    explanation: "La force de gravité (pesanteur) découverte par Newton fait s'attirer les corps matériels."
  },
  {
    id: 'sc-38',
    category: 'sciences',
    text: "En sciences de l'environnement, qu'est-ce qu'une espèce menacée ?",
    options: ["Un prédateur dangereux", "Une plante qui fane", "Une espèce en voie d'extinction définitive", "Un animal domestiqué"],
    correctAnswerIndex: 2,
    explanation: "Ce sont les espèces dont la population faible les expose à disparaître totalement de la planète."
  },
  {
    id: 'sc-39',
    category: 'sciences',
    text: "Quel est la substance liquide s'écoulant à travers des plaies après la coagulation sanguine ?",
    options: ["La lymphe", "Le sérum", "Du pus gras", "De l'acide salé"],
    correctAnswerIndex: 1,
    explanation: "Le sérum est la partie liquide qui se sépare du caillot de sang coagulé."
  },
  {
    id: 'sc-40',
    category: 'sciences',
    text: "L'oviparité qualifie les animaux qui se développent :",
    options: ["Dans des œufs pondus au-dehors", "Dans le ventre de la mère", "Dans l'eau seulement", "Par division cellulaire"],
    correctAnswerIndex: 0,
    explanation: "Les ovipares (poules, oiseaux, dinosaures) déposent des œufs contenant leur embryon."
  },
  {
    id: 'sc-41',
    category: 'sciences',
    text: "La vaccination permet à notre organisme de fabriquer de puissants défenses appelées :",
    options: ["Des toxines", "Des anticorps spécifiques", "Des microbes sains", "Des globules rouges"],
    correctAnswerIndex: 1,
    explanation: "Les vaccins stimulent une mémoire immunitaire pour sécréter des anticorps luttant contre la maladie future."
  },
  {
    id: 'sc-42',
    category: 'sciences',
    text: "Quelle matière est un bon conducteur thermique permettant de chauffer rapidement de la nourriture ?",
    options: ["Le plastique", "L'aluminium ou l'acier", "Le bois de chêne", "Le verre épais"],
    correctAnswerIndex: 1,
    explanation: "Les métaux comme l'alu propagent l'énergie de la chaleur très facilement."
  },
  {
    id: 'sc-43',
    category: 'sciences',
    text: "Où se déroule la fécondation conduisant à la formation de la graine d'un épi de maïs ?",
    options: ["Dans le pistil (ovules)", "Sur les feuilles vertes", "Dans la terre meuble", "À l'extrémité des poils"],
    correctAnswerIndex: 0,
    explanation: "L'ovule végétal contenu dans l'ovaire du pistil est fécondé par un grain de pollen."
  },
  {
    id: 'sc-44',
    category: 'sciences',
    text: "Quel animal au monde a la peau couverte d'écailles soudées n'allaitant pas ses petits ?",
    options: ["Un mammifère", "Un reptile", "Un amphibien", "Un rongeur"],
    correctAnswerIndex: 1,
    explanation: "Les reptiles (lézards, crocodiles, serpents) ont la peau étanche recouverte d'écailles sèches."
  },
  {
    id: 'sc-45',
    category: 'sciences',
    text: "De quelle vitamine la carence prolongée induit-elle des saignements de gencives appelés 'Le scorbut' ?",
    options: ["Vitamine A", "Vitamine B", "Vitamine C du citron", "Vitamine D"],
    correctAnswerIndex: 2,
    explanation: "Le scorbut est engendré par un manque absolu de vitamine C trouvée dans les agrumes frais."
  },
  {
    id: 'sc-46',
    category: 'sciences',
    text: "Trouvez l'organe qui est un vestige n'ayant plus de fonction essentielle dans notre gros intestin :",
    options: ["Le colon", "L'appendice", "La rate", "Le duodénum"],
    correctAnswerIndex: 1,
    explanation: "L'appendice vermiforme est une petite excroissance qui n'est plus active dans le métabolisme digestif."
  },
  {
    id: 'sc-47',
    category: 'sciences',
    text: "Le passage physique de l'état gazeux de l'eau à son état liquide de pluie s'appelle :",
    options: ["La solidification", "La fusion", "La condensation (liquéfaction)", "L'évaporation"],
    correctAnswerIndex: 2,
    explanation: "La condensation de la vapeur en pluie de nuage est une transition vers l'état liquide."
  },
  {
    id: 'sc-48',
    category: 'sciences',
    text: "Quelle force s'oppose au mouvement de glissement de nos chaussures sur un terrain glissant de terre rouge ?",
    options: ["Le magnétisme", "La pesanteur", "La force de frottement (ou friction)", "La pression de l'air"],
    correctAnswerIndex: 2,
    explanation: "Le frottement entre la semelle et le sol s'oppose au glissement et empêche d'échapper à l'équilibre."
  },
  {
    id: 'sc-49',
    category: 'sciences',
    text: "Quelle méthode simple et sécurisante élimine 99% des pathogènes de l'eau buvable pour la famille ?",
    options: ["La reposer 2 jours", "La filtrer dans un tissu", "La faire bouillir 5 minutes", "Y mettre du sucre blanc"],
    correctAnswerIndex: 2,
    explanation: "La pasteurisation thermique en ébullition détruit les germes microscopiques du choléra."
  },
  {
    id: 'sc-50',
    category: 'sciences',
    text: "Un oiseau se distingue à coup sûr d'une chauve-souris mammifère car :",
    options: ["Il a des ailes souples", "Il possède des plumes d'enveloppe", "Il peut voler très haut", "Il se nourrit de fruits"],
    correctAnswerIndex: 1,
    explanation: "Les plumes sont la caractéristique unique et absolue qui identifie la classe aviaire des oiseaux."
  },

  // ==================== CULTURE GÉNÉRALE (50 Questions) ====================
  {
    id: 'cg-1',
    category: 'culture_generale',
    text: "Quel est le plus grand et le plus de long cours d'eau de la République Démocratique du Congo, qui traverse le pays ?",
    options: ["Le fleuve Congo", "La rivière Kasaï", "La rivière Ubangi", "La rivière Lomami"],
    correctAnswerIndex: 0,
    explanation: "Le fleuve Congo mesure 4 700 km et structure tout le bassin national."
  },
  {
    id: 'cg-2',
    category: 'culture_generale',
    text: "Quelle est la capitale politique de la République Démocratique du Congo ?",
    options: ["Lubumbashi", "Goma", "Kinshasa", "Kisangani"],
    correctAnswerIndex: 2,
    explanation: "Kinshasa concentre toutes les rênes décisionnelles de la République."
  },
  {
    id: 'cg-3',
    category: 'culture_generale',
    text: "En quelle année la République Démocratique du Congo a-t-elle obtenu sa noble indépendance souveraine ?",
    options: ["Le 30 juin 1950", "Le 30 juin 1960", "Le 17 mai 1997", "Le 30 juin 2000"],
    correctAnswerIndex: 1,
    explanation: "Le Congo est devenu souverain de la tutelle belge le 30 juin 1960."
  },
  {
    id: 'cg-4',
    category: 'culture_generale',
    text: "Quelles sont les trois couleurs présentes sur le drapeau actuel de la République Démocratique du Congo ?",
    options: ["Vert, Jaune, Rouge", "Bleu, Jaune, Rouge", "Rouge, Noir, Blanc", "Vert, Blanc, Rouge"],
    correctAnswerIndex: 1,
    explanation: "Le drapeau arbore une couleur bleu ciel, traversée par une ligne rouge liserée de jaune, et une étoile or jaune."
  },
  {
    id: 'cg-5',
    category: 'culture_generale',
    text: "Quel est le lac d'Afrique de l'Est bordant la RDC, célèbre pour être le deuxième lac le plus profond du monde ?",
    options: ["Le lac Kivu", "Le lac Albert", "Le lac Tanganyika", "Le lac Édouard"],
    correctAnswerIndex: 2,
    explanation: "Le Tanganyika est une fantastique richesse lacustre et écologique de l'Est congolais."
  },
  {
    id: 'cg-6',
    category: 'culture_generale',
    text: "Quel célèbre avocat et militant anticolonialiste congolais fut le tout premier Premier ministre du pays indépendant en 1960 ?",
    options: ["Joseph Kasavubu", "Patrice Émery Lumumba", "Mobutu Sese Seko", "Laurent-Désiré Kabila"],
    correctAnswerIndex: 1,
    explanation: "Patrice Lumumba est le grand héros national de l'indépendance de 1960."
  },
  {
    id: 'cg-7',
    category: 'culture_generale',
    text: "Quelle est la monnaie de cours légal exclusive émise par la Banque Centrale de la République Démocratique du Congo (BCC) ?",
    options: ["Le dollar congolais", "Le Shilling", "Le Franc congolais (FC)", "Le Kwanza"],
    correctAnswerIndex: 2,
    explanation: "Il s'agit du Franc congolais, lancé en 1998 pour remplacer le Nouveau Zaïre."
  },
  {
    id: 'cg-8',
    category: 'culture_generale',
    text: "La RDC est limitrophe avec plusieurs pays. Quel est le nombre exact de pays voisins qui entourent ses frontières ?",
    options: ["5 pays", "7 pays", "9 pays voisins", "11 pays"],
    correctAnswerIndex: 2,
    explanation: "La RDC partage ses frontières avec 9 pays voisins d'Afrique centrale et de l'Est."
  },
  {
    id: 'cg-9',
    category: 'culture_generale',
    text: "Quel est le titre de l'hymne national patriotique solennel de la RDC ?",
    options: ["La Congolaise", "Debout Congolais", "Le Zaïrois", "La Marche Nationale"],
    correctAnswerIndex: 1,
    explanation: "« Debout Congolais », composé par le R.P. Boka en 1960, est l'hymne officiel."
  },
  {
    id: 'cg-10',
    category: 'culture_generale',
    text: "Quel grand volcan culminant à l'Est de la RDC près de Goma est célèbre pour ses coulées de lave dévastatrices ?",
    options: ["Le Nyiragongo", "Le Kilimandjaro", "Le mont Stanley", "Le volcan Nyamuragira"],
    correctAnswerIndex: 0,
    explanation: "Le mont Nyiragongo est l'un des volcans les plus denses d'Afrique, à proximité immédiate de Goma."
  },
  {
    id: 'cg-11',
    category: 'culture_generale',
    text: "Qui fut le premier président officiel de la République du Congo indépendante en 1960 ?",
    options: ["Joseph Kasavubu", "Moïse Tshombe", "Albert Kalonji", "Laurent-Désiré Kabila"],
    correctAnswerIndex: 0,
    explanation: "Joseph Kasavubu fut élu Président de la République par le Parlement en juin 1960."
  },
  {
    id: 'cg-12',
    category: 'culture_generale',
    text: "Quelle grande province minière de la RDC est réputée pour posséder les plus grands gisements de cuivre et de cobalt au monde ?",
    options: ["Le Haut-Katanga (Kongo)", "Le Maniema", "L'Équateur", "La Tshopo"],
    correctAnswerIndex: 0,
    explanation: "Le Haut-Katanga et le Lualaba constituant l'ancien Katanga forment une région minière colossale."
  },
  {
    id: 'cg-13',
    category: 'culture_generale',
    text: "Quel est l'ancien nom colonial donné à la ville de Kinshasa avant l'africanisation des noms ?",
    options: ["Élisabethville", "Léopoldville", "Coquilhatville", "Stanleyville"],
    correctAnswerIndex: 1,
    explanation: "La capitale s'appelait Léopoldville du nom du souverain belge Léopold II, avant de devenir Kinshasa en 1966."
  },
  {
    id: 'cg-14',
    category: 'culture_generale',
    text: "Quelle est la devise officielle inscrite sur les armoiries de la RDC ?",
    options: ["Unité, Progrès, Justice", "Justice, Paix, Travail", "Vérité, Force, Paix", "Travail et Dignité"],
    correctAnswerIndex: 1,
    explanation: "La devise officielle républicaine congolaise est : Justice - Paix - Travail."
  },
  {
    id: 'cg-15',
    category: 'culture_generale',
    text: "Quel grand parc national, le plus ancien d'Afrique et classé au patrimoine mondial, abrite les derniers gorilles de montagne au Congo ?",
    options: ["Le parc de la Garamba", "Le parc national des Virunga", "Le parc de la Salonga", "Le parc de Kahuzi-Biega"],
    correctAnswerIndex: 1,
    explanation: "Les Virunga créés en 1925 s'étirent le long du Grand Rift oriental."
  },
  {
    id: 'cg-16',
    category: 'culture_generale',
    text: "Quel fleuve d'Afrique vient compléter le fleuve Congo au rang des fleuves les plus longs du monde entier ?",
    options: ["Le Nil", "L'Amazone", "Le Mississippi", "Le Gange"],
    correctAnswerIndex: 0,
    explanation: "Le Nil d'Égypte est le plus long fleuve africain, suivi par le fleuve Congo."
  },
  {
    id: 'cg-17',
    category: 'culture_generale',
    text: "Combien de provinces administratives d'État composent la République Démocratique du Congo actuelle ?",
    options: ["11 provinces", "26 provinces", "15 provinces", "30 provinces"],
    correctAnswerIndex: 1,
    explanation: "La réforme constitutionnelle a éclaté la RDC en 26 provinces distinctes, y compris la ville-province de Kinshasa."
  },
  {
    id: 'cg-18',
    category: 'culture_generale',
    text: "Quel sommet montagneux permanent de glace et de neige culmine comme le point le plus haut de la RDC ?",
    options: ["Le mont Stanley (Pic Marguerite au Ruwenzori)", "Le volcan Karisimbi", "Le mont Mikeno", "Le mont Kivu"],
    correctAnswerIndex: 0,
    explanation: "Le Pic Marguerite s'élève à 5 109 mètres dans la chaîne de montagnes du Ruwenzori."
  },
  {
    id: 'cg-19',
    category: 'culture_generale',
    text: "Quel est l'ancien nom de Kisangani du temps de la colonisation belge ?",
    options: ["Stanleyville", "Élisabethville", "Albertville", "Luluabourg"],
    correctAnswerIndex: 0,
    explanation: "Kisangani a été fondée sous le nom de Stanleyville par l'explorateur Henry Morton Stanley."
  },
  {
    id: 'cg-20',
    category: 'culture_generale',
    text: "Quelle langue officielle nationale de la RDC est très largement parlée à Kinshasa et dans l'Ouest du pays ?",
    options: ["Le Swahili", "Le Lingala", "Le Kikongo", "Le Tshiluba"],
    correctAnswerIndex: 1,
    explanation: "Bien que le français soit la langue officielle d'administration, le Lingala est la langue la plus usitée de la capitale."
  },
  {
    id: 'cg-21',
    category: 'culture_generale',
    text: "Quelle fête nationale légale congolaise commémore le sacrifice héroïque des martyrs de l'indépendance de 1959 ?",
    options: ["Le 4 janvier (Jour des Martyrs)", "Le 17 mai", "Le 30 juin", "Le 16 janvier"],
    correctAnswerIndex: 0,
    explanation: "Le 4 janvier rend un solennel hommage aux émeutes de Kinshasa en 1959 réclamant l'autonomie nationale."
  },
  {
    id: 'cg-22',
    category: 'culture_generale',
    text: "A côté de quelle grande rivière alimentant l'Est de Goma se trouve le célèbre lac Kivu ?",
    options: ["La rivière Ruzizi", "Le fleuve Congo", "La Lomami", "L'Ubangi"],
    correctAnswerIndex: 0,
    explanation: "La rivière Ruzizi relie le lac Kivu au lac Tanganyika au Sud."
  },
  {
    id: 'cg-23',
    category: 'culture_generale',
    text: "Quel monument funéraire de Kinshasa abrite la dépouille mortelle de Patrice Lumumba ?",
    options: ["L'Échangeur de Limete", "Le Palais de la Nation", "Le Mausolée de la Place des Évolués", "La Tour de l'Étoile"],
    correctAnswerIndex: 0,
    explanation: "Le mémorial national dédié à Patrice Lumumba se situe au pied de la grande tour de l'Échangeur de Limete."
  },
  {
    id: 'cg-24',
    category: 'culture_generale',
    text: "Parmi ces fleuves ou rivières de la RDC, lequel marque directement la frontière avec la République Centrafricaine ?",
    options: ["L'Ubangi", "Le fleuve Congo", "La rivière Kasaï", "La Ruzizi"],
    correctAnswerIndex: 0,
    explanation: "L'Ubangi est la principale frontière fluviale bordant le Nord de l'Équateur."
  },
  {
    id: 'cg-25',
    category: 'culture_generale',
    text: "Le royaume médiéval le plus ancien et puissant situé à l'embouchure du fleuve Congo s'appelle :",
    options: ["Le Royaume d'Anziku", "L'Empire Luba", "Le Royaume du Kongo", "L'Empire Lunda"],
    correctAnswerIndex: 2,
    explanation: "Le Royaume du Kongo fondé au 14e siècle fédérait les peuples de l'embouchure."
  },
  {
    id: 'cg-26',
    category: 'culture_generale',
    text: "En quelle année Laurent-Désiré Kabila a-t-il accédé au titre de chef de l'État en RDC ?",
    options: ["1960", "1997", "2001", "1965"],
    correctAnswerIndex: 1,
    explanation: "Kabila a chassé le régime de Mobutu à la tête de l'AFDL le 17 mai 1997."
  },
  {
    id: 'cg-27',
    category: 'culture_generale',
    text: "Quelle langue nationale majoritaire domine tout le grand Sud-Est minier de la RDC (Katanga, Kivu) ?",
    options: ["Le Swahili", "Le Lingala", "Le Kikongo", "Le Kikongo de l'État"],
    correctAnswerIndex: 0,
    explanation: "Le Kiswahili (Swahili) est la langue fédératrice parlée par des millions d'habitants à l'Est."
  },
  {
    id: 'cg-28',
    category: 'culture_generale',
    text: "Quel oiseau exotique magnifique, unique et endémique des forêts d'Afrique de l'Est, figure sur les vieux billets ?",
    options: ["Le perroquet gris", "Le paon du Congo", "L'aigle pêcheur", "Le faucon pèlerin"],
    correctAnswerIndex: 1,
    explanation: "Le Paon du Congo (Afropavo congensis) est l'unique espèce de paons originaire d'Afrique centrale."
  },
  {
    id: 'cg-29',
    category: 'culture_generale',
    text: "Quel est l'ancien nom colonial donné à la ville de Lubumbashi ?",
    options: ["Élisabethville", "Banningville", "Coquilhatville", "Albertville"],
    correctAnswerIndex: 0,
    explanation: "Lubumbashi portait autrefois le d'Élisabethville du nom de la reine des Belges Élisabeth de Bavière."
  },
  {
    id: 'cg-30',
    category: 'culture_generale',
    text: "Dans quel type d'élection nationale choisit-on l'actuel Président de la République en RDC ?",
    options: ["Le suffrage universel direct", "La nomination par l'armée", "Le vote du Sénat seul", "Le tirage au sort civique"],
    correctAnswerIndex: 0,
    explanation: "La constitution impose l'élection présidentielle directe par le peuple congolais."
  },
  {
    id: 'cg-31',
    category: 'culture_generale',
    text: "Quel animal légendaire, symbole du courage et de l'autorité, orne officiellement le sceau constitutionnel de la RDC avec la devise ?",
    options: ["Le léopard (panthère)", "Le lion de savane", "L'éléphant de forêt", "L'okapi rare"],
    correctAnswerIndex: 0,
    explanation: "Les armoiries comportent une tête de léopard au centre, entourée d'une lance et d'un rameau."
  },
  {
    id: 'cg-32',
    category: 'culture_generale',
    text: "Quelle est l'unique province administrative qui entoure complètement la ville de Kinshasa ?",
    options: ["Le Kwilu", "Le Kongo Central", "Le Mai-Ndombe", "La province de l'Équateur"],
    correctAnswerIndex: 1,
    explanation: "Le Kongo Central borde à l'ouest la province insulaire de la ville de Kinshasa."
  },
  {
    id: 'cg-33',
    category: 'culture_generale',
    text: "Quel mammifère rare à rayures, ressemblant à un mélange de girafe et de zèbre, vit exclusivement dans les forêts de la RDC ?",
    options: ["L'hippopotame nain", "L'okapi", "Le bongo", "Le gorille"],
    correctAnswerIndex: 1,
    explanation: "L'okapi est l'emblème exclusif de la biologie typiquement congolaise."
  },
  {
    id: 'cg-34',
    category: 'culture_generale',
    text: "Dans quelle ville côtière se situe le principal débouché portuaire maritime de la RDC sur l'Océan Atlantique ?",
    options: ["Banana / Boma", "Matadi", "Muanda", "Kinshasa"],
    correctAnswerIndex: 2,
    explanation: "La station balnéaire et portuaire de Muanda et le site pétrolier de Banana longent l'étroite façade atlantique."
  },
  {
    id: 'cg-35',
    category: 'culture_generale',
    text: "Où se situe l'immense barrage hydroélectrique d'Inga qui fournit de l'électricité en RDC ?",
    options: ["Sur le fleuve Congo (Kongo Central)", "Sur la rivière Kasaï", "Dans le Maniema", "Près de Bandundu"],
    correctAnswerIndex: 0,
    explanation: "Le complexe d'Inga exploite les formidables chutes du fleuve Congo dans le Kongo Central."
  },
  {
    id: 'cg-36',
    category: 'culture_generale',
    text: "Comment appelle-t-on l'institution parlementaire de la RDC chargée de voter les lois à côté de l'Assemblée Nationale ?",
    options: ["Le Sénat", "La Primature", "La Cour constitutionnelle", "Le Conseil économique"],
    correctAnswerIndex: 0,
    explanation: "Le parlement de la RDC est bicaméral, constitué de l'Assemblée nationale et du Sénat."
  },
  {
    id: 'cg-37',
    category: 'culture_generale',
    text: "Quel explorateur fameux d'origine galloise a cartographié le trajet du fleuve Congo sous les ordres de Léopold II ?",
    options: ["David Livingstone", "Henry Morton Stanley", "Pierre Savorgnan de Brazza", "Vasco de Gama"],
    correctAnswerIndex: 1,
    explanation: "Stanley a mené toutes les premières expéditions terrestres et fluviales d'exploration coloniale."
  },
  {
    id: 'cg-38',
    category: 'culture_generale',
    text: "Quelle langue nationale s'étend principalement dans les provinces du Kasaï-Oriental et Kasaï-Occidental ?",
    options: ["Le Tshiluba", "Le Kikongo", "Le Swahili", "Le Lingala"],
    correctAnswerIndex: 0,
    explanation: "Le Tshiluba est la langue vernaculaire et culturelle majeure de l'aire kasaïenne."
  },
  {
    id: 'cg-39',
    category: 'culture_generale',
    text: "De quelle colonie européenne la RDC fut-elle le territoire de tutelle avant 1960 ?",
    options: ["La France", "Le Royaume-Uni", "La Belgique", "Le Portugal"],
    correctAnswerIndex: 2,
    explanation: "Le territoire devint le Congo Belge après avoir été la propriété directe de Léopold II."
  },
  {
    id: 'cg-40',
    category: 'culture_generale',
    text: "Qui est le compositeur historique de la musique de notre hymne national 'Debout Congolais' ?",
    options: ["Simon Kimbangu", "L'Abbé Joseph Lutumba", "Le Père Simon-Pierre Boka", "Franco Luambo"],
    correctAnswerIndex: 2,
    explanation: "Le père jésuite Simon-Pierre Boka écrivit les paroles et la structure de l'hymne national."
  },
  {
    id: 'cg-41',
    category: 'culture_generale',
    text: "Quel est le plus grand lac intérieur entièrement situé en République Démocratique du Congo d'un point de vue de sa surface ?",
    options: ["Le lac Mai-Ndombe (ancien lac Léopold II)", "Le lac Albert", "Le lac Kivu", "Le lac Édouard"],
    correctAnswerIndex: 0,
    explanation: "Le lac Mai-Ndombe (anciennement Lac Léopold II) est une vaste étendue située à l'Ouest du pays."
  },
  {
    id: 'cg-42',
    category: 'culture_generale',
    text: "Comment se nomme la prestigieuse université publique historique située sur la colline inspirée de Kinshasa ?",
    options: ["L'UNIKIN (Université de Kinshasa)", "L'UPN", "L'IFASIC", "L'Université de Goma"],
    correctAnswerIndex: 0,
    explanation: "L'Université de Kinshasa (UNIKIN) installée sur le Mont-Amba est la première du pays (historique Lovanium)."
  },
  {
    id: 'cg-43',
    category: 'culture_generale',
    text: "Quelle province borde le Nord-Ouest de la RDC et porte le nom de la ligne géographique coupant le monde en deux ?",
    options: ["Le Nord-Ubangi", "L'Équateur", "La Tshuapa", "La Mongala"],
    correctAnswerIndex: 1,
    explanation: "La province de l'Équateur est traversée par la ligne de latitude zéro (l'Équateur géographique)."
  },
  {
    id: 'cg-44',
    category: 'culture_generale',
    text: "Quel célèbre mouvement religieux chrétien pacifique, fondé au Kongo en 1921, est reconnu comme patrimoine de liberté nationale ?",
    options: ["Le Kimbanguisme", "Le Salutisme", "Le Méthodisme", "L'Orthodoxie"],
    correctAnswerIndex: 0,
    explanation: "Le Kimbanguisme a été prêché par le prophète Simon Kimbangu à Mbanza-Nsanda."
  },
  {
    id: 'cg-45',
    category: 'culture_generale',
    text: "Quel est l'ancien nom moderne de la ville portuaire de Mbandaka ?",
    options: ["Coquilhatville", "Luluabourg", "Albertville", "Paonville"],
    correctAnswerIndex: 0,
    explanation: "Mbandaka s'appelait Coquilhatville avant l'africanisation politique initiée par Mobutu."
  },
  {
    id: 'cg-46',
    category: 'culture_generale',
    text: "Quelle langue nationale majoritaire s'exprime dans le Kongo Central et le Bandundu ?",
    options: ["Le Kikongo", "Le Swahili", "Le Tshiluba", "Le Lingala"],
    correctAnswerIndex: 0,
    explanation: "Le Kikongo (ou Kikongo ya leta) est parlé de manière traditionnelle à l'ouest de la RDC."
  },
  {
    id: 'cg-47',
    category: 'culture_generale',
    text: "Avec quel pays voisin la RDC partage-t-elle la plus longue frontière continentale terrestre ?",
    options: ["L'Angola", "La Zambie", "Le Congo-Brazzaville", "Le Rwanda"],
    correctAnswerIndex: 0,
    explanation: "La frontière entre l'Angola (hors enclave de Cabinda) et la RDC est la plus longue diagonale séparatrice terrestre."
  },
  {
    id: 'cg-48',
    category: 'culture_generale',
    text: "Qui préside le Conseil des ministres en tant que Chef du Gouvernement de la RDC ?",
    options: ["Le Président de la République", "Le Premier Ministre", "Le Président de l'Assemblée", "Le Procureur Général"],
    correctAnswerIndex: 1,
    explanation: "Le Premier ministre nommé par le Président conduit la politique gouvernementale."
  },
  {
    id: 'cg-49',
    category: 'culture_generale',
    text: "Quel site touristique de captage animalier proche de Kinshasa protège les singes Bonobos (chimpanzés nains) ?",
    options: ["Lala lya Bonobo", "Le sanctuaire Lola ya Bonobo", "La réserve de Bombo Lumene", "Le zoo de Kinshasa"],
    correctAnswerIndex: 1,
    explanation: "« Lola ya Bonobo » (le paradis des bonobos en lingala) est le sanctuaire officiel à Kimwenza."
  },
  {
    id: 'cg-50',
    category: 'culture_generale',
    text: "Quelle est la date annuelle officielle fixée pour célébrer la Journée de l'Éducation Nationale et de la Jeunesse en RDC ?",
    options: ["Le 30 avril", "Le 17 mai", "Le 4 janvier", "Le 25 décembre"],
    correctAnswerIndex: 0,
    explanation: "La fête de l'enseignement au Congo se célèbre le 30 avril en mémoire du dévouement de la jeunesse scolaire."
  }
];
