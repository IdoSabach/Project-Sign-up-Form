let curser = document.querySelector(".curser");
document.addEventListener("mouseover", function (e) {
  let x = e.clientX;
  let y = e.clientY;

  curser.style.left = x + "px";
  curser.style.top = y + "px";
});

const contain = document.querySelector(".contain");

function createRow(nameRow,parent,num){
  const row = document.createElement("div");
  row.classList.add(nameRow);
  parent.appendChild(row);
  for (let i = 0; i < num; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    row.appendChild(box);
  }
}

createRow("row-one",contain,50)

for(let i =0 ; i<17 ; i++){
  createRow("row-even",contain,50)
  createRow("row-not-even",contain,50)
}

