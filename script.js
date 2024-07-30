// function scrol(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  // };
  // scrol();
function eyes() {


 

  // Get all pupil elements
  const pupils = document.querySelectorAll('.pupil');
  
  // Calculate the center of the eye
  const eyeCenterX = 35 / 2;
  const eyeCenterY = 55 / 2;
  
  // Set the maximum distance the pupil can move from the center
  const maxDistance = Math.min(eyeCenterX, eyeCenterY) - 8; // Subtract half of the pupil's width or height
  
  // Update the pupil position based on mouse movement
  function updatePupilPosition(event) {
    pupils.forEach(pupil => {
      // Get the eye container
      const eye = pupil.parentElement;
      
      // Calculate the distance of the mouse from the center of the eye
      const distanceX = event.clientX - eye.getBoundingClientRect().left - eyeCenterX;
      const distanceY = event.clientY - eye.getBoundingClientRect().top - eyeCenterY;
      
      // Calculate the angle of the mouse relative to the center of the eye
      const angle = Math.atan2(distanceY, distanceX);
      
      // Calculate the normalized distance (distance without crossing the border)
      const normalizedDistance = Math.min(maxDistance, Math.sqrt(distanceX * distanceX + distanceY * distanceY));
      
      // Calculate the new position of the pupil
      const newX = Math.cos(angle) * normalizedDistance + eyeCenterX;
      const newY = Math.sin(angle) * normalizedDistance + eyeCenterY;
      
      // Update the pupil's position
      pupil.style.left = newX + 'px';
      pupil.style.top = newY + 'px';
    });
  }
  
  // Add event listener to track mouse movement
  document.addEventListener('mousemove', updatePupilPosition);
  }
  eyes();

// function canvas(){

//     const canvas = document.querySelector("#page2 canvas");
// const context = canvas.getContext("2d");

// canvas.height = window.innerHeight/1.4;
// canvas.width = window.innerWidth/2.7;



// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   render();
// });

// function files(index) {
//   var data = `
//   https://duck.school/sequence/duck_mobile_compressed_2x/Duck_${index.toString().padStart(5,0)}.webp
//  `;
//   return data;
// }

// const frameCount = 62;

// const images = [];
// const imageSeq = {
//   frame: 1,
// };

// for (let i = 0; i < frameCount; i++) {
//   const img = new Image();
//   img.src = files(i);
//   images.push(img);
// }

// gsap.to(imageSeq, {
//   frame: frameCount - 1,
//   snap: "frame",
//   ease: `none`,
//   scrollTrigger: {
//     scrub:1,
//     // markers:true,
//     trigger: `#page2>canvas`,
//     //   set start end according to preference
//     start: `top 40%`,
//     end: `0% top`,
//     scroller: `#main`,
//   },
//   onUpdate: render,
// });

// images[1].onload = render;

// function render() {
//   scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
//   var canvas = ctx.canvas;
//   var hRatio = canvas.width / img.width;
//   var vRatio = canvas.height / img.height;
//   var ratio = Math.max(hRatio, vRatio);
//   var centerShift_x = (canvas.width - img.width * ratio) / 2;
//   var centerShift_y = (canvas.height - img.height * ratio) / 2;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(
//     img,
//     0,
//     0,
//     img.width,
//     img.height,
//     centerShift_x,
//     centerShift_y,
//     img.width * ratio,
//     img.height * ratio
//     );
//   }
//   ScrollTrigger.create({
    
//     trigger: "#page2",
//     pin: true,
//     // markers:true,
//     scroller: `#main`,
//     //   set start end according to preference
//     start: `top top`,
//     end: `0% -230%`,
    
//   });
  
// }
// canvas()

var alltextspan = document.querySelectorAll("#page2 #page2-content h1 span").forEach(function(span){
  var clutter=""
  span.textContent.split("").forEach(function(e){
    clutter+= `<span>${e}</span>`
  }) 
  span.innerHTML=clutter
})

// animations on page2
// var count = 0;
// setInterval(function(){
  
//   const arrowcontainer = document.querySelector("#page2")
//   if(count<7){
//     const img = document.createElement("img");
//     img.src = "https://duck.school/image/duck-step.svg"; 
//     img.classList.add("arrow");
//     img.style.left = `${Math.random() * 100}vw`; 
//     img.style.top = `${Math.random() * 100}vh`;
//     img.style.height= `${Math.random() * 200}px`
//     img.style.width= `${Math.random() * 200}px`
//     img.style.objectFit= "contain"
//     img.style.transform = `rotate(${Math.random() * 360}deg)`
    
