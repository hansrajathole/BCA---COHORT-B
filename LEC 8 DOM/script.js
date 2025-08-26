

// let para = document.querySelector("p")

// console.log(para.innerText);
// console.log(para.textContent);
// console.log(para.innerHTML);


// para.innerText = "hello"
// let username = "Payal"
// para.innerHTML = `<h2>Hello ${username}</h2>`;
// para.innerText = `<h2>Hello ${username}</h2>`;

// console.log(para);


// para.style.backgroundColor = "red"
// para.style.color = "white"

// para.classList.add("paro")
// para.classList.add("pari")
// para.classList.remove("pari")


// para.classList.toggle("paro")
// console.log(para);



let btn = document.querySelector("button")
let light = document.querySelector(".light")
let isOn = false

btn.addEventListener("dblclick", ()=>{
    if(isOn){
        light.style.backgroundColor = "white"
        btn.innerText = "On"
        isOn = !isOn
    }else {
        light.style.backgroundColor = "yellow"
        btn.innerText = "Off"
        isOn = !isOn
    }
})