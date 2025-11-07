 let a=document.getElementById("first")
 let b=document.getElementById("second")
 let c=document.getElementById("third")
 let d=document.getElementById("forth")
 a.addEventListener("click",()=>{
   b.innerText="THE CORRECT ANSWER IS B"
   c.innerText="WRONG"
   d.innerText="WRONG"
   a.innerText="WRONG"
 })
 b.addEventListener("click",()=>{
    b.innerText="THE CORRECT ANSWER IS B"
   c.innerText="WRONG"
   d.innerText="WRONG"
   a.innerText="WRONG"
 })
 c.addEventListener("click",()=>{
    b.innerText="THE CORRECT ANSWER IS B"
   c.innerText="WRONG"
   d.innerText="WRONG"
   a.innerText="WRONG"
 })
 d.addEventListener("click",()=>{
    b.innerText="THE CORRECT ANSWER IS B"
   c.innerText="WRONG"
   d.innerText="WRONG"
   a.innerText="WRONG"
 })




let e=document.getElementById("one")
 let f=document.getElementById("two")
 let g=document.getElementById("three")
 let h=document.getElementById("four")
 f.addEventListener("click",()=>{
    
    f.innerText="WRONG"
    g.innerText="THE CORRECT ANSWER IS C"
    h.innerText="WRONG"
    e.innerText="WRONG"
 })
 e.addEventListener("click",()=>{
    
    f.innerText="WRONG"
    g.innerText="THE CORRECT ANSWER IS C"
    h.innerText="WRONG"
    e.innerText="WRONG"
 })
 h.addEventListener("click",()=>{
  
    f.innerText="WRONG"
    g.innerText="THE CORRECT ANSWER IS C"
    h.innerText="WRONG"
    e.innerText="WRONG"
 })

 g.addEventListener("click",()=>{
  
    f.innerText="WRONG"
    g.innerText="THE CORRECT ANSWER IS C"
    h.innerText="WRONG"
    e.innerText="WRONG"
 })




 let i=document.getElementById("five")
 let j=document.getElementById("six")
 let k=document.getElementById("seven")
 let l=document.getElementById("eight")
 i.addEventListener("click",()=>{
    
    i.innerText="WRONG"
    j.innerText="THE CORRECT ANSWER IS B"
    k.innerText="WRONG"
    l.innerText="WRONG"
 })
 j.addEventListener("click",()=>{
    
    i.innerText="WRONG"
    j.innerText="THE CORRECT ANSWER IS B"
    k.innerText="WRONG"
    l.innerText="WRONG"
 })
 k.addEventListener("click",()=>{
    
    i.innerText="WRONG"
    j.innerText="THE CORRECT ANSWER IS B"
    k.innerText="WRONG"
    l.innerText="WRONG"
 })
 l.addEventListener("click",()=>{
    
    i.innerText="WRONG"
    j.innerText="THE CORRECT ANSWER IS B"
    k.innerText="WRONG"
    l.innerText="WRONG"

 })

 let m=document.getElementById("nine")
 let n=document.getElementById("ten")
 let o=document.getElementById("eleven")
 let q=document.getElementById("twelve")
 m.addEventListener("click",()=>{
    
    n.innerText="WRONG"
    m.innerText="THE CORRECT ANSWER IS A"
    o.innerText="WRONG"
    q.innerText="WRONG"

 })

 n.addEventListener("click",()=>{
    
    n.innerText="WRONG"
    m.innerText="THE CORRECT ANSWER IS A"
    o.innerText="WRONG"
    q.innerText="WRONG"

 })
 o.addEventListener("click",()=>{
    
    n.innerText="WRONG"
    m.innerText="THE CORRECT ANSWER IS A"
    o.innerText="WRONG"
    q.innerText="WRONG"

 })
 q.addEventListener("click",()=>{
    
    n.innerText="WRONG"
    m.innerText="THE CORRECT ANSWER IS A"
    o.innerText="WRONG"
    q.innerText="WRONG"

 })
 

 let r=document.getElementById("thirteen")
 let s=document.getElementById("forteen")
 let t=document.getElementById("fiftheen")
 let u=document.getElementById("sixteen")
 r.addEventListener("click",()=>{
    
    r.innerText="WRONG"
    s.innerText="WRONG"
    t.innerText="WRONG"
    u.innerText="THE CORRECT ANSWER IS D"

 })

 s.addEventListener("click",()=>{
    
     r.innerText="WRONG"
    s.innerText="WRONG"
    t.innerText="WRONG"
    u.innerText="THE CORRECT ANSWER IS D"


 })
 t.addEventListener("click",()=>{
    
    r.innerText="WRONG"
    s.innerText="WRONG"
    t.innerText="WRONG"
    u.innerText="THE CORRECT ANSWER IS D"


 })
 u.addEventListener("click",()=>{
    
    r.innerText="WRONG"
    s.innerText="WRONG"
    t.innerText="WRONG"
    u.innerText="THE CORRECT ANSWER IS D"


 })

 
 let v=document.getElementById("seventeen")
 let w=document.getElementById("eighteen")
 let fif=document.getElementById("nineteen")
 let six=document.getElementById("twenty")
 v.addEventListener("click",()=>{
    
    v.innerText="WRONG"
    w.innerText="WRONG"
    fif.innerText="THE CORRECT ANSWER IS C"
    six.innerText="WRONG"

 })
  w.addEventListener("click",()=>{
    
    v.innerText="WRONG"
    w.innerText="WRONG"
    fif.innerText="THE CORRECT ANSWER IS C"
    six.innerText="WRONG"

 })
  fif.addEventListener("click",()=>{
    
    v.innerText="WRONG"
    w.innerText="WRONG"
    fif.innerText="THE CORRECT ANSWER IS C"
    six.innerText="WRONG"

 })
  six.addEventListener("click",()=>{
    
    v.innerText="WRONG"
    w.innerText="WRONG"
    fif.innerText="THE CORRECT ANSWER IS C"
    six.innerText="WRONG"

 })
 
 
 
 
 


















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