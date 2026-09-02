document.addEventListener("DOMContentLoaded", () => {
    // Redirect unused anchor tags
    document.querySelectorAll("a").forEach(a => {
        const href = a.getAttribute("href");
        if (href === "#" || href === "" || href === "javascript:void(0)" || !href) {
            // Ignore SPA navigation links in dashboard
            if (!a.hasAttribute("data-target")) {
                a.addEventListener("click", (e) => {
                    e.preventDefault();
                    window.location.href = "404.html";
                });
            }
        }
    });

    // Redirect unused buttons
    document.querySelectorAll("button").forEach(btn => {
        // Ignore submit buttons inside forms, mobile menu toggles, role buttons, and buttons that already have inline onclick or specific data targets
        const isSubmitInsideForm = btn.type === "submit" && btn.closest("form");
        if (
            !isSubmitInsideForm && 
            !btn.classList.contains("menu-toggle") && 
            !btn.classList.contains("hamburger") && 
            !btn.classList.contains("notification-btn") &&
            !btn.classList.contains("role-btn") &&
            !btn.hasAttribute("onclick") &&
            !btn.hasAttribute("data-target")
        ) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = "404.html";
            });
        }
    });
});
