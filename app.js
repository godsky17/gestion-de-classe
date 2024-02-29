
async function notes(id) {
    //affichage de la zone des notes
    let zoneListOfUser = document.querySelector('.list_content')
    zoneListOfUser.classList.remove('w-100')
    zoneListOfUser.classList.add('w-50')
    let zoneNoteOfUser = document.querySelector('.note_content')
    zoneNoteOfUser.classList.remove('invisible')
    let btnclose = document.querySelector('#close')
    btnclose.addEventListener('click', close)


    const jsonFile = await fetch('users.json', {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    if (jsonFile.ok === true) {
        let users = jsonFile.json();
        users.then(users => {
            let name = document.querySelector('#name')
            name.innerText = users[id - 1]['nom'] + ' ' + users[id - 1]['prenom']
            showNotes(users[id - 1]['notes'])
        })
    }
}

function showNotes(notes) {
    let zone = document.querySelector('#noteZone')
    zone.innerHTML = ""
    for (const key in notes) {
        if (Object.hasOwnProperty.call(notes, key)) {
            const element = notes[key];
            zone.appendChild(noteItem(key, element))
        }
    }
}

function noteItem(matiere, notes) {
    let div = document.createElement('div')
    div.setAttribute('class', 'note-item d-flex')
    // affichage des matieres
    let p = document.createElement('p')
    p.setAttribute('class', 'matiere w-25')
    p.innerText = matiere
    div.appendChild(p)
    // affichage des notes
    let ul = document.createElement('ul')
    ul.setAttribute('class', 'd-flex w-50')
    notes.forEach(element => {
        let li = document.createElement('li')
        li.innerText = element
        ul.appendChild(li)
    });
    div.appendChild(ul)
    // TODO: arrondir la moyenne
    let p2 = document.createElement('p')
    p2.setAttribute('class', 'w-25')
    p2.innerText = moyenne(notes)
    div.appendChild(p2)


    return div
}

function moyenne(notes) {
    let moy = 0
    notes.forEach(element => {
        moy += element
    });
    return moy/notes.length
}


function close() {
    //fermetture de la zone des notes
    let zoneListOfUser = document.querySelector('.list_content')
    zoneListOfUser.classList.remove('w-50')
    zoneListOfUser.classList.add('w-100')
    let zoneNoteOfUser = document.querySelector('.note_content')
    zoneNoteOfUser.classList.add('invisible')
}