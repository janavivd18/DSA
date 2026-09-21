/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return nums.concat(nums);
    
}
let nums=[1,2,1];
console.log(getConcatenation(nums));