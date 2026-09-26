/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extracandies) {
    let result=[];
    let greatestCandies=Math.max(...candies);
    for(let i=0;i<candies.length;i++){
        let newcandies=candies[i]+extracandies;
        if(newcandies>=greatestCandies){
            result.push(true);
        }else{
            result.push(false);

        }
        }
        return result;
    }
    candies=[2,3,5,1,3];
    extracandies=3;
    console.log(kidsWithCandies(candies,extracandies));



    