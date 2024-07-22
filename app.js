
    document.getElementById("rel").addEventListener("click",()=>{
        location.reload()
    })
    // document.getElementById("shu").addEventListener("click",()=>{


    
    // })
       var a;
      
       var aud1=document.getElementById("aud1");
        document.addEventListener("DOMContentLoaded", function() {
            create1()
        });
document.getElementById("mut").addEventListener("click",()=>{
    const audios = document.querySelectorAll("audio");
    
    for (let i = 0; i < audios.length; i++) {
        audios[i].muted = true;
    }
})
  
        function ply(){
      
            var aud=document.getElementById("aud");
            aud.play()
         document.getElementById("board1").style.display="none"
         a=setInterval(tim,1500)
        }
        
        
        var scr;
        var time
        time=60;
        var rand ;
        function tim(){
            document.getElementById("time").innerHTML=--time
            if(time <= 0){
                time=0;
                stop(a)
                document.getElementById("board").style.display="none"
                document.getElementById("board1").style.display="block"
                location.reload()
                
                return;
            }
            
            
        }
        // a=setInterval(tim,100)
        
const width = 8;
var arr = [];
var element = null
function create1() {
            scr=0
         
            var board = document.getElementById("board")
            for (let i = 0; i < width * width; i++) {
                var div = document.createElement("Div")
                div.className = "box"

                 rand = Math.ceil(Math.random() * 6)
                
                div.style.backgroundImage = `url("img/color\ \(${rand}\).png")`
                arr.push(div)
                board.append(div)
                div.addEventListener("dragstart", dragStart)
                div.addEventListener("dragover", dragOver)
                div.addEventListener("drop", drop)

            }
            check()
        }

        function dragStart(event) {
            element = event.target;
        }
        function dragOver(event) {
            event.preventDefault()
        }
        function drop(event) {
            event.preventDefault()
            var imgelemt = event.target;
            if (imgelemt && imgelemt.className === "box") {
                var dragimg = element.style.backgroundImage;
                element.style.backgroundImage = imgelemt.style.backgroundImage;
                imgelemt.style.backgroundImage = dragimg
                check()
            }

        }
        function check() {
            var flg = false
            for (let i = 0; i < width * width; i++) {
                if (i % width < width - 2) {
                    if (arr[i].style.backgroundImage === arr[i + 1].style.backgroundImage && arr[i].style.backgroundImage === arr[i + 2].style.backgroundImage) {
                        arr[i].style.backgroundImage = "none";
                        arr[i + 1].style.backgroundImage = "none";
                        arr[i + 2].style.backgroundImage = "none";
                        // refill()
                        flg = true
                        document.getElementById("score").innerHTML=scr++ + 1
                    }
                }
            }
            
            // aud1.play()
            for (let i = 0; i < width * (width - 2); i++) {

                if (arr[i].style.backgroundImage === arr[i + width].style.backgroundImage && arr[i].style.backgroundImage === arr[i + 2 * width].style.backgroundImage) {
                    arr[i].style.backgroundImage = "none";
                    arr[i + width].style.backgroundImage = "none";
                    arr[i + 2 * width].style.backgroundImage = "none";
                    // refill()
                    flg = true;
                    document.getElementById("score").innerHTML=scr++
                }
            }
            if (flg) {
                setTimeout(refill, 100)
                // aud1.play()
            }
        }
        function refill() {
            for (let i = 0; i < width * width; i++) {
                var rand = Math.ceil(Math.random() * 6)
                if (arr[i].style.backgroundImage === "none") {
                    arr[i].classList.add("flow")
                    arr[i].style.backgroundImage = `url("img/color (${rand}).png")`
                    arr[i].addEventListener('animationend', () => {
                arr[i].classList.remove('flow');
            });
                }
            }
            setTimeout(check, 10)

        }
     
    

