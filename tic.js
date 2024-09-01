let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
enableboxes();
msgcontainer.classList.add("hide");
draw = 0

}

let draw = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        draw += 1
        console.log(draw)


        win();
    });
});
 

const disableboxes = () =>{
    for (let box of boxes){
        box.disabled = true
    
    }
}


const enableboxes = () =>{
    for (let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}
const showwinner = (winner) => {
    if(draw === 9){
        msg.innerHTML = `OOPs DRAW...`
    }
    else{
        msg.innerHTML = `Congratulation, "${winner}" you are a winner`
    }
    msgcontainer.classList.remove("hide");
        disableboxes();
   
};

const win = () => {
    for (let win of winpattern) {
        let p1val = boxes[win[0]].innerText;
        let p2val = boxes[win[1]].innerText;
        let p3val = boxes[win[2]].innerText;

        if (p1val !== "" && p2val !== "" && p3val !== "")
            if (p1val === p2val && p2val === p3val) {
                showwinner(p1val);
            }
    }
};


newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);


