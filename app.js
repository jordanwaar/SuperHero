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
        child.className = 'card col-lg-3 col-md-6 col-sm-12'
        
        

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
        a.className = 'btn'
        a.href = `./details.html?id=${heroi.id}`
        insideDiv.appendChild(a)

        container.appendChild(insideDiv)
    }

};


function getDetails(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id')

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET",`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`,false)
    xhttp.send();
    let response = JSON.parse(xhttp.responseText)
    console.log(response)

    let imagem = document.getElementById('img-hero')
    imagem.src = response.images.md
    let nome = document.getElementById('nome')
    nome.innerHTML = response.name
    let olhos = document.getElementById('olhos')
    olhos.innerHTML = "Cor dos olhos: "+response.appearance.eyeColor
    let genero = document.getElementById('genero')
    genero.innerHTML = "Gênero: "+response.appearance.gender
    let altura = document.getElementById('altura')
    altura.innerHTML = "Altura: "+response.appearance.height[1]
    let raca = document.getElementById('raca')
    raca.innerHTML = "Raça: "+response.appearance.race
    let peso = document.getElementById('peso')
    peso.innerHTML = "Peso: "+response.appearance.weight[1]
    let profissao = document.getElementById('profissao')
    profissao.innerHTML = "Profissão: "+response.work.occupation

    let primeiraAparicao = document.getElementById('primeira-aparicao')
    primeiraAparicao.innerHTML = "Primeira aparição: "+response.biography.firstAppearance
    let nomeCompleto = document.getElementById('nome-completo')
    nomeCompleto.innerHTML = "Nome Completo: "+response.biography.fullName
    let localNascimento = document.getElementById('local-nascimento')
    localNascimento.innerHTML = "Local de Nascimento: "+response.biography.placeOfBirth
    let editora = document.getElementById('editora')
    editora.innerHTML = "Editora: "+response.biography.publisher

    let combate = document.getElementById('combate')
    combate.innerHTML = "Combate: "+response.powerstats.combat
    let resistencia = document.getElementById('resistencia')
    resistencia.innerHTML = "Resistência: "+response.powerstats.durability
    let inteligencia = document.getElementById('inteligencia')
    inteligencia.innerHTML = "Inteligência: "+response.powerstats.intelligence
    let poder = document.getElementById('poder')
    poder.innerHTML = "Poder: "+response.powerstats.power
    let velocidade = document.getElementById('velocidade')
    velocidade.innerHTML = "Velocidade: "+response.powerstats.speed
    let forca = document.getElementById('forca')
    forca.innerHTML = "Força: "+response.powerstats.strength


    

};
