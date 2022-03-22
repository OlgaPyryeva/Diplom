const measurerCall = () => {
  const measurerCallBtn = document.querySelector(".btn-sm");
  const servicesModal = document.querySelector(".services-modal");
  const modalFone = document.querySelector(".overlay");
  const servicesModalCloseBtn = document.querySelector(
    ".services-modal__close"
  );

  const showServicesModal = () => {
    servicesModal.style.display = "block";
    modalFone.style.display = "block";
  };

  const hideServicesModal = () => {
    servicesModal.style.display = "";
    modalFone.style.display = "";
  };
  measurerCallBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showServicesModal();
  });

  servicesModalCloseBtn.addEventListener("click", hideServicesModal);
};
export default measurerCall;
