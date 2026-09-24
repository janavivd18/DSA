/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i=0;
    for(let j=s.length-1;i<j;j--){
        let temp=s[i];
        s[i]=s[j];
        s[j]=temp;
        i++;
    }
}
let s=["p","a","l","i","n","d","r","o","m","e"];
reverseString(s);
console.log(s);
    
