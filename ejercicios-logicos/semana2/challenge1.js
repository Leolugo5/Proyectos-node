function twoSums(numbs, target) {
    for (let i = 0; i < numbs.length; i ++) {
        for (let j = 0; j < numbs.length; j ++) {
            if ((i != j) && (numbs[i] + numbs[j]) == target) {
                const res = [numbs.indexOf(numbs[i]), numbs.indexOf(numbs[j])]
                return res
            }
        }
    }
}

module.exports = twoSums;