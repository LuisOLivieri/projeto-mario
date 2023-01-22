const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const fecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
}); 

fecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});








 
















/*
Objetivo1 - quando clicar, abrir a modal com o video. 

Objetivo2 - quando o usuario clicar no x, deve fechar a modal

passo1- dar um jeito de pegar o elemento que representa o botao na tela do js
2-dar um jeito de identificar quando o usaurio clicar no botao
3- dar um jeito de pegar o elemento da modal
4- abrir a modal nma tela. 

1.1 - dar um jeito de epgar o elemento e fehcar usando x
1.2 identificar o X 
1.3 fehcar a modal. 

*/