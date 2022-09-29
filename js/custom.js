// load content with jquery
function loadContent(element, url) {
  element
    .html(
      "<img alt='loading' style='max-width:70px' src='https://i.imgur.com/BsLJBhG.gif' />"
    )
    .load(url);
}
function readFile() {
  if (!this.files || !this.files[0]) return;

  const FR = new FileReader();

  FR.addEventListener("load", function (evt) {
    document.querySelector("#img").src = evt.target.result;
    document.querySelector("#b64").style.display = "block";
    document.querySelector("#b64").textContent = evt.target.result;
  });

  FR.readAsDataURL(this.files[0]);
}
document.querySelector("#inp").addEventListener("change", readFile);