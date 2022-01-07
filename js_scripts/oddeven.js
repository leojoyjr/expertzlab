num=prompt("enter your number")

function isEven(){
    if ((num%2)==0) {
        return true
    }
    else{
        return false
    }
}
let eo= isEven()
document.write(eo)