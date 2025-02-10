const counterDisplay=document.querySelector("h3");

let counter=0;

const bubbleMaker = ()=>{

    
const bubble=document.createElement('span');
bubble.classList.add("bubble")
document.body.appendChild(bubble);

let size=Math.random()*150+70 +"px";
bubble.style.height=size;
bubble.style.width=size;
bubble.style.top=Math.random()*100 +50+ "%";bubble.style.left=Math.random()*100 + "%";
const plusMinus=Math.random()>0.5 ? 1:-1;
bubble.style.setProperty("--left", Math.random()*100*plusMinus + "%");

bubble.addEventListener("click", ()=>{
    counter++
    counterDisplay.textContent=counter++;
    bubble.remove()

})

setTimeout(()=>{
    bubble.remove()
}, 3000)


}

setInterval((bubbleMaker),1000);


