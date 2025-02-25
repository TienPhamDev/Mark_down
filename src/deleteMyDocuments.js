export const deleteMyDocuments = (element) => {
  // Your code here
  const data = JSON.parse(localStorage.getItem("documentsData")) || [];
  element.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    const nameDocument = document.querySelector(".nameDocument");

    //turn on modal
    modal.style.display = "block";

    // add content to modal
    modalContent.innerHTML = `
        <h2>Delete this document?</h2>
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
    });

    //turn off modal
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
};
