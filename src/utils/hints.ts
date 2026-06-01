import { Question } from '../types';

/**
 * Dictionnaire d'indices sur mesure pour les questions prédéfinies d'ENAFEP Coach.
 */
const SPECIFIC_HINTS: { [questionId: string]: string } = {
  // --- Français ---
  'fr-1': "Pose-toi la question : « Quand est-ce que l'action se passe ? ». Cette question indique toujours un complément circonstanciel de...",
  'fr-2': "La première personne du pluriel au passé simple pour les verbes en -er se termine toujours par '-âmes'. Fais attention au 'e' intercalé pour prononcer 'je' !",
  'fr-3': "C'est une exception classique des noms finissant en -ail. Pense à d'autres mots comme 'travail' ou 'vitrail' !",
  'fr-4': "Pense aux étoiles dans le ciel nocturne de Kinshasa : elles scintillent, elles jettent des éclats...",
  'fr-5': "Le mot 'intelligents' qualifie le nom 'élèves'. Quel mot sert à donner une qualité à un nom ?",
  'fr-6': "Le mot 'inspecteur' se termine en '-teur'. Dans la plupart des cas, les noms masculins en -teur font leur féminin en...",
  'fr-7': "Quelque chose d'éphémère dure très peu de temps (comme une fleur d'un jour). Quel est l'opposé de ce qui passe très vite ?",
  'fr-8': "Dans une phrase passive, c'est l'élément introduit par 'par' qui fait l'action réelle. C'est le complément d'...",
  'fr-9': "Le sujet 'Les filles' est au féminin pluriel. Avec l'auxiliaire 'être', on accorde le participe passé en genre et en nombre avec le sujet.",
  'fr-10': "Ici, 'la' est placé juste devant le verbe 'vois'. Il remplace une personne ('Je vois Marie' -> 'Je la vois'). Ce n'est donc pas un article !",
  'fr-11': "Dans les noms composés formés de deux noms, les deux éléments s'accordent en général au pluriel. Pense à accorder à la fois 'chou' et 'fleur' !",
  'fr-12': "Pose-toi la question : 'Il parle DE qui / DE quoi ?'. Quand la question commence par 'de', c'est un complément d'objet...",

  // --- Mathématiques ---
  'ma-1': "Un entier divisible par 2 se termine par un chiffre pair (0, 2, 4, 6, 8) et divisible par 5 se termine par 0 ou 5. Cherche le chiffre commun !",
  'ma-2': "La formule de l'aire d'un rectangle est : Longueur × Largeur. Ici, tu connais l'aire (32 m²) et la largeur (4 m). Fais l'opération inverse (division) !",
  'ma-3': "N'oublie pas : les parenthèses sont prioritaires ! Calcule d'abord (15 - 5) puis multiplie le résultat par la division de 12 par 3.",
  'ma-4': "Convertis d'abord tout en grammes ! Sachant que 1 kg = 1000 g, combien de grammes font 2,5 kg ?",
  'ma-5': "La formule de l'aire d'un cercle (ou disque) est π × R² (Pi multiplié par le rayon au carré). Le rayon est la moitié du diamètre (10 m / 2). Utilise π ≈ 3,14 !",
  'ma-12': "Pense à une boîte de craies cubique. Compte le nombre de lignes droites (bords) qui relient les faces entre elles.",
  'ma-13': "Diviser une quantité par 0,5 revient exactement à la multiplier par l'inverse, c'est-à-dire par 2 !",
  'ma-14': "Calcule d'abord le montant de la réduction : 10% de 8 000 FC correspond à un dixième du prix. Soustrais ensuite cette réduction du prix d'origine.",
  'ma-15': "Un triangle équilatéral possède trois côtés de longueurs parfaitement égales. Additionne les trois côtés de 8 cm !",
  'ma-16': "Si le double d'un nombre augmenté de 5 donne 25, cela veut dire que le double de ce nombre vaut 20. Quel nombre multiplié par 2 donne 20 ?",
  'ma-17': "Un kilogramme entier pèse 1 000 grammes. Quelle est la moitié exacte de 1 000 ?",
  'ma-18': "C'est l'angle que forment deux lignes perpendiculaires, comme le coin de ton cahier de classe ou d'une feuille de papier.",

  // --- Sciences ---
  'sc-1': "Ce gaz est indispensable à la respiration des êtres vivants et représente environ 21% de l'air de notre atmosphère.",
  'sc-2': "Pense à l'organe central de ton corps qui bat jour et nuit pour envoyer le sang dans toutes tes artères !",
  'sc-3': "C'est la partie de la plante cachée sous la terre, qui absorbe l'eau et les minéraux du sol pour nourrir les feuilles.",
  'sc-4': "Rappelle-toi de l'hygiène élémentaire : cette maladie est transmise par l'ingestion d'eau souillée ou d'aliments contaminés par des microbes intestinaux.",
  'sc-5': "Le squelette d'un adulte comporte un peu plus de 200 os différents pour soutenir le corps. Repère le nombre le plus proche !",

  // --- Culture Générale ---
  'cg-1': "Ce fleuve majestueux est le deuxième plus long d'Afrique après le Nil, et il traverse toute notre République !",
  'cg-2': "Notre hymne national rend hommage au Congo et s'appelle 'Debout...'. Cherche la suite logique !",
  'cg-3': "Cette province historique abrite la grande ville de Lubumbashi, réputée pour ses riches mines de cuivre.",
  'cg-4': "Sur notre drapeau national bleu ciel, l'étoile jaune représente l'unité et l'avenir radieux du pays. Quelle est sa couleur ?",
  'cg-5': "C'est un grand héros national de l'indépendance de la RDC, qui a été le tout premier Premier ministre en juin 1960."
};

/**
 * Récupère l'indice d'une question.
 * Si aucun indice spécifique n'est défini, génère un indice contextuel intelligent.
 */
export function getQuestionHint(question: Question): string {
  if (SPECIFIC_HINTS[question.id]) {
    return SPECIFIC_HINTS[question.id];
  }

  // Fallback intelligent basé sur la catégorie si pas d'indice spécifique
  switch (question.category) {
    case 'francais':
      return `Maître Jean-Pierre te souffle : Relis bien la phrase ! Concentre-toi sur l'orthographe, les accords ou les règles grammaticales apprises en classe.`;
    case 'maths':
      return `Conseil de calcul : Fais un dessin ou pose l'opération sur un morceau de papier. Vérifie bien les unités de mesure ou l'ordre des priorités opérationnelles !`;
    case 'sciences':
      return `Indice de Maître JP : Pense aux fonctions du corps humain ou aux règles d'or de l'hygiène et de la nature pour protéger la santé.`;
    case 'culture_generale':
      return `Indice d'histoire/géo : Ferme les yeux et pense à la carte de la RDC, à nos richesses, à nos armoiries et à nos pères de l'indépendance nationale !`;
    default:
      return `Prends ton temps, analyse chaque option proposée et élimine d'emblée la réponse qui te semble impossible. Tu vas y arriver !`;
  }
}
