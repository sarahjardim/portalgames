onload = () => {
  cards();
  plataformas();
  publishers();
  destaques();
  
  document.querySelector("#btn-0").onclick = () => cards();
  document.querySelector("#btn-1").onclick = () => plataformas();
  document.querySelector("#btn-2").onclick = () => publishers();
  document.querySelector("#btn-3").onclick = () => destaques();
};


var url0 = `https://api.rawg.io/api/games?page=1&page_size=10&key=3b5f2655176840f1a131ce2766ac207c`;
async function cards() {
  let str = "";
  let data = await fetch(url0).then((res) => res.json());
  let result = data.results;
  for (let index = 0; index < result.length; index++) {
    const card = result[index];
    str += `<div class="col-12 col-sm-3 col-md-4 col-lg-3">
    <div class="card border border-0">
        <h5 class="card-title fw-bold text-truncate">${card.name}</h5>
        <div class="ratio" style="--bs-aspect-ratio: 50%;">
        <img src="${card.background_image}" class="img-fluid" alt="imagem card">
        </div>
        <h5 class="fs-6">Classificação: <span class="float-end">${card.rating}</span></h5>
        <h5 class="fs-6">Data de lançamento: <span class="float-end">${card.released}</span></h5>
        <div class="card-body">
        <a href="detalhes.html?${card.id}" target="_blank"><button type="button" class="btn btn-secondary" >Mais detalhes ...</button></a>
        </div>
    </div>
    </div>`;
  }
  url0 = data.next;
  document.getElementById("cards").insertAdjacentHTML("beforeend", str);
}

var url1 = `https://api.rawg.io/api/platforms?page=1&page_size=3&key=3b5f2655176840f1a131ce2766ac207c`;
async function plataformas() {
  let data = await fetch(url1).then((res) => res.json());
  let str = "";
  for (let index = 0; index < data.results.length; index++) {
    const plataforma = data.results[index];
    str += ` <div class="col-12 col-sm-4 col-md-4">
    <div class="card border border-0">
        <h5 class="card-title fw-bold">${plataforma.name}</h5>
        <img src="${plataforma.image_background}" class="img-fluid" alt="imagem card">
        </div>
        <div class="card-body">
            <p class="card-text">
                <b>Principais jogos</b>
            <ul class="lista">`;
            for (let i = 0; i < 3; i++) {
              str += `<li>${plataforma.games[i].name}</li>`;
            }
            str += `</ul>
            </p>
        </div>
    </div>
   </div>`;
  }
  url1 = data.next;
  document.getElementById("plata").insertAdjacentHTML("beforeend", str);
}

var url2 = `https://api.rawg.io/api/publishers?key=3b5f2655176840f1a131ce2766ac207c`;
async function publishers() {
  let data = await fetch(url2).then((res) => res.json());
  let str = "";
  for (let index = 0; index < data.results.length; index++) {
    const publisher = data.results[index];
    str += ` <div class="col-12 col-sm-4 col-md-4">
    <div class="card border border-0">
        <h5 class="card-title fw-bold">${publisher.name}</h5>
        <img src="${publisher.image_background}" class="img-fluid" alt="imagem card">
        </div>
        <div class="card-body">
            <p class="card-text">
                <b>Principais jogos</b>
            <ul class="lista">`;
            for (let i = 0; i < 3; i++) {
              str += `<li>${publisher.games[i].name}</li>`;
            }
            str += `</ul>
            </p>
        </div>
    </div>
   </div>`;
  }
  url2 = data.next;
  document.getElementById("publi").insertAdjacentHTML("beforeend", str);
}

async function destaques() {
  let data = await fetch ("https://api.rawg.io/api/games?page=1&page_size=4&key=3b5f2655176840f1a131ce2766ac207c")
  .then((res)=>res.json());
      let result=data.results;
      let str = "";
      for (let i = 0; i < result.length; i++) {
          let destaques = result[i];
          str +=`<div class="carousel-item">
          <div class="col-12 col-lg-6 col-sm-12 float-start" style="clear: both;">
              <div class="ratio ratio-16x9">
                  <img src="${destaques.background_image}"class= "img-fluid">
              </div>
          </div>
          <div class=" col-12 col-lg-6 col-sm-12 float-end ps-4" id="nopading">
              <article class="descricao">
              
                  <h1>${destaques.name}</h1>
                  <p><b>Lançamento: </b>${destaques.released}</p>
                  <p><b>Nota: </b>${destaques.metacritic}</p>  
                  <p><b>Avaliação: </b>${destaques.rating}</p>
                  <p><b>Classificação: </b>${destaques.rating_top}</p>                 
              </article>
          </div>
      </div>`;
      }
      document.querySelector('#carrouselDestaques').innerHTML=str
      document.querySelector('#carrouselDestaques').firstChild.classList.toggle("active");
}





