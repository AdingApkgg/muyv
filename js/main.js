const muyvImg = document.getElementById("muyvImg");
const muyvNumSpan = document.getElementById("spanTag");
const muyvAudio = new Audio();
let gongDeSum = parseInt(muyvNumSpan.innerText);
let gongDeSumUp = 1;
let gongDeSumUpTemp = 0;
muyvAudio.src = muyvAudio02;

function getLocalStorage(key, defaultValue = 0) {
  const value = localStorage.getItem(key);
  return value ? parseInt(value) : defaultValue;
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

gongDeSum = getLocalStorage("muyvNumSpan");
muyvNumSpan.innerText = gongDeSum;

function gongDeSumUpPlus() {
  gongDeSumUpTemp += gongDeSumUp;
  if (gongDeSumUpTemp >= 20) {
    gongDeSumUp = gongDeSumUpTemp === 20 ? 20 : 1;
    gongDeSumUpTemp = gongDeSumUp === 1 ? 0 : gongDeSumUpTemp;
  }
}

function muyvAudioFunction() {
  const muyvAudioVar = new Audio(muyvAudio.src);
  muyvAudioVar.play();
  gongDeSum += gongDeSumUp;
  muyvNumSpan.innerText = gongDeSum;
  gongDeSumUpPlus();
  setLocalStorage("muyvNumSpan", gongDeSum);

  const text = document.createElement("div");
  text.textContent = "功德+" + gongDeSumUp;
  text.classList.add("floating-text");
  text.style.left = event.clientX - 20 + "px";
  text.style.top = event.clientY - 30 + "px";
  document.body.appendChild(text);

  const animation = text.animate(
    [
      { opacity: 1, top: text.offsetTop + "px" },
      { opacity: 0, top: text.offsetTop - 160 + "px" },
    ],
    { duration: 800 }
  );
  animation.onfinish = () => text.remove();
}

function changeAudio(changeAudioNum) {
  const audioMap = {
    1: { src: muyvAudio01, message: "已切换至浓厚音效" },
    2: { src: muyvAudio02, message: "已切换至清脆音效" },
    3: { src: ikunAudio01, message: "已切换至珍癌粉音效" },
    4: { src: cialloAudio01, message: "Ciallo～(∠·ω< )⌒★" },
  };

  const audio = audioMap[changeAudioNum];
  if (audio) {
    muyvAudio.src = audio.src;
    alert(audio.message);
    const muyvAudioVar = new Audio(muyvAudio.src);
    muyvAudioVar.play();
    gongDeSum -= 20;
    setLocalStorage("muyvNumSpan", gongDeSum);
    muyvNumSpan.innerText = gongDeSum;
  } else {
    alert("音效切换错误，请刷新重试");
  }
}

function GautamaLaugh() {
  const GautamaLaughAudioVar = new Audio(GautamaLaughAudio);
  GautamaLaughAudioVar.play();
  gongDeSum -= 60;
  setLocalStorage("muyvNumSpan", gongDeSum);
  muyvNumSpan.innerText = gongDeSum;
}

let autoTimerClick;
let autoTimerClickTemp = false;

function autoClick() {
  if (!autoTimerClickTemp) {
    autoTimerClick = setInterval(muyvAudioFunction, 1500);
    autoTimerClickTemp = true;
    alert("已启用自动敲击");
  } else {
    clearInterval(autoTimerClick);
    autoTimerClickTemp = false;
    alert("已禁用自动敲击");
  }
}

document.addEventListener("keydown", function (event) {
  if (["Enter", "Space", "NumpadEnter"].includes(event.code)) {
    muyvAudioFunction();
  }
});

const lightOrDarkModelBtn = document.getElementById("lightOrDarkModelBtn");
const lightOrDarkIcon = document.getElementById("lightOrDarkIcon");

function lightOrDarkModel() {
  const isLight = document.body.getAttribute("data-theme") === "light";
  document.body.setAttribute("data-theme", isLight ? "dark" : "light");
  muyvImg.style.filter = isLight ? "invert(0%)" : "invert(100%)";
  lightOrDarkIcon.className = isLight ? "fa fa-moon-o" : "fa fa-sun-o";
}

let settingsBoxDisplayTemp = 0;

function settingsBoxDisplay() {
  const settingsBox = document.getElementById("settingsBox");
  const divMask = document.getElementById("mask");
  const displayStyle = settingsBoxDisplayTemp === 0 ? "block" : "none";
  settingsBox.style.display = displayStyle;
  divMask.style.display = displayStyle;
  settingsBoxDisplayTemp = 1 - settingsBoxDisplayTemp;
}