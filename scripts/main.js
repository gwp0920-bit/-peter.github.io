// const myHeading = document.querySelector("h1");
// myHeading.textContent ="Hello world!";


/*
这里的所有内容都是注释。
let myVariable = '鲍勃';  --字符串
let myVariable = "鲍勃";  
let myVariable = 10; --数字
let myVariable = true;  --布尔
let myVariable = [1,'鲍勃','斯蒂夫',10];  --数组
let myVariable = document.querySelector('h1');  --对象
*/

// 这是注释。

// let iceCream="chocolate";
// if(iceCream==="chocolate"){
//     alert("我最喜欢巧克力冰淇淋了！");  // 这是提醒
// }else{
//     alert("但是巧克力才是我的最爱呀……");
// }

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// multiply(3,5);
// console.log(multiply);

// document.querySelector("html").addEventListener("click", () => {
//   alert("别戳我，我怕疼！");
// });



const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};



let myButton =document.querySelector("button");
let myHeading =document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName)
        myHeading.textContent=`Mozilla is cool,${myName}`;  // 只有``会解析$的内容，JS 普通字符串，**不会解析 `${变量}`**
    }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick=function(){
    setUserName();
};