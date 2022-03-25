const scrollBtn = () => {
  const scrollImg = document.querySelector("div.smooth-scroll>img");
  const scrollBlock = document.querySelector("div.smooth-scroll");
  const beginPage = document.getElementById("header");
  const nav = document.getElementById("navigation");
  const firstPart = document.getElementById("offer");
  let windowScrollTop = window.scrollY;

  const heightFirstBlock =
    beginPage.clientHeight + nav.clientHeight + firstPart.clientHeight;

  if (windowScrollTop > heightFirstBlock) {
    scrollBlock.style.opacity = "1";
  }

  window.addEventListener("scroll", (e) => {
    windowScrollTop = window.scrollY;
    if (windowScrollTop <= heightFirstBlock || windowScrollTop === 0) {
      scrollBlock.style.opacity = "0";
    }
    if (windowScrollTop > heightFirstBlock) {
      scrollBlock.style.opacity = "1";
    }
  });

  scrollImg.addEventListener("click", (e) => {
    e.preventDefault();
    beginPage.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  });
};
export default scrollBtn;
