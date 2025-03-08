export const previewBtnTablet = (element) => {
  // cache
  const headMarkDown = document.querySelector(".markDownPreviewTablet")
  const open = element.firstElementChild;
  const close = element.lastElementChild;
  const markDownEditor = document.querySelector("#markDownEditor")
  

  // test window screen size
  const width = window.innerWidth;
  // state of screen, is it in tablet sreen or not
  const isTablet = width >= 572 && width <= 768 ? true : false;
  
  const onClickBtn = () => {
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
    headMarkDown.firstElementChild.classList.toggle('hidden')
    if(headMarkDown.firstElementChild.classList.contains('hidden') && isTablet){
      headMarkDown.style.display = "block"
      headMarkDown.lastElementChild.style.width="100%";
      headMarkDown.lastElementChild.style.borderLeft="none";
      headMarkDown.lastElementChild.style.paddingLeft="0";
    } else{
      headMarkDown.style.display = "flex"
      headMarkDown.lastElementChild.style.width="50%";
      headMarkDown.lastElementChild.style.borderLeft="#2b2d31 2px solid";
      headMarkDown.lastElementChild.style.paddingLeft="1.6rem";
    }

  }
  element.addEventListener("click",onClickBtn)
};
