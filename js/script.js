$(document).ready(function() {

let slideAtual = 1
let listaSlides = ["banner-portal", "banner-cs", "banner-league"]

setInterval(mudarSlide, 2000)

function mudarSlide() {
//remover o slide anterior

if (slideAtual > 0) {
    $("#carrosel").removeClass(listaSlides[slideAtual - 1])
} else {
    $("#carrosel").removeClass(listaSlides[2])
}

//exibir slide atual

$("#carrosel").addClass(listaSlides[slideAtual])

// indicar qual slide atual

console.log("slide atual é:", slideAtual)

slideAtual++

if(slideAtual > 2) {
    slideAtual = 0
}

}














$("#barras").click(function() {

    //Toggle
    if ($("menu").hasClass("menu-ativo") ) {
        $("menu").removeClasss("menu-ativo")
    } else {
        $("menu").addClass("menu-ativo")
    }

})

})



// alert ("Essa mensagem foi executada pelo JS externo")

function cadastrarNewsletter() {
    let email = document.getElementById("campo-email").value
    alert(email)
    console.log(email)
}

function mostrarMenu() {
    // identificar o elemento menu

   let menu = document.getElementById("menu")

    

    if(getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }

}