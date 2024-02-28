export async function fetchUsers(file){
    const jsonFile = await fetch(file,{
        method : "GET",
        headers : {
            "Accept" : "application/json"
        }
    })
    if (jsonFile.ok === true) {
        return jsonFile.json();
    }

    throw new Error('Impossible de se connecter au server')
}

export function showUsers(users, where){
    let content = document.querySelector(where)
    users.forEach(user => {
        let div = createItem(user)
        content.appendChild(div)
    });
    throw new Error('ShowUser')
}

function createItem(user){
    try {
        let div = document.createElement('div')
        let divControls = document.createElement('div')
        let p = document.createElement('p')
        let notes = document.createElement('a')
        let rapport = document.createElement('a')
        div.setAttribute('class', 'item')
        divControls.setAttribute('class', 'controls')
        p.innerText = user.nom + ' ' + user.prenom
        notes.innerText = "Notes"
        notes.setAttribute('href', 'user.html?id='+ user.id +'')
        rapport.innerText = "Rapport"
        rapport.setAttribute('href', 'rapport.html?id='+ user.id +'')
        divControls.appendChild(notes)
        divControls.appendChild(rapport)
        div.appendChild(p)
        div.appendChild(divControls)
        return div
    } catch (error) {
        console.log(error)
    }

    
}