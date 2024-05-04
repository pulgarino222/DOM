let mode= document.querySelector(".mode")
console.log(mode)
let html=document.querySelector("html")
console.log(html)


mode.addEventListener("click", function (){
    if(html.getAttribute('data-bs-theme') === 'dark'){
        html.setAttribute('data-bs-theme', 'light')

    }else{
        html.setAttribute('data-bs-theme', 'dark')
    }
})
