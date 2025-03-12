export const previewBtnTablet = (element) => {
  // cache
  const headMarkDown = document.querySelector(".markDownPreviewTablet")
  const open = element.firstElementChild;
  const close = element.lastElementChild;
  const markDownEditor = document.querySelector("#markDownEditor")
  

  // test window screen size
  const width = window.innerWidth;
  
  // state of screen, is it in tablet sreen or not
  const isTablet = width >= 577 && width <= 768 ? true : false;
  
  // on click function
  const onClickBtn = () => {
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
    headMarkDown.firstElementChild.classList.toggle('hidden')
    markDownEditor.firstElementChild.classList.toggle('hidden')
    if(headMarkDown.firstElementChild.classList.contains('hidden') && isTablet){
      headMarkDown.style.display = "block"
      headMarkDown.lastElementChild.style.width="100%";
      headMarkDown.lastElementChild.style.borderLeft="none";
      headMarkDown.lastElementChild.style.paddingLeft="0";

      markDownEditor.style.display = "block";
      markDownEditor.lastElementChild.style.width = "100%";
      markDownEditor.lastElementChild.style.borderLeft = "none";

    } else{
      headMarkDown.style.display = "flex"
      headMarkDown.lastElementChild.style.width="50%";
      headMarkDown.lastElementChild.style.borderLeft="#2b2d31 2px solid";
      headMarkDown.lastElementChild.style.paddingLeft="1.6rem";

      markDownEditor.style.display = "flex";
      markDownEditor.lastElementChild.style.width = "50%";
      markDownEditor.lastElementChild.style.borderLeft = "#2b2d31 2px solid";
    }

  }
  element.addEventListener("click",onClickBtn)
};
