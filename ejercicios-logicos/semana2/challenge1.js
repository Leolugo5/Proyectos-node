function twoSums(numbs, target) {
    for (let i = 0; i < numbs.length; i++) {
        for (let j = 1; j < numbs.length; j++) {    
            if ((numbs[i] + numbs[j]) === target) {
                const res = [numbs.indexOf(numbs[i]), numbs.indexOf(numbs[j])]
                return res
            }        
        }
    }
     
}

module.exports = twoSums;