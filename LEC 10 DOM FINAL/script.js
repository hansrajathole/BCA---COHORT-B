

// let img = document.querySelector("img")
// let imgScr = "https://images.unsplash.com/photo-1755542366797-b3f036b11310?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"
// img.setAttribute("src",imgScr)

// // img.removeAttribute("src")

// let box = document.querySelector(".box")

// console.log(box.getAttribute("class"));

// img.src = imgScr
// img.id = "image"
// img.class = "image"

// console.log(img);


let inp = document.querySelector("input")


inp.addEventListener("keypress",(event)=>{
    console.log(event.target.value);
    console.log(inp.children);
    
})

let form = document.querySelector("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
})