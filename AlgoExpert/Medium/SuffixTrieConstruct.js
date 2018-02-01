/*

Suffix Trie Construction

Write a class for a suffix-trie-like data structure. The class should have a "root" property set to be the root node of the trie. The class should support creation from a string and the searching of strings. The creation method (called populateSuffixTrieFrom()) will be called when the class is instantiated and should populate the "root" property of the class. Note that every string added to the trie should end with the special "endSymbol" character: "*".

Sample input (for creation): "babc"
Sample output (for creation):
{
  "c": {"*": True},
  "b": {
    "c": {"*": True},
    "a": {"b": {"c": {"*": True}}},
  },
  "a": {"b": {"c": {"*": True}}},
}
Sample input (for searching in the suffix trie above): "abc"
Sample output (for searching in the suffix trie above): True

*/

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.


class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    // For each contiguous substring
		for (let i = 0; i < string.length; i++) {
			const curSubstr = string.slice(i);
			let curLevel = this.root
			for (const char of curSubstr) {
				// Go into that level
				if (char in curLevel) {
					curLevel = curLevel[char];
				}
				// Create that level
				else {
					curLevel[char] = {};
					curLevel = curLevel[char];
				}
			}
			curLevel[this.endSymbol] = true;
		}
  }

  contains(string) {
    let curLevel = this.root;
		// For each char in the string
		for (const char of string) {
			if (char in curLevel) {
				curLevel = curLevel[char];
			}
			else return false;
		}
		return !!curLevel[this.endSymbol];
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
