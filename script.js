//MultiRangeSlider script
let inputLeft = document.querySelector("#inputLeft");
let inputRight = document.querySelector("#inputRight");
let thumbLeft = document.querySelector(".slider>.thumb.left");
let thumbRight = document.querySelector(".slider>.thumb.right");
let range = document.querySelector(".slider>.range");
//Setting range and thumbs left + right
function setLeftValue() {
  let _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);
  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
  let percent = ((_this.value - min) / (max - min)) * 100;
  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}
setLeftValue();
function setRightValue() {
  let _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);
  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
  let percent = ((_this.value - min) / (max - min)) * 100;
  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
}
setRightValue();
//EventListeners:
inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);
//Min, max values displaying in HTML page
ValueMin = document.querySelector("#ValueMin");
ValueMax = document.querySelector("#ValueMax");
ValueMin.innerHTML = inputLeft.value;
ValueMax.innerHTML = inputRight.value;
function values() {
  inputLeft.oninput = function () {
    ValueMin.innerHTML = inputLeft.value;
  };
  inputRight.oninput = function () {
    ValueMax.innerHTML = inputRight.value;
  };
}
values();
//Printing initial values in the console
console.log(
  47,
  "Initial values: inputLeft:",
  inputLeft.value,
  "inputRight:",
  inputRight.value
);
//Printing current values - left value [in the console]
$("#inputLeft").on("input", function () {
  setTimeout(function () {
    console.log(
      57,
      "inputLeft:",
      inputLeft.value,
      "inputRight:",
      inputRight.value
    );
  }, 1500);
});
//Printing current values - right value [in the console]
$("#inputRight").on("input", function () {
  setTimeout(function () {
    console.log(
      69,
      "inputLeft:",
      inputLeft.value,
      "inputRight:",
      inputRight.value
    );
  }, 1500);
});

//Gettin a random integer - password length between min and max [inclusive]
passwordLength = document.querySelector("#passLength");
function getRandomInteger() {
  console.log(81, "Range values:", inputLeft.value, inputRight.value);
  minR = Math.ceil(inputLeft.value);
  maxR = Math.floor(inputRight.value);
  console.log(84, "minR, maxR values:", minR, maxR);
  randomInteger = Math.floor(Math.random() * (maxR - minR + 1) + minR);
  console.log(86, "randomInteger:", randomInteger, typeof randomInteger);
  passwordLength.value = randomInteger;
  document.querySelector("#password").value = "";
}
//Clearing generated length of the password by thums
function clearingValue() {
  passwordLength.value = null;
  console.log(93, "passwordLength cleared");
}

// Fetching data from www.random.org + refreshing string
function fetchingData() {
  fetch(
    "https://www.random.org/strings/?num=15&len=17&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new"
  )
    .then((response) => response.text())
    .then((data) => {
      // console.log(103, typeof data, data);  //For testing only
      let dataLong = data.replace(/(\r\n|\n|\r)/gm, "");
      console.log(105, typeof dataLong, dataLong.length, dataLong);
      document.querySelector("#randomString").value = dataLong;
    });
  document.querySelector("#password").value = "";
}
fetchingData(); //Temporarily switch off fetchting random data
//Refreshing string
function refreshString() {
  fetchingData();
}

