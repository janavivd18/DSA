/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let first=-Infinity;
    let second=-Infinity;
    let third=-Infinity;

    for(let num of nums){

        if(num===first||num===second||num===third){
            continue;
        }
        if(first<num){
            third=second;
            second=first;
            first=num;
        }
        else if(second<num){
            third=second;
            second= num;
        }
        else if(third<num){
            third=num;
        }    
        }
    return third === -Infinity?first:third;
};