let Hamming = function() {};

/**
 * Return the number of changes in the DNA strands
 * @param dna1
 * @param dna2
 */
Hamming.prototype.compute = function(dna1, dna2) {
    if (dna2.length !== dna1.length) throw new Error('DNA strands must be of equal length.');

    let changes = 0;

    for (let i = 0; i < dna1.length; i++) {
        if (dna1[i] !== dna2[i]) {
            changes++;
        }
    }

    return changes;
};

module.exports = Hamming;