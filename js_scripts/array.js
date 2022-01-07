// array can be declared in 2 ways either by [] or "new Array()"

s="hello"
s1=[];
let s2=["leo","lee","leed","leeds"]
s1.push(s1)

// to insert values to array when using new keyword

let arr1=new Array(12,24)
console.log(arr1)

for( let i=0;i<s.length;i++){
    document.write(s[i])
}
document.write(s1.values())
document.write("<br>")
document.write(s2)

for( let i of s2){
    console.log(i)
}
for(let j in s2){
    console.log(s2[j])
    console.log(j)
}

console.log(s2)
console.table(s2)
console.log(s2.pop())


// to add a element in the beginning use #unshift
s2.unshift("bvb")
console.log(s2)

// to pop element from first position
console.log(s2.shift())

// concat a new array

let s2_new=s2.concat(["psg","juv"])
console.log(s2_new)
console.log(s2.concat("leo"))
console.log(s2.pop(3))

// splice function can be used to add or remove from array from specific position
// here 3 specifies the position and 1 indicate how many letter we need to remove
console.log(s2_new.splice(3,1))
console.log(s2_new)
console.log(s2_new.push("juv"))
console.log(s2_new.pop(2))
console.log(s2_new)
s2_new.splice(1,2,"chel")
console.log(s2_new)

// to find the index of particular element in an array
console.log(s2_new.indexOf("chel"))

// includes function will check whether a element is present in array or not
console.log(s2_new.includes("chel"))

// to sort an array we can use sort() and to reverse an array we can use reverse()
console.log(s2_new.sort())
console.log(s2_new.reverse())

// join function is used to join an elements in an array by specific word
let s3=s2_new.join("_")
console.log(s3)


