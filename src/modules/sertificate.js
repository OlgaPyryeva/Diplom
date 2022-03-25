const sertificate = () => {
  const sertificateDocuments = document.querySelectorAll(
    ".sertificate-document"
  );

  sertificateDocuments.forEach((sertificate) => {
    const sertificateImg = sertificate.href;

    sertificate.addEventListener("click", (e) => {
      e.preventDefault();
      let sertificateModal = document.createElement("div");
      sertificateModal.className = "sertificate-modal";
      // sertificateModal.style.backgroundImage = `url(${sertificateImg})`;
      sertificateModal.style.display = "block";
      sertificateModal.innerHTML = `
      <img src=${sertificateImg} alt="">
      <span title="Close" class="sertificate-modal__close">x</span></div>`;

      const documentsBlock = document.getElementById("documents");

      documentsBlock.append(sertificateModal);

      const closeBtn = document.querySelector(".sertificate-modal__close");
      closeBtn.addEventListener("click", () => {
        sertificateModal.remove();
      });
    });
  });
};
export default sertificate;
