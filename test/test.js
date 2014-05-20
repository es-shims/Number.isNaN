var expect = require('chai').expect;

require('../');

// Tests taken from the es6-shim test cases
// Source: https://github.com/paulmillr/es6-shim/blob/master/test/number.js
describe('Number', function() {
	var integers = [5295, -5295, -9007199254740991, 9007199254740991, 0, -0];
	var nonIntegers = [-9007199254741992, 9007199254741992, 5.9];
	var nonNumbers = [undefined, true, null, {}, [], 'str'];
	var expectToBeOk = function(item) {
		expect(item).to.be.ok;
	};
	var expectToNotBeOk = function(item) {
		expect(item).to.not.be.ok;
	};

	describe('Number.isNaN()', function() {
		it('should be truthy only on NaN', function() {
			integers.concat(nonIntegers).map(Number.isNaN).forEach(expectToNotBeOk);
			nonNumbers.map(Number.isNaN).forEach(expectToNotBeOk);
			expect(Number.isNaN(NaN)).to.be.ok;
			expect(Number.isNaN(0/0)).to.be.ok;
			expect(Number.isNaN(Number('NaN'))).to.be.ok;
			expect(Number.isNaN(4)).to.not.be.ok;
			expect(Number.isNaN(4.5)).to.not.be.ok;
			expect(Number.isNaN('hi')).to.not.be.ok;
			expect(Number.isNaN('1.3')).to.not.be.ok;
			expect(Number.isNaN('51')).to.not.be.ok;
			expect(Number.isNaN(0)).to.not.be.ok;
			expect(Number.isNaN(-0)).to.not.be.ok;
			expect(Number.isNaN({valueOf: function() { return 3; }})).to.not.be.ok;
			expect(Number.isNaN({valueOf: function() { return 0/0; }})).to.not.be.ok;
			expect(Number.isNaN({valueOf: function() { throw 17; } })).to.not.be.ok;
			expect(Number.isNaN({toString: function() { throw 17; } })).to.not.be.ok;
			expect(Number.isNaN({
				valueOf: function() { throw 17; },
				toString: function() { throw 42; }
			})).to.not.be.ok;
		});
	});
});
