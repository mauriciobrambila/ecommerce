var imgs=[];
var slider;
var imgAtual;
var maxImg;
var tmp;
var tempotroca;
var vtempo;
var vload;

/*Pré carregamento da imagem */
function preCarregamento(){
    
    var s=1
    for(var i=0;i<5;i++){
    imgs[i]= new Image();
    imgs[i].src="img/s"+s+".jpg"
    s++
}
}
/*carregando a imagem no background da div*/
function carregarImg(img){
    slider.style.backgroundImage="url('"+imgs[img].src+"')"
}
//Função para iniciar as outras funções
function inicia(){
    preCarregamento();
    imgAtual=0
    maxImg=imgs.length-1;
    slider = document.getElementById("carroussel")
    vbarra = document.getElementById("barrinha")
    carregarImg(imgAtual)
    //Passar imagens automaticamente
    tempotroca = 0
    anima()
}
function troca(dir){
    tempotroca = 0;
    imgAtual+=dir
    if(imgAtual>maxImg){
        imgAtual=0;
    }else if(imgAtual<0){
        imgAtual=maxImg;
    }
    carregarImg(imgAtual);
}
function anima(){
    tempotroca++
    if(tempotroca>=500){
        tempotroca=0
        troca(1)
    }
    vtempo=tempotroca/5
    vbarra.style.width=vtempo+"%"
    window.requestAnimationFrame(anima)
}
window.addEventListener("load",inicia)
