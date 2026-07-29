// =========================================
// 한 사람의 자리
// Part 1
// Intro / Navigation / Scroll Animation
// =========================================

// ----------------------------
// 요소 가져오기
// ----------------------------

const intro = document.getElementById("intro");
const main = document.getElementById("main");
const enterBtn = document.getElementById("enterBtn");


// ----------------------------
// 입장하기
// ----------------------------

enterBtn.addEventListener("click", () => {

    intro.style.transition = "opacity 1s";
    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";
        main.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1000);

});


// ----------------------------
// 메뉴 부드러운 이동
// ----------------------------

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


// ----------------------------
// 등장 애니메이션
// ----------------------------

const sections = document.querySelectorAll(
    "#gate, #geunjeong, #throne, #desk, #kingview, #reflection"
);

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition =
        "opacity 1s ease, transform 1s ease";

});


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.25

});


sections.forEach(section => {

    observer.observe(section);

});

// =========================================
// 한 사람의 자리
// Part 2
// Reflection / 저장 / 첫 화면
// =========================================

// ----------------------------
// 다짐 남기기
// ----------------------------

const textarea = document.querySelector("textarea");
const saveButton = document.getElementById("savePromise");
const saveMessage = document.getElementById("saveMessage");

// 저장된 다짐 불러오기
const savedPromise = localStorage.getItem("myPromise");

if(savedPromise){

    textarea.value = savedPromise;

    saveMessage.textContent = "이전에 작성한 다짐이 불러와졌습니다.";

}

// 버튼 클릭
saveButton.addEventListener("click",()=>{

    const text = textarea.value.trim();

    if(text === ""){

        saveMessage.textContent = "다짐을 입력해주세요.";

        return;

    }

    localStorage.setItem("myPromise", text);

    saveMessage.textContent = "당신의 다짐이 기록되었습니다.";

});


// ----------------------------
// 새로고침 시 항상 처음부터 시작
// ----------------------------

window.addEventListener("load",()=>{

    intro.style.display = "block";

    intro.style.opacity = "1";

    main.style.display = "none";

    window.scrollTo(0,0);

});


// ----------------------------
// ESC 누르면 맨 위로
// (발표할 때 편리)
// ----------------------------

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});


// ----------------------------
// 이미지 로드 확인
// ----------------------------

document.querySelectorAll("img").forEach(img=>{

    img.addEventListener("error",()=>{

        console.warn("이미지를 찾을 수 없습니다 :", img.src);

    });

});


// ----------------------------
// Console
// ----------------------------

console.log("한 사람의 자리 - Exhibition Loaded");
