 //FUNÇÃO DE FECHAR O MENU
 $(".btn-close").click(function(){
    $(".itens-menu").hide();
    $(".btn-menu").show();
});

//FUNÇÃO DE ABRIR O MENU
$(".btn-menu").click(function(){
    $(".itens-menu").show();
    $(".btn-menu").hide();
});

// MODAL | IFRAME
const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for(let card of cards){
    card.addEventListener("click", function(){
        const card_id = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${card_id}`;
        console.log(`https://app.rocketseat.com.br/${card_id}`);
    })
}

document.querySelector(".close-model").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";

})
const model = document.querySelector(".model");
const iframe = document.querySelector("iframe");
const max = document.querySelector(".max-model");
max.addEventListener("click",function(){
    model.classList.toggle("maximizado");
    iframe.classList.toggle("maximizado");
})


function Home(){
    window.location.href = "/"
  }

