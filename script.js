let menuButton = document.getElementById('ham-menu')
let navLinks = document.getElementById('m-links-cont')

function checkdeviceWidth(){
    if(window.innerWidth <=900){
        menuButton.addEventListener('click', ()=>{
            console.log('hel')
            navLinks.classList.toggle('block')
        })
    }
}

checkdeviceWidth()



window.addEventListener('resize', checkdeviceWidth)