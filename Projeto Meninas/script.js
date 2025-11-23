// 🔍 LIVE SEARCH (busca enquanto digita)
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", () => {
    const search = searchInput.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(card => {
        const text = card.textContent.toLowerCase();
        card.parentElement.style.display = text.includes(search) ? "block" : "none";
    });
});

// 🔘 FILTRO POR CATEGORIA
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        document.querySelectorAll(".product-card").forEach(card => {
            const category = card.querySelector(".cat").textContent.toLowerCase();
            card.parentElement.style.display =
                filter === "all" || category.includes(filter) ? "block" : "none";
        });

        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// ✨ ANIMAÇÃO COM SCROLL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.3 });

document.querySelectorAll(".scroll").forEach(el => observer.observe(el));

// 🎬 ANIMAÇÃO DE ENTRADA DO SITE
window.onload = () => {
    document.body.classList.add("site-loaded");
};
