const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".top-arrow").classList.add("show");
  } else {
    document.querySelector(".top-arrow").classList.remove("show");
  }
}

// Smooth scroll to top
document.querySelector(".top-arrow").addEventListener("click", function (e) {
  e.preventDefault();
  const scrollOptions = {
    top: 0,
    behavior: "smooth",
  };
  window.scrollTo(scrollOptions);
});
