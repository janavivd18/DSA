/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    let seen={};
    for(let i=0;i<nums.length;i++){
        if(seen[nums[i]]!=undefined&&(i-seen[nums[i]]<=k)){
            return true;
        }
        seen[nums[i]]=i;
    }
    return false;
}
let nums=[1,2,3,1];let k=3;
console.log(containsNearbyDuplicate(nums,k));
