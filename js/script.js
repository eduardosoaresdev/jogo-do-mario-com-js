/*document.querySelector(".mario") para o seletor css que 
é a classe MARIO.*/
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");

const jump = () => {
  /*Adiciona a classe JUMP do css a classe MARIO.*/
  mario.classList.add("jump");

  /*O método setTimeout permite executar um código após 
  um tempo estipulado, que pode ser definido em milissegundos.*/
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const cloudsPosition = clouds.offsetLeft;

  if (pipePosition > 0 && pipePosition <= 120 && marioPosition < 80) {
    /*Quando o Mario bater vai parar a animação do pipe.*/
    pipe.style.animation = "none";

    /*Faz o pipe parar na posição que o Mario bateu.*/
    pipe.style.left = `${pipePosition}px`;

    /*Quando o Mario bater vai parar sua animação.*/
    mario.style.animation = "none";

    /*Faz o Mario parar na posição que ele bateu no pipe.*/
    mario.style.bottom = `${marioPosition}px`;

    /*Altera o atributo src da tag img*/
    mario.src = "./img/mario-game-over.png";

    mario.style.width = "80px";
    mario.style.marginLeft = "40px";

    /*Quando o Mario bater vai parar a animação das nuvens.*/
    clouds.style.animation = "none";

    /*Faz as nuvens pararem assim que o Mario bater.*/
    clouds.style.left = `${cloudsPosition}px`;

    clearInterval(loop);
  }
}, 10);

/*Chama a função JUMP se pressionar qualquer tecla do teclado.*/
document.addEventListener("keydown", jump);
