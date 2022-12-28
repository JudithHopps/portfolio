const content = "vue.js(3.0), html(5), javascript(es6), css(3)";
const text = document.querySelector(".text");
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 200);
