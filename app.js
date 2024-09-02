const formulaire = document.querySelector('form');
const listeCommentaires = document.getElementById('comment-list');
const erreurMessage = document.getElementById('error-message');

let commentaires = [];

function ajouterCommentaire(commentaire) {
    const listeElement = document.createElement('div');
    listeElement.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');

    const auteurElement = document.createElement('h3');
    auteurElement.classList.add('font-medium', 'text-gray-900');
    auteurElement.textContent = commentaire.prenom + ' ' + commentaire.nom;

    const commentaireElement = document.createElement('div');
    commentaireElement.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');
    commentaireElement.innerHTML = '<p>' + commentaire.commentaire + '</p>';

    listeElement.appendChild(auteurElement);
    listeElement.appendChild(commentaireElement);

    listeCommentaires.appendChild(listeElement);

    commentaires.push(commentaire);
}
