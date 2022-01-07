// let s = new String("javascript")
// document.write(typeof(s))
// // valueOf will convert a datatype to its primitive
// let x=s.valueOf()
// document.write("<br>")
// document.write(typeof(x))

// let s1="  jsp hello  "
// console.log(s1.length)
// document.write("<br>")
// st=s1.trim()
// console.log(st.length)

// //for-each loop( "of" keyword is used to print each element in the iterable string)
// for(let letter of st ){
//     document.write(letter)
// document.write("<br>")
// }

// document.write("<br>")

// // for-each loop ("in" keyword is used to print all the index position if the string)
// for(let index in st ){
//     document.write(index)
// document.write("<br>")
// }
// let sub_str=st.substring(0,4)

// document.write("the string till 0-4th position=",sub_str)
// document.write("<br>")

// document.write("the vlaue of 6th index=",st.charAt(6))
// document.write("<br>")
// document.write("index of occurance of s=",st.indexOf("s"))
// document.write("<br>")
// document.write("index of occurance of last l=",st.lastIndexOf("l"))
s=document.getElementById("str").value
s1=document.getElementById("word").value
const str=[];
console.log(typeof(s))
len=s.length;
    
function checkChar(){

    // const str=[];
    // for(let i of s){
    str.push(s.indexOfAll(s1))
//        if(s[i]==s1){
//            str.push[s.indexOf(i)]
//         }
    //    }
    //    console.log(s.indexOf(i))

    document.write(str)

    // document.getElementById("p1").innerText=str

    }

    function getAllIndexes(arr, val) {
        var indexes = [], i;
        for(i = 0; i < arr.length; i++)
            if (arr[i] === val)
                indexes.push(i);
        return indexes;
    }

    
function checkChar1() {

for (let i=0; i<s.length;i++){
    if(s[i]==s1){
        str.push(i);
console.log(str);

    }
console.log(str);

}
console.log(str);

    }

// const str = 'hello world';
// const indexes = [];
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === 'l') {
//     indexes.push(i);
//   }
// }
// console.log(indexes); // 👉️ [2, 3, 9]

    
