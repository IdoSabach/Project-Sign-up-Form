let curser = document.querySelector(".curser");
document.addEventListener("mouseover", function (e) {
  let x = e.clientX;
  let y = e.clientY;

  curser.style.left = x + "px";
  curser.style.top = y + "px";
});

const contain = document.querySelector(".contain");

function rowOneF() {
  const rowOne = document.createElement("div");
  rowOne.classList.add("row-one");
  contain.appendChild(rowOne);
  for (let i = 0; i < 50; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    rowOne.appendChild(box);
  }
}

function rowEvenF() {
  const rowEven = document.createElement("div");
  rowEven.classList.add("row-even");
  contain.appendChild(rowEven);
  for (let i = 0; i < 50; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    rowEven.appendChild(box);
  }
}

function rowNotEvenF() {
  const rowNotEven = document.createElement("div");
  rowNotEven.classList.add("row-not-even");
  contain.appendChild(rowNotEven);
  for (let i = 0; i < 50; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    rowNotEven.appendChild(box);
  }
}

rowOneF();
for (let i = 0; i < 17; i++) {
  rowEvenF();
  rowNotEvenF();
}

