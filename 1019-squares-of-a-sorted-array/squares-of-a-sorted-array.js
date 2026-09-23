/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
let square=[];
    let i=0;
    let j=nums.length-1;
    for(let k=nums.length-1;k>=0;k--){
        if(nums[i]*nums[i]>nums[j]*nums[j]){
            square[k]=nums[i]*nums[i];
            i++;
        }else{
            square[k]=nums[j]*nums[j];
            j--;
        }
    }
    return square;
}
let nums=[-4,-1,0,3,10];
console.log(sortedSquares(nums));


    
