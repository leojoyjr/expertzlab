num1=prompt("enter your first number")
num2=prompt("enter your second number")
num3=prompt("enter your third number")

function avg(num1,num2,num3){
    sum=num1+num2+num3
    average=sum/3
    return average
}

let average1=avg(num1,num2,num3)
document.write(average1)
