import { animate } from "./helpers";

const requestCall = () => {
  const requestBtn = document.querySelector("div.button > a");
  const requestModal = document.querySelector(".header-modal");
  const modalFone = document.querySelector(".overlay");
  const modalCloseBtn = document.querySelector(".header-modal__close");
  console.log(requestBtn);

  const showModal = () => {
    requestModal.style.display = "block";
    modalFone.style.display = "block";

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
  };

  requestBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showModal();
  });

  modalCloseBtn.addEventListener("click", hideModal);
};
export default requestCall;