//     arrowcontainer.appendChild(img);
//     count++;
//   }else{
//     arrowcontainer.children[2].style.scale=".2"
//     arrowcontainer.children[2].style.opacity=0
//     arrowcontainer.removeChild(arrowcontainer.children[2])
//     count--;
//   }
// },400)



// #page1 capsule--->
const words=["Knowledge","Inspiration","Success","Learning","Growth","Determination","Achievement","Excellence", "Mentorship","Empowerment","Resilience","Opportunity","Passion","Innovation","Leadership","Goal-setting", "Wisdom","Persistence","Aspiration","Transformation"]

function capsule(){
  
  var iteration =1;
  document.querySelector("#page1").addEventListener("click" ,(dets)=>{
    
    if(iteration<5){
      
      console.log(dets);
      var left = dets.clientX
      var top = dets.clientY
      var capsule = document.createElement("button")
      capsule.classList.add("capsule")
      capsule.style.left = `${left}px`
      capsule.style.top = `${top}px`
      capsule.textContent= `${words[Math.floor(Math.random() * words.length)]}`
      capsule.style.transform = `rotate(-${Math.random() * 60}deg)`
      gsap.to(capsule, { duration: 0, opacity: 0 ,scale:0})
      document.querySelector("#page1").appendChild(capsule)
      gsap.to(capsule,{ ease:"back.inOut",duration:.5,scale:1,opacity: 1 })


iteration++;
}else{
  var left = dets.clientX
  var top = dets.clientY
   var capsule = document.createElement("button")
   capsule.classList.add("capsule")
   capsule.style.left = `${left}px`
   capsule.style.top = `${top}px`
   capsule.textContent= `${words[Math.floor(Math.random() * words.length)]}`
   capsule.style.transform = `rotate(${Math.random() * 30}deg)`
   document.querySelector("#page1").appendChild(capsule)

  const page1 =  document.querySelector("#page1")
  page1.children[5].style.scale=".3"
  page1.children[5].style.opacity=0;

  page1.removeChild(page1.children[5])
  iteration--;
}
})
}
capsule()

//page1 h1 clutter 
const h1elem = document.querySelector("#page1 #page1-content h1").textContent.split("")

var clutter=""
h1elem.forEach(function(e){
      clutter+= `<span>${e}</span>`
})
console.log(clutter)
 document.querySelector("#page1 #page1-content h1 ").innerHTML=clutter;

  
 var tl10 = gsap.timeline()
 tl10.to("#loaderup",{
  delay:1.5,
  opacity:0,
  // duration:1,
 },'a')
 tl10.to("#Loader",{
  delay:1.5,
  opacity:0,
  // duration:1,
 },'a')
 tl10.from("#page1 #ellips",{
  width:"40vw",
  duration:0.8
 },"b")
 tl10.to("#loaderup",{
  delay:1,
  y:-1000
 })
 tl10.to("#Loader",{
  delay:1,
  y:-1000
 })
 tl10.to("#navbar",{
  delay:1,
  duration:1.4,
  marginTop:0,
  opacity:1,
 },"b")
  tl10.from("#page1-content p,#page1-footer ,#page1-content h6",{
  duration:.5,
  delay:1.5,
  opacity:0,
  },"b")

 
 
 
 tl10.from("#page1-content h1 span",{
  y:130,
  delay:1,
  opacity:0,
  duration:.5,
  stagger:.02,
  ease:"back.out",
  },"b")
 
const p2 = gsap.timeline();
p2.to("#page2 canvas",{
  scale:.35,
  y:-100,
  
  scrollTrigger:{
    scrub:1,
    trigger: `#page2>canvas`,
    // markers:true,
    start: `0% -120%`,
    end: `0% -160%`,
    scroller: `#main`,
    
  }
})
p2.from("#page2 #page2-content h1 span",{
  duration:1,
  // ease:"back.out",
  stagger:{
    each:.05,
    from:"start"
    },
    y:150,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: `#page2>canvas`,
        // markers:true,444.3.
        start: `80% 40%`,
        end: `0% -130%`,
        scroller: `#main`,
    }
})

// page3 animations------>

// text clutter page3
var alltextspan = document.querySelectorAll("#page3 #page3-content h1 span").forEach(function(span){
  var clutter=""
  span.textContent.split("").forEach(function(e){
      clutter+= `<span>${e}</span>`
  }) 
  span.innerHTML=clutter
})
var alltextspan = document.querySelectorAll("#page4 #page4-content h1 span").forEach(function(span){
  var clutter=""
  span.textContent.split("").forEach(function(e){
      clutter+= `<span>${e}</span>`
  }) 
  span.innerHTML=clutter
})



