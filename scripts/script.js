const date = document.getElementById('date')

date.innerHTML = new Date().getFullYear()

const links = document.querySelectorAll('.navbar > li > a')
const header = document.querySelector('.header')


window.addEventListener('scroll', function(){
    const scheight = window.pageYOffset
    if (scheight > 500){
        header.classList.add('bg-white')
        document.querySelector(".logo-img").src = "../images/logo.webp"
        for(let link of links){
            link.classList.add("black")
        }
    }
    else{
        header.classList.remove('bg-white') 
        document.querySelector(".logo-img").src = "../images/logo-alt.webp"
        for(let link of links){
            link.classList.remove("black")
        }
    }
})
