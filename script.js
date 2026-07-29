// =========================================
// STEP 3
// 한 사람의 자리
// =========================================

const intro=document.getElementById("intro");
const main=document.getElementById("main");
const enterBtn=document.getElementById("enterBtn");

const gate=document.getElementById("gate");
const gateText=document.querySelector(".gateText");



// --------------------
// 입장
// --------------------

enterBtn.addEventListener("click",()=>{

    intro.style.transition="opacity 1.2s";

    intro.style.opacity=0;

    setTimeout(()=>{

        intro.style.display="none";

        main.style.display="block";

        requestAnimationFrame(()=>{

            main.style.opacity=0;

            main.style.transition="opacity 1s";

            main.style.opacity=1;

            window.scrollTo(0,0);

        });

    },1200);

});



// --------------------
// 패럴랙스
// --------------------

window.addEventListener("scroll",()=>{

    if(main.style.display==="none") return;

    const y=window.scrollY;



    // 광화문 줌

    gate.style.backgroundSize=
        100+y*0.04+"%";



    // 배경 이동

    gate.style.backgroundPosition=
        `center ${y*0.35}px`;



    // 글자 사라짐

    gateText.style.opacity=
        1-y/320;

    gateText.style.transform=
        `translateY(${y*.4}px)`;


});




// --------------------
// 등장 애니메이션
// --------------------

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[

{

opacity:0,

transform:"translateY(80px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],

{

duration:1200,

fill:"forwards",

easing:"ease"

}

);

}

});

},{threshold:.35});



document.querySelectorAll(".buildingImage,.buildingText")
.forEach(el=>{

observer.observe(el);

});




// --------------------
// 메뉴
// --------------------

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",(e)=>{

const href=link.getAttribute("href");

if(href==="#"){

e.preventDefault();

}

});

});
