/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
let result=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            result.push(0);
            result.push(0);
            
        }else{
            result.push(arr[i])
        }
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=result[i];
    }
}
let arr=[1,0,2,3,0,4,5,0];
duplicateZeros(arr);
console.log(arr)
    