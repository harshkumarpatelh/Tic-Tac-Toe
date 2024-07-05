let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let messagebox = document.querySelector(".message");




let turnO = true;
let draw = false;
const winPattern = [
    [0,1,2],
    [0,3,6],    
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        draw = checkWinner();
        if(!draw)
            checkDraw();
    });
});

//console.log(boxes[2]);

const checkDraw = ()=>{
    for(let box of boxes){
        if(box.innerText === "")
            return;
    }

    messagebox.innerText = "Draw";
    messagebox.classList.remove("messagehide");
    resetbtn.innerText = "New Game";

}
function checkWinner(){
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos3val === pos2val){
                showWinner(pos1val);
                return true;
            }
        }
    }

    return false;
}

const showWinner = (winner)=>{
    messagebox.innerText = `Congratulation!! Winner is ${winner}`;
    messagebox.classList.remove("messagehide");
    disableBoxes();
    resetbtn.innerText = "New Game";
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
resetbtn.onclick = ()=>{
    boxes.forEach((box)=>{
        turnO = true;
        box.innerText = "";
        box.disabled = false;
    })

    messagebox.classList.add("messagehide");
    resetbtn.innerText = "Reset Game";
};