CONTAINER_ID = 'herois'

function getAll(container_id){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET",'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json',false)
    xhttp.send();
    let response = JSON.parse(xhttp.responseText)

    var container = document.getElementById('herois')
    for(let i in response){
        let heroi = response[i]
        let child = document.createElement('div')
        child.className = 'card col-lg-3'
        
        

        console.log(child)
        let insideDiv = document.createElement('div')
        insideDiv.className = 'card-body'

        let img = document.createElement('img')
        img.className = 'card-img-top img-fluid'
        img.src = `${heroi.images.md}`
        insideDiv.appendChild(img)

        let h5 = document.createElement('h5')
        h5.className = 'card-title'
        h5.innerHTML = heroi.name
        insideDiv.appendChild(h5)

        let p = document.createElement('p')
        p.className = 'card-text'
        p.innerHTML = 'Universo: '+ heroi.biography.publisher
        insideDiv.appendChild(p)

        let a = document.createElement('a')
        a.innerHTML = 'Detalhes'
        a.className = 'btn btn-primary'
        a.href = `./2.html?id=${heroi.id}`
        insideDiv.appendChild(a)

        container.appendChild(insideDiv)
    }

};


function newPage(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('id'))
};