async function buscarInformacoes() {
  try {
    const informa = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await informa.json();
    return data.value;
  } catch (erro) {
    console.log(erro, "erro");
  }
}

buscarInformacoes().then((dados) => {
  if (dados) {
    console.log(dados.value);
  } else {
    console.log("erro");
  }
});
const p = document.createElement("p");
const div = document.createElement("div");
div.appendChild(p);
p.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
p.style.width = '30vh'
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";

document.body.appendChild(div);

const botao = document.querySelector(".botao");
botao.addEventListener("click", async () => {
  const piada = await buscarInformacoes();
  p.innerHTML = piada;
});
