 export const navSlide = () => {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () =>{
        console.log('he hecho click');
        console.log(nav.classList)
        nav.classList.toggle('nav-active');
        
        //animacion links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${5/7 + 0.2}s`;
    
            }
        });
        //animacion menu burger
        burger.classList.toggle('toggle');

    })

}
console.log('estoy en ');