export const motsFrancais = {
    facile: [
        "chat", "chien", "pain", "lait", "jeux",
        "main", "pied", "nuit", "jour", "rose",
        "bleu", "vert", "noir", "deux", "cinq"
    ],
    moyen: [
        "maison", "jardin", "rivage", "soleil", "plante",
        "voiture", "musique", "bureau", "crayon", "cahier",
        "fenetre", "etoile", "chemin", "fleuve", "mouton"
    ],
    difficile: [
        "papillon", "telephone", "crocodile", "montagne", "elephant",
        "ordinateur", "restaurant", "bibliotheque", "chocolat", "plastique"
    ]
};

export function getRandomWord(niveau = 'difficile') {
    const mots = motsFrancais[niveau];
    const index = Math.floor(Math.random() * mots.length);
    return mots[index];
}