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

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    const prenom = document.getElementById('first-name').value;
    const nom = document.getElementById('last-name').value;
    const commentaire = document.getElementById('message').value;

    if (prenom !== '' && nom !== '' && commentaire !== '') {
        const commentaireObjet = {
            prenom: prenom,
            nom: nom,
            commentaire: commentaire
        };

        ajouterCommentaire(commentaireObjet);

        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('message').value = '';

        erreurMessage.style.display = 'none';
    } else {
        erreurMessage.style.display = 'block';
    }
});