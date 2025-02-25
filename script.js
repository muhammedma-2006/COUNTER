const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countLabel = document.getElementById("countLabel");

let count = 0;
countLabel.textContent = 0;
increasebtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreasebtn.onclick = function(){
     if( countLabel.value <= 0){
        countLabel.textContent = 0;
    
    }
    else{
    count--;
    countLabel.textContent = count;
    }

}

resetbtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
