let count = 0;
let addCount = document.getElementById("add-btn");
let saveCount = document.getElementById("save-btn")

function elango(){
    count++;
    addCount.innerText = count
    console.log(count);
}

function save(){
    let counts = "<br>"+ count 
    saveCount.innerHTML += counts;
    count = 0;
    console.log(count);
}
console.log(count);

