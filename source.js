const board = document.querySelector('.mainBoard');
for (let row =0; row < 8; row++){
let boxColor;
let boxStartColorWhite = row % 2 === 0? true : false;
for(let col = 0; col < 8; col++){
    if(boxStartColorWhite){
 boxColor = col % 2=== 0? '#f5f5f5':'#93C572';
    }
   else{
   boxColor = col % 2 === 0? '#93C572': '#f5f5f5';
   }

const box = document.createElement('div');
box.style.width = board.clientWidth / 8 + 'px';
box.style.height = board.clientHeight / 8 + 'px';
box.style.backgroundColor = boxColor;
board.append(box);
if(row == 6){
   const img = document.createElement('img');
   img.src = "pawnWhite.png";
   box.appendChild(img);
img.addEventListener("click", () => {
    img.remove();
 });
}
// white//
if(row == 7 && col==0 || row==7 && col==7){
   const img = document.createElement('img');
   img.src = "elephantWhite.png";
box.appendChild(img);
}
if(row == 7 && col==1 || row==7 && col==6){
   const img = document.createElement('img');
   img.src = "horseWhite.png";
box.appendChild(img);
}
if(row == 7 && col==2 || row==7 && col==5){
   const img = document.createElement('img');
   img.src = "bishopWhite.png";
box.appendChild(img);
}
if(row == 7 && col==3 ){
   const img = document.createElement('img');
   img.src = "queenWhite.png";
box.appendChild(img);
}
if(row == 7 && col==4){
   const img = document.createElement('img');
   img.src = "kingWhite.png";
box.appendChild(img);
}
// black//
if(row == 1){
   const img = document.createElement('img');
   img.src = "pawnBlack.png";
box.appendChild(img);
}
if(row == 0 && col==0 || row==0 && col==7){
   const img = document.createElement('img');
   img.src = "elephantBlack.png";
box.appendChild(img);
}
if(row == 0 && col==1 || row==0 && col==6){
   const img = document.createElement('img');
   img.src = "horseBlack.png";
box.appendChild(img);
}
if(row == 0 && col==2 || row==0 && col==5){
   const img = document.createElement('img');
   img.src = "bishopBlack.png";
box.appendChild(img);
}
if(row == 0 && col==3){
   const img = document.createElement('img');
   img.src = "kingBlack.png";
box.appendChild(img);
}
if(row == 0 && col==4){
   const img = document.createElement('img');
   img.src = "queenBlack.png";
box.appendChild(img);
}
}
}