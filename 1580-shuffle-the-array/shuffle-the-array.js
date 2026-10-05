/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ans=[];
    for(let i=0;i<n;i++){
        ans.push(nums[i]);
        ans.push(nums[i+n]);
    }
    return ans;
}
nums=[1,1,2,2];
n=2;
console.log(shuffle(nums));
    
