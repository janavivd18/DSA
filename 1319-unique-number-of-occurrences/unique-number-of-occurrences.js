/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let frequency={};
    for(let i=0;i<arr.length;i++){
        if(frequency[arr[i]]){
            frequency[arr[i]]++;
        }else{
            frequency[arr[i]]=1;
        }
    }
    let seen={};
    for(let key in frequency){
        let count=frequency[key];
        if(seen[count]){
            return false;
        }
        seen[count]=true;
    }
    return true;
    
};