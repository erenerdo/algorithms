/*

Caesar Cipher Encryptor

Given a non-empty string of lowercase letters and a non-negative integer value representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key. Note that letters should "wrap" around the alphabet; in other words, the letter "z" shifted by 1 returns the letter "a".

Sample input: "xyz", 2
Sample output: "zab"

*/

function caesarCipherEncryptor(string, key) {
  // Write your code here.
	let stringArr = string.split('');
	for (let i = 0; i < stringArr.length; i++){
		stringArr[i] = convertChar(stringArr[i], key);
	}
	return stringArr.join('');
}

function convertChar (char, key) {
	// Get baseline ASC values
	let zVal = 'z'.charCodeAt(0);
	let baseVal = 'a'.charCodeAt(0) - 1;

	// Only need values between 0-26
	key %= 26;

	// Get new Char Code
	let newCharCode = char.charCodeAt(0);
	// Convert char code
	newCharCode += key;

	// Check if value is greater than a z value and it has to loop
	if (newCharCode > zVal) {
	  newCharCode = newCharCode - zVal + baseVal;
	}
	// convert value of char
	return String.fromCharCode(newCharCode);
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
