import { animate } from "./helpers";

const measurerCall = () => {
  const measurerCallBtn = document.querySelectorAll(".btn-sm");
  const servicesModal = document.querySelector(".services-modal");
  const modalFone = document.querySelector(".overlay");
  const servicesModalCloseBtn = document.querySelector(
    ".services-modal__close"
  );

  // создадим элемент с прокруткой
  let div = document.createElement("div");

  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";

  // мы должны вставить элемент в документ, иначе размеры будут равны 0
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();
  //размер скролла определен

  measurerCallBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      showServicesModal();
    });
  });

  const showServicesModal = () => {
    servicesModal.style.display = "block";
    modalFone.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollWidth}px`;

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        servicesModal.style.opacity = 1 * progress;
        modalFone.style.opacity = 1 * progress;
      },
    });
  };

  const hideServicesModal = () => {
    servicesModal.style.display = "";
    modalFone.style.display = "";
    document.body.removeAttribute("style");
  };

  servicesModalCloseBtn.addEventListener("click", hideServicesModal);
};
export default measurerCall;
