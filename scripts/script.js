const date = document.getElementById('date')

date.innerHTML = new Date().getFullYear()

const links = document.querySelectorAll('.navbar > li > a')
const header = document.querySelector('.header')
const nav = document.querySelector('.navbar')
const navh = nav.getBoundingClientRect().height;
console.log(navh)

window.addEventListener('scroll', function(){
    const scheight = window.pageYOffset
    if (scheight > navh){
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

    links.forEach((link) =>{
            const id = link.getAttribute('href').slice(1)//getAttribute('href').slice(1)
            console.log(id)
            const element = document.getElementById(id)
            let position = element.offsetTop - 150
            let prevPos = position
            console.log(scheight)
            console.log(position)
            if(scheight > navh && scheight >= position && scheight > prevPos){
                removeActive()
                link.classList.add('active')
            }

})})



links.forEach((link) =>{
    console.log(link.classList.contains('active'))
    })

function removeActive(){
    links.forEach((link) =>{
        if(link.classList.contains('active')){
            link.classList.remove('active')
        }
    })
}
links.forEach((link) =>{
    link.addEventListener('click',(e)=>{
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').slice(1)
        removeActive()
        link.classList.add('active')
        const element = document.getElementById(id)
        const fixedNav = nav.classList.contains('bg-white')
        let position = element.offsetTop - navh;
        if(!fixedNav){
            position = position- navh +100 ;
        }
        window.scrollTo({
            left:0,
            top:position
        })
    })
})
