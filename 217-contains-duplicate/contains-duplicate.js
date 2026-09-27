/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let seen={};
    for(let i=0;i<nums.length;i++){
        if(seen[nums[i]]!=undefined){
            return true;
        }
        seen[nums[i]]=i;
    }
    return false;
}
let nums=[1,2,3 ];
console.log(containsDuplicate(nums));
