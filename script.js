let Hitnum = 0;
let timer = 60;
let score = 0;



function makeBubble(){ 
    let clutter = ""; 
for (let i = 1; i <=77; i++) {
    let num = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${num}</div>`;

}
document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer(){
   let setTimer= setInterval(function(){
    if(timer >0){
        timer --;
        document.querySelector("#timerval").textContent = timer;
    } 
    else{
        clearInterval(setTimer)
        let panel = document.querySelector(".panel")
         panel.innerHTML  = `<h1>Game Over<h1>`
    }

    } ,1000)
}

 function getHit(){
    Hitnum = Math.floor(Math.random()*10)
    document.querySelector("#HitVal").textContent = Hitnum
 }
function increseScore(){
   score += 10;
   document.querySelector("#scoreval").textContent = score
    
}
document.querySelector(".panel")
.addEventListener("click",(e)=>{
let cliced = (Number(e.target.textContent));
if(cliced === Hitnum ){
    increseScore()
    makeBubble()
     getHit()
}   
})

makeBubble()
getHit()
runTimer()
