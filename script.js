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

    // ========================================
// STEP 4
// Cinematic Scroll
// ========================================

const buildingPhoto = document.querySelector(".buildingPhoto");

let ticking = false;

window.addEventListener("scroll", () => {

    if (main.style.display === "none") return;

    if (!ticking) {

        window.requestAnimationFrame(() => {

            const y = window.scrollY;

            // --------------------------
            // 광화문 카메라 줌
            // --------------------------

            const zoom = 100 + (y * 0.03);

            gate.style.backgroundSize = `${zoom}%`;

            // --------------------------
            // 광화문 암전
            // --------------------------

            const darkness = Math.min(y / 1200, 0.55);

            gate.querySelector(".gateOverlay").style.background =
                `rgba(0,0,0,${0.45 + darkness})`;

            // --------------------------
            // 광화문 텍스트
            // --------------------------

            gateText.style.opacity = Math.max(1 - y / 350, 0);

            gateText.style.transform =
                `translateY(${y * 0.25}px)`;


            // --------------------------
            // 근정전 이미지
            // --------------------------

            if (buildingPhoto) {

                const rect = buildingPhoto.getBoundingClientRect();

                if (rect.top < window.innerHeight) {

                    const value =
                        (window.innerHeight - rect.top) / 25;

                    buildingPhoto.style.transform =
                        `scale(${1 + value * 0.003})`;

                }

            }

            ticking = false;

        });

        ticking = true;

    }

});

});

// =====================================
// THRONE Animation
// =====================================

const throneImage = document.querySelector(".throneImage");

const throneObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            throneImage.classList.add("show");

        }

    });

},

{

    threshold:0.35

}

);

if(throneImage){

    throneObserver.observe(throneImage);

}

// ================================
// Reflection
// ================================

const saveButton = document.querySelector("#savePromise");
const saveMessage = document.querySelector("#saveMessage");
const textarea = document.querySelector("textarea");

if(saveButton){

    saveButton.addEventListener("click",()=>{

        if(textarea.value.trim()===""){

            saveMessage.textContent="다짐을 입력해주세요.";

            return;

        }

        saveMessage.textContent="당신의 다짐이 기록되었습니다.";

    });

}
