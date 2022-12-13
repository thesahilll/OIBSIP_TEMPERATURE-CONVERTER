let c = document.getElementById("c")
let f = document.getElementById("f")
let k = document.getElementById("k")

let cv = 0 ;
let fv = 32;
let kv = 273;

function render() {

    if(cv < -273){
        alert("YOu are out of bounds!");
        return;
    }

    c.value = cv;
    f.value = fv;
    k.value = kv;
}

c.addEventListener("input", (e) => {
    if(e.target.value == ""){
        return;
    }

    cv = Number(e.target.value);
    fv = cv * 9 /5 + 32;
    kv = cv + 273;
    render();
})
f.addEventListener("input", (e) => {
    if(e.target.value == ""){
        return;
    }
    fv = Number(e.target.value);
    cv = (fv - 32) * 5 /  9;
    kv = cv + 273;
    render();
})
k.addEventListener("input", (e) => {
    kv = Number(e.target.value);
    cv = kv - 273;
    fv = cv * 9 /5 + 32;
    render();
})


render();