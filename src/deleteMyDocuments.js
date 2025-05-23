export const deleteMyDocuments = (element) => {
  // Your code here
  const data = JSON.parse(localStorage.getItem("documentsData")) || [];
  element.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    const nameDocument = document.querySelector(".nameDocument");
    const markDownInput = document.querySelector(".markDownTextArea");
    //turn on modal
    modal.style.display = "block";

    // add content to modal
    modalContent.innerHTML = `
        <h1>Delete this document?</h1>
        <p>Are you sure you want to delete the <br>'${nameDocument.value}' document and its content? <br> This action cannot be revesred.</p>
        <div class="modal-footer">
            <button id="confirmBtn" class="modal-close btn">Confirm & Delete</button>
        </div>
    `;

    // set click event for button confirm
    const confirmBtn = document.getElementById("confirmBtn");
    confirmBtn.addEventListener("click", () => {
      const deleteCurrentDocument = data.filter(
        (item) => item.name !== nameDocument.value
      );
      localStorage.setItem(
        "documentsData",
        JSON.stringify(deleteCurrentDocument)
      );
      modal.style.display = "none";
      window.location.reload();
    });

    //turn off modal
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
};
