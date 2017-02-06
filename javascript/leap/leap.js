//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(year) {
	this.year = year;
};

Year.prototype.isLeap = function() {
	const isLeapEvery4Years   = this.year%4 === 0; 
	const isLeapEvery400Years = this.year%100 === 0 ? this.year%400 === 0 : true;

	return isLeapEvery4Years && isLeapEvery400Years;
};

module.exports = Year;
