const mobileBreakpoint = window.matchMedia("(max-width: 760px)");

function closeMenu(button, links) {
    links.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
}

document.querySelectorAll(".nav-inner").forEach((nav) => {
    const button = nav.querySelector(".nav-toggle");
    const links = nav.querySelector(".nav-links");

    if (!button || !links) {
        return;
    }

    button.addEventListener("click", () => {
        const isOpen = links.classList.toggle("open");
        button.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (mobileBreakpoint.matches) {
                closeMenu(button, links);
            }
        });
    });

    mobileBreakpoint.addEventListener("change", (event) => {
        if (!event.matches) {
            closeMenu(button, links);
        }
    });
});
