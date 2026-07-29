// ============================
// 한 사람의 자리
// Step 1
// Intro → Main
// ============================

const intro = document.getElementById("intro");
const main = document.getElementById("main");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    intro.style.transition = "opacity 1.2s ease";

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        main.style.display = "block";

        main.style.opacity = "0";

        main.style.transition = "opacity 1.2s ease";

        requestAnimationFrame(() => {

            main.style.opacity = "1";

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        });

    },1200);

});
