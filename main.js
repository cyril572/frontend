let x=document.getElementById("dark")
  let y=  document.getElementById("light")
  let z=document.getElementById("change")
  let p=document.getElementById("wee")
  
x.addEventListener('click',()=>{
    document.body.classList.toggle("black")
    if(document.body.classList.contains("black")){
        z.innerText="light mode"
        p.src="star-fill (1).svg"
    }
    else{
        z.innerText="dark mode"
        p.src="emoji-sunglasses.svg"
    }
  
})