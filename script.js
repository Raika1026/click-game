let score = 0;
let isPlaying = false;
let timeLeft = 10;

let clickButton = document.getElementById("click-button");

clickButton.addEventListener("click", function(){
    if(!isPlaying){
        return;
    }
    score++;
    document.getElementById("score-display").textContent = "スコア：" + score;
})

let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function(){
    if(isPlaying){
        return;
    }
    timeLeft = 10;
    score = 0;
    document.getElementById("score-display").textContent = "スコア：" + score;
    document.getElementById("time-display").textContent = "残り時間：" + timeLeft + "秒";
    document.getElementById("result-display").textContent = "";
    isPlaying = true;
    let timer = setInterval(function(){
    timeLeft--;
    document.getElementById("time-display").textContent = "残り時間：" + timeLeft + "秒";
    if(timeLeft <= 0){
        clearInterval(timer);
        isPlaying = false;
        document.getElementById("result-display").textContent = "ゲーム終了！あなたのスコアは" + score + "回です！";
    }
    },1000);
})