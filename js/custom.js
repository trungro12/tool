// load content with jquery
function loadContent(element, url) {
  element
    .html(
      "<img alt='loading' style='max-width:70px' src='https://i.imgur.com/BsLJBhG.gif' />"
    )
    .load(url);
}
// base64image
function readFile() {
  if (!this.files || !this.files[0]) return;

  const FR = new FileReader();

  FR.addEventListener("load", function (evt) {
    document.querySelector("#img").src = evt.target.result;
    document.querySelector("#b64").style.display = "block";
    document.querySelector("#b64").textContent = evt.target.result;
    document.querySelector("#result").innerHTML = "<h3>Result</h3>";
    document.querySelector("#preview").innerHTML = "<h3>Preview</h3>";
  });

  FR.readAsDataURL(this.files[0]);
}