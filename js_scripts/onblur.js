
// if we use let it is local
// if we use var it will be global
for (let j=0;j<5;j++){
    document.write(j);
    document.write("<br>")
}
console.log(j)

function getName(){
    alert (document.getElementById("uname").value)
}
