export const previewBtnTablet = (element) => {
  // cache
  const headMarkDown = document.querySelector(".markDownPreviewTablet")
  const open = element.firstElementChild;
  const close = element.lastElementChild;
  const markDownEditor = document.querySelector("#markDownEditor")


  // test window screen size
  const width = window.innerWidth;
  const isTablet = width >= 572 && width <= 768 ? true : false;

  const onClickBtn = () => {
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
    headMarkDown.firstElementChild.classList.toggle('hidden');
    if(headMarkDown.firstElementChild.classList.contains('hiddens') && isTablet){
      headMarkDown.style.display = 'block'; 
      headMarkDown.lastElementChild.style.width ="100%";

    }

  }
  element.addEventListener("click",onClickBtn)
};
