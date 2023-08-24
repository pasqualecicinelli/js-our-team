/**
 * MILESTONE 0:
 * Creare l’array di oggetti con le informazioni fornite.
 */

const arrayInformation = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
];

/** MILESTONE 1:
* Stampare su console, per ogni membro del team, 
le informazioni di nome, ruolo e la stringa della foto 
*/
for (let key of arrayInformation) {
    console.log(key);
}


/**
 * MILESTONE 2:
 * Stampare le stesse informazioni su DOM sottoforma di stringhe 
 */

let printElement = document.getElementById('print');

for (let keyInfoDom of arrayInformation) {

    printElement.innerText += `
    ${keyInfoDom.nome}
    ${keyInfoDom.ruolo}
    ${keyInfoDom.foto}
    `
}

/**
 * BONUS 1:
 * Trasformare la stringa foto in una immagine effettiva
 */
let imgElement = document.getElementById('img');

for (let keyPicture of arrayInformation) {

    imgElement.innerHTML +=
        '<img src="./img/' + `${keyPicture.foto}` + '">';
}

/**
 * BONUS 2:
 * Organizzare i singoli membri in card/schede
 * Consigli del giorno:
 * Ragioniamo come sempre a step.
 * Prima la logica in italiano e poi traduciamo in codice.
 * E ricordiamoci che console.log() è nostro amico!
 */

let allInfoPrint = document.getElementById('cardBoot');

allInfoPrint.innerHTML += '<h1 class="card-title w-100 text-center mt-5 mb-3">OUR TEAM</h1>';

for (let allInfo of arrayInformation) {

    allInfoPrint.innerHTML +=
        '<div class="card m-3" style="width: 25rem;">' +
        '<img src="./img/' + `${allInfo.foto}` + '">' +
        '<div class="card-body">' +
        '<h5 class="card-title">Information</h5>' +
        '</div>' +
        '<ul class="list-group list-group-flush">' +
        ' <li class="list-group-item">' + `${allInfo.nome}` + '</li>' +
        ' <li class="list-group-item">' + `${allInfo.ruolo}` + '</li>' +
        '</ul>' +
        '</div>';

}



