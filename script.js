    // Sélectionner le bouton "Ses matchs"
const toggleButton = document.querySelector("#toggle-matches");

    // Sélectionner toutes les cartes et les tableaux associés
const cards = document.querySelectorAll(".card");
const tables = document.querySelectorAll(".match-table");

    // Fonction pour afficher uniquement les cartes
function showCardsOnly() {
    cards.forEach(card => card.style.display = "block"); // Afficher les cartes
    tables.forEach(table => table.style.display = "none"); // Masquer tous les tableaux
}

    // Clic sur le bouton "Tous voir"
toggleButton.addEventListener("click", () => {
    const allHidden = Array.from(cards).every(card => card.style.display === "none") &&
                      Array.from(tables).every(table => table.style.display === "none");

if (allHidden) {
    // Si tout est caché (cartes et tableaux), afficher uniquement les cartes
    showCardsOnly();
} else {
    // Si les cartes sont affichées, cacher tout (cartes et tableaux)
    cards.forEach(card => card.style.display = "none");
    tables.forEach(table => table.style.display = "none");
}
});

    // Clic sur une carte : afficher/masquer son tableau associé
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        const table = tables[index]; // Tableau correspondant
        if (table) {
            table.style.display = table.style.display === "none" ? "table" : "none"; // Alterner l'affichage du tableau
        }
    });
});

    // Au démarrage, tout est caché (cartes et tableaux)
window.addEventListener("DOMContentLoaded", () => {
    cards.forEach(card => card.style.display = "none"); // Assurez-vous que les cartes sont cachées
    tables.forEach(table => table.style.display = "none"); // Et les tableaux aussi
});
