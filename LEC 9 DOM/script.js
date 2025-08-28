

let btn = document.querySelector("button")
let para = document.querySelector("p")
// let body = document.querySelector("body")


// btn.addEventListener("click", ()=>{
//     let img = document.createElement("img")

//     let imgSrc = "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     img.setAttribute("src",imgSrc)


//     let top = Math.random()*90
//     let left = Math.random()*90

//     img.style.position = "absolute"
//     img.style.top = top+"%"
//     img.style.left = left+"%"

//     // body.append(img)
//     // body.appendChild(img)
  
//     body.innerHTML += `<div>
//     <img src="${imgSrc}" alt="">
//     </div>`
//     // body.appendChild(img)

    
// })



btn.addEventListener("click", ()=>{
    // para.remove()
    let b = document.querySelector("b")
    let h2 = document.querySelector("h2")
    let p = document.querySelector("p")
    let small = document.createElement("small")
    small.innerText = "ruko jara"
    // h2.removeChild(p)
    h2.replaceChild(small , p)
})