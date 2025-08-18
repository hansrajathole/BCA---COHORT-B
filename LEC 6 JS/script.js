// HIGHER ORDER FUNCTION

// function fun() {
//     console.log("hello");
    
//     function sum(a,b) {
//         console.log(a+b);

//     }

    
//     return sum

// }


// let returnFun = fun()
// console.log("ha bhai kya hal chal");

// returnFun(10,20)



// IIFE


// (
//     function () {
//         console.log("sabhi log dhyan do bhai");
//         for(let i = 1 ; i<=10 ; i++){
//             console.log(i);
            
//         } 
//     }
// )();


// (
//     function () {
//         console.log("chala kya ");
        
//     }
// )()





// CLOSURES 


// function parent() {
//     let paisa = 100000
    
//     function child() {
//         console.log(paisa);
           
//     }

//     return child

// }

// let childFun = parent()
// childFun()




// Asynchronous

// console.log("hello");
// console.log("hira bete");
// setTimeout(()=>{
//     console.log("papa");
//     console.log("bolne lagi");
    
// },2000)

// console.log("abe jaldi bol");



// let timer = setInterval(()=>{
//     console.log("chalne lagi");
    
// },2000)


// setTimeout(()=>{
//     clearInterval(timer)
// },5000)