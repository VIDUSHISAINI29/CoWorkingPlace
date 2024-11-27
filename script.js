const text1_elem_container = document.querySelector('.hero1_left_text1')
const text1_elem = document.querySelector('.text1')
const nav_elem = document.querySelectorAll('.nav_item')
const hero_main_text = document.querySelectorAll('.hero_main_span')

const tl = gsap.timeline()

gsap.to(text1_elem_container, {
    width:'30vw',
    duration: 1,
    delay:0,
   ease:'circ.out'
    
}) 

gsap.from(text1_elem,{
    y:30,
    opacity:0,
    duration: 1,
    delay:0,
    width: '50%',
    ease:'circ.out'

})
 
gsap.from(nav_elem, {
    x:0,
    y: -60,
    duration: 1,
    delay:0,
    opacity:0,
    stagger:0.5,
    ease:'circ.out'
})

const non_text_div = document.querySelector('.non_text')
const text2_elem = document.querySelector('.text2')
const text3_elem = document.querySelector('.text3')
const text4_elem = document.querySelector('.text4')
const span_elem = document.querySelector('.span')
const rating_content = document.querySelectorAll('.rating1_container')


gsap.from(non_text_div, {
    opacity: 0,
    delay:0,
    duration: 1,
    width: '100vw',
    ease:'circ.out'

})
gsap.from(text2_elem, {
    opacity: 0,
    delay:0,
    duration: 1,
    width: '100vw',
    ease:'circ.out'

})
gsap.from(text3_elem, {
    opacity: 0,
    delay:0,
    duration: 1,
    width: '100vw',
    ease:'circ.out'

})
gsap.from(text4_elem, {
    opacity: 0,
    delay:0,
    duration: 1,
    width: '100vw',
    ease:'circ.out'

})
gsap.from(rating_content,{
    opacity:0,
    delay: 0,
    duration: 1,
    y:30,
    stagger:0,
    ease:'circ.out'

})

const hero3_img_elem = document.querySelector('.hero3_img')
const hero3_orange_elem = document.querySelector('.hero3_orange_box')
const hero3_text = document.querySelectorAll('.hero3_content_animate')
const hero3_text_div = document.querySelector('.hero3_content_animate1')

gsap.from(hero3_img_elem, {
    x:100,

    delay:0,
    duration:1,
    height:'0px',
    ease:'circ.out',
    scrollTrigger: {
        trigger: hero3_img_elem,
        scrub:true,
    }
})
gsap.from(hero3_orange_elem,{
    delay:0,
    duration:1,
    x:-300,
    ease:'circ.out',
    scrollTrigger: {
        trigger: hero3_orange_elem,
        scrub:true,
    }

})

gsap.from(hero3_text,{
    delay: 0,
    duration: 1,
    y:30,
    stagger:0,
    ease:'circ.out',
    scrollTrigger: {
        trigger: hero3_text,
        scrub:true,
    }

})
gsap.from(hero3_text_div,{
    delay: 0,
    duration: 1,
    y:200,
    stagger:0,
    ease:'circ.out',
    scrollTrigger: {
        trigger: hero3_text,
        scrub:true,
    }

})

const menu_inner_img = document.querySelector('.menu_img')
const menu_inner_items = document.querySelector('.menu_items')
const item_elem = document.querySelectorAll('.item')




const menu_inner_elem = document.querySelector('.menu_inner')
const hero_begin_elem = document.querySelector('.hero_begin')
const container_elem = document.querySelector('.container')

function myFunction(x) {
    x.classList.toggle("change");


    
        gsap.from(menu_inner_img, {
            width:'0vw',
            duration: 1,
            ease: 'circ.out',
            scrollTrigger:{
                trigger: menu_inner_img,
            
            }
        })
     
        gsap.from(item_elem, {
            x:30,
            duration:1,
            ease:'circ.out',
        })
  }

  container_elem.addEventListener('click', () =>{
    if(  menu_inner_elem.style.display === 'none'){
        menu_inner_elem.style.display = 'flex'
       }
       else{
        menu_inner_elem.style.display = 'none'
       }
        if(hero_begin_elem.style.display === 'flex'){
            hero_begin_elem.style.display = 'none'
        }else{
            hero_begin_elem.style.display = 'flex'
        }
  })


//   document.querySelector('.container').addEventListener('click',() =>{

//   })

const slider_elem = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const prev_elem = document.querySelector('.prev')
const next_elem = document.querySelector('.next')



let currentIndex = 0;


function moveImg(){
    slider_elem.style.transform = `translateX(-${currentIndex * 100}%)`
  
}

function prevSlide(){
    if(currentIndex > 0  ){
        currentIndex--
    }
    else{
        currentIndex = slides.length - 1
    }
    moveImg()
  
    console.log('ans = ', 'true');
    let slide = slides[currentIndex]
    let newIndex = currentIndex + 1
    gsap.from(slide,{
        x: `${(newIndex)* 100 }`,
        duration: 0.5,
    })
}

function nextSlide(){
    if(currentIndex < slides.length -1 ){
        currentIndex++
    }
    else{
        currentIndex = 0
    }
    moveImg()
    let slide = slides[currentIndex]
    let newIndex = currentIndex + 2
    gsap.from(slide,{
        x: `-${newIndex * 100 }`,
        duration: 0.5,
    })
    

    console.log('ans = ', 'true');
}

    function startAutoslide(){
        autoSlideInterval = setInterval(nextSlide,20000)
    }
    function stopautoslide(){
        clearInterval(autoSlideInterval);
    }

    startAutoslide()    

    next_elem.addEventListener('click', () =>{
        stopautoslide()
        nextSlide()
        startAutoslide()
    })

    prev_elem.addEventListener('click', () =>{
        stopautoslide()
        prevSlide()
        startAutoslide()
    })
const overlay_div = document.querySelector('.overlay')
gsap.to(overlay_div, {
    width: '0%',
    duration: 1,
    scrollTrigger: {
        trigger: overlay_div,
        scrub:true,

    }
})