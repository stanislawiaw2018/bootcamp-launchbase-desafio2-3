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

const cards = document.querySelectorAll(".card");
