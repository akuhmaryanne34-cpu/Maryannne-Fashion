
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      
      mobileMenu.classList.toggle("active");

     
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.setAttribute("aria-hidden", String(expanded));
    });
  } else {
    console.warn("menuBtn or mobileMenu not found in the DOM");
  }
});


setTimeout(() => {
  const popup = document.getElementById("subscribe-popup");
  popup.classList.add("active");
}, 120000);


document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("subscribe-popup").classList.remove("active");
});

if (!localStorage.getItem("subscribed")) {
  setTimeout(() => {
    document.getElementById("subscribe-popup").classList.add("active");
  }, 120000);
}

document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("subscribe-popup").classList.remove("active");
  localStorage.setItem("subscribed", "true");
});


document.addEventListener("DOMContentLoaded", () => {
  // 🛒 Cart button animation
  document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('added');
      btn.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.15)' },
        { transform: 'scale(1)' }
      ], { duration: 200, easing: 'ease-out' });
    });
  });

 
  document.querySelectorAll('.favorite-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('active');
      const heart = icon.querySelector('i');
      heart.classList.toggle('fa-regular');
      heart.classList.toggle('fa-solid');
      icon.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.25)' },
        { transform: 'scale(1)' }
      ], { duration: 250, easing: 'ease-out' });
    });
  });

  // 🧭 Filter button active toggle
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Optional: filtering logic later
    });
  });
});





