/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result=[];
    let used=[];
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]===nums2[j]&&!used[j]){
                
                    result.push(nums1[i]);
                    used[j]=true;
                
                break;
            }
            }
        }

    return result;
}

nums1=[1,2,2,1]
nums2=[2,2];
console.log(intersect(nums1,nums2));
    