const p3 = gsap.timeline();

p3.from("#page3 #page3-content h1 span",{
  duration:1,
  // ease:"back.out",
  stagger:{
      each:.05,
      from:"start"
  },
  y:140,
  opacity:0,
  scrollTrigger:{
      scrub:3,
      trigger: `#page3`,
      // markers:true,
      start: `top 70%`,
      end: `0% 20%`,
      scroller: `#main`,
  }
})
p3.from("#page3 #page3-content p,#page3 #page3-content button",{
  duration:1,
  ease:"back.out",
  stagger:{
      each:.01,
      from:"start"
  },
  y:200,
  opacity:0,
  scrollTrigger:{
      scrub:3,
      trigger: `#page3`,
      // markers:true,
      start: `top 40%`,
      end: `0% top`,
      scroller: `#main`,
  }
})
p3.from("#page4 #page4-content h1 span,#page4 #page4-content .button",{
  duration:1,
  // ease:"back.out",
  stagger:{
      each:.05,
      from:"start"
  },
  y:140,
  opacity:0,
  scrollTrigger:{
      scrub:3,
      trigger: `#page4`,
      // markers:true,
      start: `top 70%`,
      end: `0% top`,
      scroller: `#main`,
  }
})

// page5 animations------>

const p4 = gsap.timeline();
p4.to("#page5 #page5-cards ",{
  x:"-110%",
  // ease:"back.out",


  scrollTrigger:{
      scrub:3,
      trigger: `#page5`,
      // markers:true,
      pin:true,
      start: `top 0%`,
      end: `0% -250%`,
      scroller: `#main`,
  }
})
p4.to("#page5-cards .card:nth-child(1),#page5-cards .card:nth-child(2),#page5-cards .card:nth-child(3),#page5-cards .card:nth-child(4),#page5-cards .card:nth-child(5) ",{
   marginTop:"0",
  rotation: "+=17",

  scrollTrigger:{
      scrub:3,
      trigger: `#page5`,
      // markers:true,
    
      start: `top 0%`,
      end: `0% -150%`,
      scroller: `#main`,
  }
})

// page6 animations------>
const p6 = gsap.timeline({
  scrollTrigger:{
    scrub:2,
    trigger:"#page6",
    // markers:true,
    pin:true,
    start: `30% 0%`,
      end: `0% -360%`,
      scroller: `#main`,
  }
});
p6.from(".card2:nth-child(1)",{
  left:"40%",
  top:"100%",
  rotation:"+=5deg",
})
p6.from(".card2:nth-child(2)",{
left:"50%",
  top:"100%",
  rotation:"+=5deg",

})
p6.from(".card2:nth-child(3)",{
  left:"60%",
  top:"100%",
  rotation:"+=5deg",

})
p6.from(".card2:nth-child(4)",{
  left:"70%",
  top:"100%",
  rotation:"+=5deg",
})

// text clutter page6 bottom---

var alltextspan = document.querySelectorAll("#page6-bottom h1 span").forEach(function(span){
  var clutter=""
  span.textContent.split("").forEach(function(e){
      clutter+= `<span>${e}</span>`
  }) 
  span.innerHTML=clutter
})

// button hover effect---
function getRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
p6.from("#page6-bottom h1 span",{
  duration:1,
  // ease:"back.out",
  stagger:{
      each:.05,
      from:"start"
  },
  y:140,
  opacity:0,
  scrollTrigger:{
      scrub:3,
      trigger: `#page6`,
      // markers:true,
      start: `50% 0%`,
      end: `60% 0%`,
      scroller: `#main`,
  }
})

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    const originalText = button.textContent;

    button.addEventListener("mouseenter", function() {
        let iteration = 0;
        const intervalId = setInterval(() => {
            if (++iteration < originalText.length) {
                let newText = "";
                for (let i = 0; i <= originalText.length; i++) {
                    newText += (i <= iteration) ? originalText[i] : getRandomLetter();
                }
                button.textContent = newText;
            } else {
                clearInterval(intervalId);
                button.textContent = originalText;
            }
        }, 100);
    });
});

function getRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return letters[Math.floor(Math.random() * letters.length)];
}

var last= 0;
locoScroll.on('scroll', (dets) => {
var current = dets.scroll.y
 if(current>last){
  document.querySelector("#navbar").style.marginTop = "-100%"
 }else{
  document.querySelector("#navbar").style.marginTop = "0"
 }
 last = current;
});