const markdownToHTML = (markdown) => {
  // convert header
  markdown = markdown
    .replace(/^###### (.*$)/gm, "<h6>$1</h6>")
    .replace(/^##### (.*$)/gm, "<h5>$1</h5>")
    .replace(/^#### (.*$)/gm, "<h4>$1</h4>")
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>");
  //links
  markdown = markdown.replace();
  // Blockquotes
  // markdown = markdown.replace(/^\>(\s\S$)/gm, "<br>");
  markdown = markdown.replace(
    /^\>(.*)$/gm,
    "<blockquote><p>$1</p></blockquote>"
  );
  // convert text Bold and Italic
  markdown = markdown.replace(
    /\*\*\*(.*)\*\*\*/,
    "<em><strong>$1</strong></em>"
  );
  // convert text have first letter is uppercase
  markdown = markdown.replace(/^[A-Z](.*)\.$/gm, "<p>$&</p>");
  // convert text in *italic* to italic text
  markdown = markdown.replace(/\*(.*)\*/, "<em>$1</em>");
  // convert text in **text** to bold text
  markdown = markdown.replace(/\*\*(.*)\*\*/, "<strong>$1</strong>");
  // convert when see <br> to <br> tag in HTML
  markdown = markdown.replace(/<br>/g, "<br>");
  // convert \n to line break in HTML
  markdown = markdown.replace(/\n/g, "<br>");
  return markdown;
};

export const previewBtn = (element) => {
  const h1Node = document.querySelector(".markDownPreview h1");
  const open = element.firstElementChild;
  const close = element.lastElementChild;
  const markDown = document.querySelector(".markDownTextArea");
  const convertedMarkDown = document.querySelector(".convertedMarkDown");
  element.addEventListener("click", (e) => {
    open.classList.toggle("hidden");
    close.classList.toggle("hidden");
    if (open.classList.contains("hidden")) {
      h1Node.textContent = "PREVIEW";
      markDown.classList.toggle("hidden");
      convertedMarkDown.classList.toggle("hidden");
      convertedMarkDown.innerHTML = markdownToHTML(markDown.value);
    } else {
      h1Node.textContent = "MARKDOWN";
      markDown.classList.toggle("hidden");
      convertedMarkDown.classList.toggle("hidden");
    }
  });
};
