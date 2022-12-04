const effect = document.querySelectorAll(".hover");
const fa = document.querySelectorAll("#fa")
// console.log(effect);
const logo = document.querySelector('.logo')

    for(let i=0; i<effect.length; i++){
        effect[i].addEventListener('mouseover' ,()=>{
            effect[i].style.backgroundColor = "lightgray"
        })
        effect[i].addEventListener('mouseleave' ,()=>{
            effect[i].style.backgroundColor = "white"
        })
           
    }

    for(let i=0; i<fa.length; i++){
        fa[i].addEventListener('mouseover' ,()=>{
            fa[i].style.backgroundColor = "lightgray"
        })
        fa[i].addEventListener('mouseleave' ,()=>{
            fa[i].style.backgroundColor = "white"
        })
           
    }
    
    logo.addEventListener('mouseover' ,()=>{
        logo.style.backgroundColor ='lightgrey'
    })
    logo.addEventListener('mouseleave' ,()=>{
        logo.style.backgroundColor ='white'
    })