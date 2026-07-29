// ==========================================
// 한 사람의 자리
// STEP 2
// ==========================================

const intro = document.getElementById("intro");
const main = document.getElementById("main");
const enterBtn = document.getElementById("enterBtn");

const gate = document.getElementById("gate");

const gateTitle = document.querySelector(".gateText");
const gateSection = document.getElementById("gate");
const gateImage = gateSection;



// ------------------------------
// 입장하기
// ------------------------------

enterBtn.addEventListener("click",()=>{

    intro.style.transition="opacity 1.3s";

    intro.style.opacity="0";

    setTimeout(()=>{

        intro.style.display="none";

        main.style.display="block";

        main.style.opacity="0";

        requestAnimationFrame(()=>{

            main.style.transition="opacity 1.2s";

            main.style.opacity="1";

            window.scrollTo({
                top:0
            });

        });

    },1300);

});



// ------------------------------
// 광화문 패럴랙스
// ------------------------------

window.addEventListener("scroll",()=>{

    if(main.style.display==="none") return;

    const y=window.scrollY;

    gateImage.style.backgroundPosition=`center ${y*0.35}px`;

});



// ------------------------------
// 광화문 텍스트 페이드
// ------------------------------

window.addEventListener("scroll",()=>{

    if(main.style.display==="none") return;

    const value=window.scrollY;

    gateTitle.style.opacity=1-value/350;

    gateTitle.style.transform=
    `translateY(${value*0.3}px)`;

});



// ------------------------------
// 메뉴 클릭
// ------------------------------

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",(e)=>{

        const target=link.getAttribute("href");

        if(target==="#"){

            e.preventDefault();

            return;

        }

    });

});



// ------------------------------
// 근정전 이미지 등장 애니메이션
// ------------------------------

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate([

                {

                    opacity:0,

                    transform:"translateY(120px)"

                },

                {

                    opacity:1,

                    transform:"translateY(0)"

                }

            ],{

                duration:1200,

                fill:"forwards"

            });

        }

    });

});

document.querySelectorAll(".buildingImage,.buildingText").forEach(el=>{

    el.style.opacity=0;

    observer.observe(el);

});
