let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=> {
  passBox.value = generatePassword();
});

let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nums = "0123456789";
let symbol = "!£$%^&*@";

function generatePassword(){
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowerChar : "";
  allChars += uppercase.checked ? upperChar : "";
  allChars += numbers.checked ? nums : "";
  allChars += symbols.checked ? symbol : "";

  if(allChars == "" || allChars.length == 0){
    return genPassword;
  }

  let i = 1;
  while(i <= inputSlider.value){
    genPassword += allChars.at(Math.floor(Math.random() * allChars.length));
    i++;
  }
  
  return genPassword;
}

copyIcon.addEventListener('click', ()=> {
  if(passBox != "" || passBox.value.length >=6){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";

    setTimeout(()=>{
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 3500);
  }
  
});