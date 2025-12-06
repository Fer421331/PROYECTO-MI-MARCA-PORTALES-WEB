const state = {
  activeCategories: new Set(), 
  query: ""
};

function applyFilters() {
  const productos = document.querySelectorAll(".producto");
  const noResultsMsg = document.getElementById("noResultsMsg");

  let visibleCount = 0;

  productos.forEach(prod => {
    const category = prod.getAttribute("data-category");
    const text = prod.innerText.toLowerCase();

    const matchCategory =
      state.activeCategories.size === 0 || (category && state.activeCategories.has(category));

    const matchQuery =
      state.query.trim() === "" || text.includes(state.query.trim().toLowerCase());

    if (matchCategory && matchQuery) {
      prod.style.display = "block";
      visibleCount++;
    } else {
      prod.style.display = "none";
    }
  });

  if (noResultsMsg) {
    if (visibleCount === 0) {
      noResultsMsg.style.display = "block";
    } else {
      noResultsMsg.style.display = "none";
    }
  }
}

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-filter");

    if (button.classList.contains("active-filter")) {
      button.classList.remove("active-filter");
      state.activeCategories.delete(category);
    } else {
      button.classList.add("active-filter");
      state.activeCategories.add(category);
    }

    applyFilters();
  });
});

const searchInput = document.getElementById("searchInput");

function debounce(fn, delay = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

const onSearch = debounce(() => {
  state.query = searchInput.value;
  applyFilters();
}, 200);

if (searchInput) {
  searchInput.addEventListener("input", onSearch);
}

document.addEventListener("scroll", () => {
  const grid = document.querySelector(".grid-productos");
  if (!grid) return;
  const rect = grid.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    grid.classList.add("visible");
  }
});

document.addEventListener("DOMContentLoaded", () => {

  let noResultsMsg = document.getElementById("noResultsMsg");
  if (!noResultsMsg) {
    noResultsMsg = document.createElement("p");
    noResultsMsg.id = "noResultsMsg";
    noResultsMsg.textContent = "No se encontró ningún producto...";
    noResultsMsg.style.display = "none";
    noResultsMsg.style.textAlign = "center";
    noResultsMsg.style.fontWeight = "bold";
    noResultsMsg.style.color = "#e74c3c";
    document.querySelector(".productos").appendChild(noResultsMsg);
  }

  applyFilters();

  const grid = document.querySelector(".grid-productos");
  if (grid && grid.getBoundingClientRect().top < window.innerHeight - 100) {
    grid.classList.add("visible");
  }


  const nav = document.querySelector("header nav ul");
  const burger = document.createElement("div");
  burger.classList.add("burger");
  burger.innerHTML = "&#9776;"; 
  burger.style.cursor = "pointer";
  burger.style.fontSize = "1.5rem";
  burger.style.color = "#d4af37";
  burger.style.display = "block";

  
  if (window.innerWidth < 720) {
    nav.style.display = "none";
    document.querySelector("header").insertBefore(burger, nav);
  }

  burger.addEventListener("click", () => {
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.gap = "0.5rem";
    } else {
      nav.style.display = "none";
    }
  });

  
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 720) {
      nav.style.display = "flex";
      burger.style.display = "none";
    } else {
      nav.style.display = "none";
      burger.style.display = "block";
    }
  });
});
