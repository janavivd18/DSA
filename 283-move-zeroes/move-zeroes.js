/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0; 
    for(let j=0;j<nums.length;j++){
        if(nums[j]!=0){
           let temp =nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            i++;
        }
}
};
let nums=[0,1,2,0,3];
moveZeroes(nums)
console.log(nums);
    
