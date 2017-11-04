// Longest Valid Password
//
// A valid S has to contain at least one uppercase character and it cannot
// contain any digits. Given a non-empty string consisting on alphanumeric
// characters, write a function that reurns that maximum length of a longSubstringing
// that contains at least one uppercase letter.

function solution(S) {
    //regular expression
	var myExpression = /([^0-9]*[A-Z]+[a-z]*)/g;
	
    var longSubstring;

	
    longSubstring = myExpression.exec(S);
    if (longSubstring === null) return -1;
	
	//find and return the longest substring based conditions
    return longSubstring[0].length;
}

// Unit Tests
var test = require('tape');

test('test multiple valid Ss', function(t) {
    var result = solution("abcD123BCV");
    t.equal(result, 4, 'testing "abcD123BCV"');
    t.end();
});

test('test no valid S, return -1', function(t) {
    var result = solution("a0bb");
    t.equal(result, -1, 'testing "a0bb"');
    t.end();
});

test('test valid longSubstringing at start of string', function(t) {
    var result = solution("XYZzb02abc");
    t.equal(result, 5, 'testing "XYZzb02abc"');
    t.end();
});

test('test valid longSubstringing at end of string', function(t) {
    var result = solution("123BBCvcb");
    t.equal(result, 6, 'testing "123BBCvcb"');
    t.end();
});

test('test valid longSubstringing are all uppercase letters', function(t) {
    var result = solution("456ABC");
    t.equal(result, 3, 'testing "456ABC"');
    t.end();
});