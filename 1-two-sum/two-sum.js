/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for(let i = 0;i <= nums.length; i++){
        for(let j = i+1; j <= nums.length; j++){
            let sum = nums[i] + nums[j];
            if(sum === target){
                let arr = [i,j];
                return arr;
            }
        }
        
    }
};
nums = [2,7,11,15];
target = 9
console.log(twoSum(nums,target));