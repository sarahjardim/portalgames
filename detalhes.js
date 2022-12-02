onload = () => {
  detalhes();

  document.querySelector("#btn-0").onclick = () => detalhes();
};

var urldet = `https://api.rawg.io/api/games?key=3b5f2655176840f1a131ce2766ac207c`;
async function detalhes() {
  let data = await fetch(urldet).then((res) => res.json());
  let str = "";
  for (let index = 0; index < data.results.length; index++) {
    const detalhe = data.results[index];
    str += `<div class="col-12 col-sm-3 col-md-4 col-lg-3">
                <div class="card border border-5">
                    <h5 class="card-title fw-bold">${detalhe.name}</h5>
                    <img src="${detalhe.background_image}" class="img-fluid" alt="imagem card">
                    <p>Lançamento: ${detalhe.released}</p>
                    <p>Nota: ${detalhe.metacritic}</p>  
                    <p>Avaliação: ${detalhe.rating}</p>
                </div>
            </div>`;
  }
  urldet = data.next;
  document.getElementById("det").insertAdjacentHTML("beforeend", str);
}
