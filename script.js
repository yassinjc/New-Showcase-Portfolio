window.addEventListener("load", () => {
    const name = document.querySelector(".name");
    const badge = document.querySelector(".badge-glitch");
    const navList = document.querySelector("nav ul");

    // Naam Glitch Logica
    if (name) {
        const pulse = (d = 140) => {
            name.classList.add("glitch");

            const t = setInterval(() => {
                name.style.transform =
                    `translate(${(Math.random() - 0.5) * 40}px, ${(Math.random() - 0.5) * 20}px)
           rotate(${(Math.random() - 0.5) * 2}deg)`;
            }, 18);

            setTimeout(() => {
                clearInterval(t);
                name.classList.remove("glitch");
                name.style.transform = "";
            }, d);
        };

        setTimeout(() => {
            name.style.opacity = "1";
            pulse(160);
            setTimeout(() => pulse(140), 220);
        }, 500);
    }


    // Badge Glitch Logica
    if (badge) {
        setTimeout(() => {
            badge.style.opacity = "1";
            badge.classList.add("glitch");

            setTimeout(() => {
                badge.classList.remove("glitch");
            }, 280);
        }, 1250);
    }


    // Navbar Transitie Logica
    if (navList) {
        setTimeout(() => {
            navList.classList.add("nav-in");
        }, 1850);
    }
});
