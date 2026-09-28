/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }
    let frequency={};
    for(let i=0;i<s.length;i++){
        if(frequency[s[i]]){
            frequency[s[i]]++;
        }else{
            frequency[s[i]]=1;
        }
    }
    for(let i=0;i<t.length;i++){
        if(!frequency[t[i]]){
            return false;
        }
        frequency[t[i]]--;
    }
    return true;
};
let s="rat";
let t="car";
console.log(isAnagram(s,t));
