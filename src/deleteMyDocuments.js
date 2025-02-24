export const deleteMyDocuments = (element) => {
    // Your code here
    const data = JSON.parse(localStorage.getItem("documentsData")) || [];
    element.addEventListener("click", () => {
        const nameDocument = document.querySelector(".nameDocument");
        const deleteCurrentDocument = data.filter((item) => item.name !== nameDocument.value);
        localStorage.setItem("documentsData", JSON.stringify(deleteCurrentDocument));
        
    }); 
};
