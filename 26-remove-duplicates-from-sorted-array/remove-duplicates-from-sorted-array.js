/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[i]!=nums[j]){
            i++;
            nums[i]=nums[j];
            
        }
    }

        return i+1;
    
}
nums=[1,1,3,3,4,4,5];
removeDuplicates(nums);
console.log(nums);
