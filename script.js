let a = document.querySelector("#input");
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
            console.log("sher");
})
a.addEventListener("keydown",function(val){
    if(val.key === "Enter"){
        btn.click();
        let g = a.value
        a.value = ""
        let f = document.createElement("a");
        f.href = `https://amazon.com/${g}`;
        f.click();
    };
});
let count = 0;
window.addEventListener("wheel",function(){
    count++
    if(count == 1){
        alert("Don't scroll");
    }
    if(count == 2){
        alert("why??")
    }
    if(count == 3){
        alert("Last warning!")
    }
    if(count == 4){
        alert("Ok in 5 sec i will redirected you to your favourate place")
        let nums = 6
        let h11 = document.querySelector("#sh")
        let gt = setInterval(function(){
            nums--
            h11.style.display = "initial"
            h11.textContent = nums
            if(nums === 0){
                let ans = prompt("Tell the code")
                if(ans !== "sher"){
                    clearInterval(gt)
                    let h = document.createElement("a")
                    h.href ="https://youtube.com/cocomelon"
                    h.click();
                    h11.style.display = "none";
                }
                else{
                    alert("You save your life from cocomelon 👿,Hurray🥳😎")
                    clearInterval(gt);
                    h11.style.display = "none";
                }
            }  
        },1000) 
    }
    }
    
)

// #center > yt-searchbox > div.ytSearchboxComponentInputWrapper > div > div