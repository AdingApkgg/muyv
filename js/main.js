var muyvImg = document.getElementById("muyvImg");
var muyvNumSpan = document.getElementById("spanTag");
var gongDePlus = document.getElementById("gongDePlus");
var muyvAudio = new Audio();
var muyvAudioSrcTemp = 0;

muyvAudio.src = muyvAudio02;
muyvNumSpan.innerText = 0;

function muyvAudioFunction() {
  var muyvAudioVar = new Audio(muyvAudio.src);
  muyvAudioVar.play();
  muyvNumSpan.innerText++;
  gongDePlus.innerHTML += "<p id='gongDePlusText'>功德+1</p>";
  setTimeout(function () {
    gongDePlus.innerHTML = "";
  }, 1500);
}

var muyvAudioFunctionSetInterval;

function srartMuyvAudioFunctionSetInterval() {
  muyvAudioFunctionSetInterval = setInterval(muyvAudioFunction, 1000);
}

function changeAudio(changeAudioNum) {
  switch (changeAudioNum) {
    case 1:
      muyvAudio.src = muyvAudio01;
      alert("已切换至浓厚音效");
      break;
    case 2:
      muyvAudio.src = muyvAudio02;
      alert("已切换至清脆音效");
      break;
    case 3:
      muyvAudio.src = ikunAudio01;
      alert("已切换至珍癌粉音效");
      break;
    default:
      alert("音效切换错误，请刷新重试");
      break;
  }
  var muyvAudioVar = new Audio(muyvAudio.src);
  muyvAudioVar.play();
  muyvNumSpan.innerText -= 20;
}

function GautamaLaugh() {
  var GautamaLaughAudioVar = new Audio(GautamaLaughAudio);
  GautamaLaughAudioVar.play();
  muyvNumSpan.innerText -= 60;
}

var autoTimerClick;
var autoTimerClickTemp = false;

function autoClick() {
  if (autoTimerClickTemp == false) {
    autoTimerClick = setInterval(function () {
      muyvAudioFunction();
    }, 1500);
    autoTimerClickTemp = true;
    alert("已启用自动敲击");
  } else if (autoTimerClickTemp == true) {
    clearInterval(autoTimerClick);
    autoTimerClickTemp = false;
    alert("已禁用自动敲击");
  }
}

muyvImg.addEventListener("click", muyvAudioFunction);

document.addEventListener("keydown", function (event) {
  if (
    event.code === "Enter" ||
    event.code === "Space" ||
    event.code === "NumpadEnter"
  ) {
    muyvAudioFunction();
  }
});

const lightOrDarkModelBtn = document.getElementById("lightOrDarkModelBtn");
const lightOrDarkIcon = document.getElementById("lightOrDarkIcon");

function lightOrDarkModel() {
  if (document.body.getAttribute("data-theme") == "light") {
    document.body.removeAttribute("data-theme", "light");
    document.body.setAttribute("data-theme", "dark");
    muyvImg.removeAttribute("style", "filter: invert(100%);");
    muyvImg.setAttribute("style", "filter: invert(0%);");
    lightOrDarkIcon.className = "fa fa-moon-o";
  } else if (document.body.getAttribute("data-theme") == "dark") {
    document.body.removeAttribute("data-theme", "dark");
    document.body.setAttribute("data-theme", "light");
    muyvImg.removeAttribute("style", "filter: invert(0%);");
    muyvImg.setAttribute("style", "filter: invert(100%);");
    lightOrDarkIcon.className = "fa fa-sun-o";
  }
}

lightOrDarkModelBtn.addEventListener("click", lightOrDarkModel);
var settingsBoxDisplayTemp = 0;
function settingsBoxDisplay() {
  var settingsBox = document.getElementById("settingsBox");
  var divMask = document.getElementById("mask");
  if (settingsBoxDisplayTemp == 0) {
    settingsBox.style.cssText = "display: block;";
    divMask.style.cssText = "display: block;";
    settingsBoxDisplayTemp = 1;
  } else if (settingsBoxDisplayTemp == 1) {
    settingsBox.style.cssText = "display: none;";
    divMask.style.cssText = "display: none;";
    settingsBoxDisplayTemp = 0;
  }
}
