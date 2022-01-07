s=document.getElementById("str").value 
s1=document.getElementById("word").value
const str=[];
const str1=[];
str1.push(s)
function checkChar(){
    for( let i=0;i<s.length;i++){
        if(str1[i]==s1){
            str.push(i)
            console.log(str.values())
        }
    }
    for (let j=0;j<s.length;j++){
        document.write(str[j])
    }
// let stri=str.toString();
// for(let j in str){
//     console.log(str[j])
// }
for(let j of str){
    console.log(str.values)

}
}