//Generating a random string
function generatePasswordtoShuffle() {
  let passLength = passwordLength.value;
  if (passLength < 8) {
    passLength = 8;
    passwordLength.value = 8;
  }
  let passString = document.querySelector("#randomString").value;
  console.log(124, "current pas, length:", passLength, passString);
  let specjalsSings = "!@#$%^&*()-_=+|]}[{?/.>,<:";
  //Declaring initial password
  let passwordString = "";
  let passwordSpecjals = "";
  let passwordTemp = "";
  let passwordToShuffle = "";
  //Setting DOM variables
  let capital = document.querySelector("#capital");
  let specjals = document.querySelector("#specjals");
  //Generating a password
  if (!capital.checked) {
    passString = passString.toLowerCase();
    console.log(137, "lower-case-string:", passString);
  }
  if (specjals.checked) {
    for (let i = 0; i < passLength; i++) {
      let rndSpec = Math.floor(Math.random() * specjalsSings.length);
      passwordSpecjals += specjalsSings.substring(rndSpec, rndSpec + 1);
    }
    console.log(
      145,
      "passwordSpecjals:",
      passwordSpecjals,
      passwordSpecjals.length
    );
  }
  for (let i = 0; i < passLength * 3; i++) {
    let rndStr = Math.floor(Math.random() * passString.length);
    passwordString += passString.substring(rndStr, rndStr + 1);
  }
  console.log(155, "passwordString:", passwordString, passwordString.length);
  //Temporary password
  passwordTemp = passwordString.concat(passwordSpecjals);
  console.log(158, passwordTemp, passwordTemp.length);
  //Password to shuffle
  for (let i = 0; i < passLength; i++) {
    let rndPass = Math.floor(Math.random() * passwordTemp.length);
    passwordToShuffle += passwordTemp.substring(rndPass, rndPass + 1);
  }
  console.log(164, passwordToShuffle, passwordToShuffle.length);
  return passwordToShuffle;
}
// Shuffle method toggle switch + switching colors for Blondes :)
const FisherYates = document.querySelector("#Fisher–Yates");
const Sattolo = document.querySelector("#Sattolo");
const algorithmSwitcher = document.querySelector("#algorithmSwitcher");
if (!algorithmSwitcher.checked) {
  Sattolo.style.color = "black";
  FisherYates.style.color = "purple";
} else {
  Sattolo.style.color = "blueviolet";
  FisherYates.style.color = "black";
}
console.log(178, "algorithmSwitcher-checked:", algorithmSwitcher.checked);
console.log(
  180,
  "algorithmSwitcher.getAttribute(method)",
  algorithmSwitcher.getAttribute("method")
);
algorithmSwitcher.addEventListener("change", function () {
  if (this.checked) {
    algorithmSwitcher.setAttribute("method", "Sattolo");
    console.log(187, "algorithmSwitcher is checked; Sattolo cycle");
    Sattolo.style.color = "blueviolet";
    FisherYates.style.color = "grey";
  } else {
    algorithmSwitcher.setAttribute("method", "Fisher");
    console.log(192, "algorithmSwitcher is not checked; Fisher-Yates shuffle");
    Sattolo.style.color = "grey";
    FisherYates.style.color = "purple";
  }
});
//Shuffling the password
const passwordShuffle = () => {
  const shufflingPassword = generatePasswordtoShuffle();
  console.log(200, shufflingPassword, shufflingPassword.length);
  password = Array.from(shufflingPassword);
  console.log(202, "Original password:", password);
  if (algorithmSwitcher.checked) {
    function sattoloCycle(password) {
      for (let i = password.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let tmp = password[i];
        password[i] = password[j];
        password[j] = tmp;
      }
      return password;
    }
    shuffledPassword = sattoloCycle(password);
    console.log(214, shuffledPassword, "Sattolo cycle");
    return shuffledPassword;
  } else if (!algorithmSwitcher.checked) {
    function knuthShuffle(password) {
      let rand, temp, i;
      for (i = password.length - 1; i > 0; i -= 1) {
        rand = Math.floor((i + 1) * Math.random()); //get random between 0 and i (inclusive)
        temp = password[rand]; //swap i and the zero-indexed number
        password[rand] = password[i];
        password[i] = temp;
      }
      return password;
    }
    shuffledPassword = knuthShuffle(password);
    console.log(228, shuffledPassword, "Fisher-Yates shuffle");
    return shuffledPassword;
  }
};
//Displaying the password
const displayPassword = () => {
  document.querySelector("#password").value = "";
  const passwordToDisplay = passwordShuffle();
  const passwordDisplayed = passwordToDisplay.join("");
  console.log(237, "passwordDisplayed:", passwordDisplayed);
  setTimeout(function () {
    document.querySelector("#password").value = passwordDisplayed;
  }, 500);
};
//Copying to clipboard function
function copyPassword() {
  const copyText = document.querySelector("#password");
  const copyButton = document.querySelector("#copyButton");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  copyButton.value = "Password was copied!";
  copyButton.classList.remove("toChange");
  copyButton.classList.add("changed");
  alert("Password was copied: " + copyText.value);
  copyText.setSelectionRange(0, 0);
  console.log(254, "Password was copied:", copyText.value);
  setTimeout(function () {
    copyButton.value = "Copy the password";
    copyButton.classList.add("toChange");
    copyButton.classList.remove("changed");
    console.log(259, "That's all so far...");
  }, 1000);
}
