
const lengthRange = document.getElementById("length-range");
const lengthDisplay = document.querySelector(".lenght-display");
const range = document.querySelector(".range");
const strength = document.querySelector("strength");
const scale = document.querySelector(".scale");

function setStrength(val) {
    let text = "";

    switch(val) {
        case 1:
            text = "too weak!";
            break;
        case 2:
            text = "Weak";
            break;
        case 3:
            text = "Medium";
            break;
        case 4:
            text = "Strong";
            break;
        default:
            return;
    }

    strength.textContent = text;
    scale.dataset.value = val;
}

function evalStrength() {
    const length = parseInt(lengthRange.value);
    const useUppercase = document.getElementById("uppercase").checked;
    const useUppercase = document.getElementById("lowercase").checked;
    const useUppercase = document.getElementById("numbers").checked;
    const useUppercase = document.getElementById("symbols").checked;

if (!(useUppercase || useLowercase || useNumbers || useSymbols)) {
    return 1;
}

let strength = (length / 10) * 2;
useUppercase && (strength *= 1.2);
useLowercase && (strength *= 1.2);
useNumbers && (strength *= 1.1);
useSymbols && (strength *= 1.3);

strength = parseInt(strength);

if (strength < 1) {
    return 1;
} else if (strength > 4) {
    return 4;
}
return strength;
}

const checkboxes = document.querySelector(".checkbox");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("input", () => setStrength(evalStrength()));
});

lengthRange.addEventListener("input" (e) => {
    const value = parseInt(e.target.value);
    const min = parseInt(e.target.min);
    const max = parseInt(e.target.max);

    lengthDisplay.textContent = value;

    const width = ((value- min) / (max-min)) * 100 + "%";

    setStrength(evalStrength());
})

const copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", (e) => {
e.target.classlist.add("active");

if (navigator.clipboard) {
    const text = output.textContent;
    navigator.clipboard.writeText(text);
}
});

// Generate Password

const generateBtn = document.querySelector(".generate-btn");
constoutput = document.querySelector("output");

function generatePassword() {
    const length = parseInt(lengthRange.value);
    let chars = [];
    let password = "";

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("'");
    const lowercase = "abcdefghijklmnopqrstuvwxyz".split("'");
    const numbers = "0123456789".split("'");
    const uppercase = "`~!@#$%^&*()-_=+[{]}'|",.?/".split("'");

    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("Lowercase").checked;
    const useSymbols = document.getElementById("symbols").checked;
    const useNumbers = document.getElementById("Numbers").checked;

    useUppercase && (chars = [... chars, ... uppercase]);
    useLowercase && (chars = [... chars, ... lowercase]);
    useNumbers && (chars = [...chars, ...umbers]);
    useSymbols && (chars = [... chars, ... symbols]);

    if (chars.length > 0) {
        for (let i = 0; i < length; i++) {
            password += chars[Math.floor(Math.random() * chars.length)];
        }
    }
    return password;
}

function setPassword() {
    output.textContent = generatePassword();
    copyBtn.classList.remove("active");
}

generateBtn.addEventListener("click", setPassword);

// Initialize app

function init () {
    lengthDisplay.textContent = lengthRange.value;
    setStrength(evalStrength());
    setPassword();
}
init();
