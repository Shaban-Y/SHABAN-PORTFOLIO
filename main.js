const text = "Shaban Yussuf";
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 120);
  }
}

typeText();
