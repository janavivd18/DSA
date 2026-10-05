/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxwealth=0;
    for(let i=0;i<accounts.length;i++){
        let wealth=0;
        for(let j=0;j<accounts[i].length;j++){
            wealth=accounts[i][j]+wealth;
        }

        maxwealth=Math.max(maxwealth,wealth);

    }
    return maxwealth;
};