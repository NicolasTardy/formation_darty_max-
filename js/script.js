const responses = {
    "abonnement": "L'Abonnement Maison Relax est un contrat de prestation de services qui vous donne accès à des services de conseils, diagnostics et dépannages pour vos installations de plomberie et d'électricité.",
    "prix": "Le prix mensuel de l'Abonnement Maison Relax est de 11,99 € TTC, ou 8 € TTC si vous êtes titulaire du contrat Darty Max.",
    "durée": "L'Abonnement Maison Relax a une durée indéterminée avec une période d'engagement initiale de 12 mois à partir de la date de souscription.",
    "engagement": "La période d'engagement initiale de l'Abonnement Maison Relax est de 12 mois. Après cette période, vous pouvez résilier à tout moment.",
    "services": "L'Abonnement Maison Relax propose une assistance téléphonique 7j/7, un service de dépannage plomberie et électricité, et un service de conseils pour l'entretien et la maintenance de vos installations.",
    "dépannage": "Le dépannage comprend le premier déplacement du professionnel, une intervention jusqu'à 1h30 de main d'œuvre, et jusqu'à 20 € HT de pièces et d'équipements nécessaires.",
    "installations": "Les Installations Éligibles comprennent les installations de plomberie et d'électricité situées dans votre domicile.",
    "contact": "Vous pouvez contacter le service client au 0170952635 (prix d'un appel local) du lundi au vendredi de 8h à 19h et le samedi de 9h à 12h.",
    "réclamation": "Vous pouvez adresser votre réclamation via le formulaire sur votre Espace Client ou par courrier à HomeServe - Service Client - TSA 82111 - 69303 Lyon Cedex 07.",
    "résiliation": "Vous pouvez résilier votre abonnement après la période d'engagement de 12 mois. La résiliation prendra effet à la date anniversaire du mois suivant votre demande.",
    "garantie": "Les pièces utilisées et les réparations réalisées sont garanties par HomeServe pendant un an à compter de la date d'intervention.",
    "professionnel": "Les professionnels de Maison Relax sont des plombiers et électriciens certifiés, missionnés par HomeServe pour intervenir sur vos installations éligibles.",
    "assistance": "L'assistance téléphonique est disponible 7j/7 au 0170952635 pour vous aider avec les installations de plomberie et d'électricité de votre domicile.",
    "conseils": "Le service de conseils est accessible sur votre Espace Client ou par téléphone au 0170952635, 7j/7 de 8h à 20h.",
    "devis": "Un devis peut être proposé pour des prestations non incluses dans l'Abonnement Maison Relax.",
    "données": "Vos données personnelles sont traitées conformément à la réglementation. Vous disposez de droits d'accès, de rectification, de limitation, de portabilité, d'effacement et d'opposition."
};

const keywords = {
    "abonnement": ["abonnement", "contrat", "souscrire", "souscription", "adhésion", "inscription", "engagement", "forfait", "offre", "pack", "formule"],
    "prix": ["prix", "tarif", "coût", "combien", "quel est le prix", "montant", "facture", "paiement", "mensualité", "frais", "dépense", "€", "euros"],
    "durée": ["durée", "période", "temps", "combien de temps", "délai", "terme", "échéance", "fin de contrat", "renouvellement"],
    "engagement": ["engagement", "engagé", "période d'engagement", "durée d'engagement", "obligation", "contrainte"],
    "services": ["services", "prestations", "que propose", "qu'offre", "inclus", "compris", "bénéfices", "avantages", "options"],
    "dépannage": ["dépannage", "réparation", "intervention", "panne", "problème", "dysfonctionnement", "réparer", "fixer", "résoudre"],
    "installations": ["installations", "équipements", "dispositifs", "éligible", "couvert", "pris en charge", "inclus", "concerné", "plomberie", "électricité"],
    "contact": ["contact", "joindre", "appeler", "téléphone", "numéro", "service client", "assistance", "support", "aide"],
    "réclamation": ["réclamation", "plainte", "problème", "insatisfaction", "mécontentement", "litige", "différend", "contestation"],
    "résiliation": ["résiliation", "annulation", "fin du contrat", "arrêter", "mettre fin", "stopper", "interrompre", "résilier", "annuler", "terminer"],
    "garantie": ["garantie", "assurance", "protection", "couverture", "prise en charge"],
    "professionnel": ["professionnel", "technicien", "expert", "intervenant", "plombier", "électricien"],
    "assistance": ["assistance téléphonique", "aide par téléphone", "support téléphonique", "conseil téléphonique", "hotline"],
    "conseils": ["conseils", "recommandations", "avis", "expertise", "consultation"],
    "devis": ["devis", "estimation", "chiffrage", "coût estimé", "proposition commerciale", "offre de prix"],
    "données": ["données personnelles", "informations personnelles", "vie privée", "confidentialité", "RGPD", "protection des données"]
};

function findBestMatch(userMessage) {
    const words = userMessage.toLowerCase().split(/\s+/);
    let bestMatch = null;
    let maxScore = 0;

    for (const [key, synonyms] of Object.entries(keywords)) {
        let score = 0;
        for (const word of words) {
            if (synonyms.some(syn => syn.includes(word) || word.includes(syn))) {
                score += 1;
            }
        }
        if (score > maxScore) {
            maxScore = score;
            bestMatch = key;
        }
    }

    return bestMatch;
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    addMessageToChatBox("Vous", userMessage);
    userInput.value = "";

    let bestMatch = findBestMatch(userMessage);
    let response = bestMatch ? `Concernant ${bestMatch}, ${responses[bestMatch]}` : "Désolé, je n'ai pas trouvé de réponse précise à votre question. Pouvez-vous reformuler ou préciser votre demande concernant l'Abonnement Maison Relax ?";

    addMessageToChatBox("Assistant", response);
}

function addMessageToChatBox(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
