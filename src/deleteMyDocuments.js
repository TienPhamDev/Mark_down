export const deleteMyDocuments = (element) => {
    // Your code here
    const data = JSON.parse(localStorage.getItem("documentsData")) || [];
    element.addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        const confirmBtn = document.querySelector(".confirmBtn");

        //turn on modal
        modal.style.display = "block";

        // const nameDocument = document.querySelector(".nameDocument");
        // const deleteCurrentDocument = data.filter((item) => item.name !== nameDocument.value);
        // localStorage.setItem("documentsData", JSON.stringify(deleteCurrentDocument));
        
    }); 
};
