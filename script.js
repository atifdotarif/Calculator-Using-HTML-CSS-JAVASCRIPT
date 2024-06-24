let ans = document.querySelector("#equal");
ans.onclick = () => {
  let display = document.querySelector("[name='display']");
  display.value = eval(display.value);
};
let mod = document.querySelector("#mode");
let currMode = "light";
mod.onclick = () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".container").style.backgroundColor =
      "rgb(69, 69, 70)";
    document.querySelector("input").style.backgroundColor = "rgb(69, 69, 70)";
    document.querySelector("header").style.backgroundColor = "rgb(69, 69, 70)";
    document.querySelector("footer").style.backgroundColor = "rgb(69, 69, 70)";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "#e3f9e3";
    document.querySelector(".container").style.backgroundColor = "black";
    document.querySelector("input").style.backgroundColor = "black";
    document.querySelector("header").style.backgroundColor = "black";
    document.querySelector("footer").style.backgroundColor = "black";
  }
};
