import { animate, scrollWidthSize } from "./helpers";

const measurerCall = () => {
  const measurerCallBtn = document.querySelectorAll(".btn-sm");
  const servicesModal = document.querySelector(".services-modal");
  const modalFone = document.querySelector(".overlay");
  const servicesModalCloseBtn = document.querySelector(
    ".services-modal__close"
  );
  let scrollWidth;

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

    scrollWidthSize();
    document.body.style.paddingRight = `${scrollWidth}`;

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
