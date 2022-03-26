import { animate } from "./helpers";

const requestCall = () => {
  const requestBtn = document.querySelector("div.button > a");
  const requestModal = document.querySelector(".header-modal");
  const modalFone = document.querySelector(".overlay");
  const modalCloseBtn = document.querySelector(".header-modal__close");

  // создадим элемент с прокруткой (для определения ширины скрола)
  let div = document.createElement("div");

  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";

  // мы должны вставить элемент в документ, иначе размеры будут равны 0
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();
  //после определения размера скрола удалям документ

  const showModal = () => {
    requestModal.style.display = "block";
    modalFone.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollWidth}`;

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        requestModal.style.opacity = 1 * progress;
        modalFone.style.opacity = 1 * progress;
      },
    });
  };
  const hideModal = () => {
    requestModal.style.display = "";
    modalFone.style.display = "";
    document.body.removeAttribute("style");
  };

  requestBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showModal();
  });

  modalCloseBtn.addEventListener("click", hideModal);
  modalFone.addEventListener("click", hideModal);
};
export default requestCall;
