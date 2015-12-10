// Diversion - http://codekata.com/kata/kata15-a-diversion/
// ==========================================================================
// Think of binary numbers: sequences of 0’s and 1’s.
// How many n-digit binary numbers are there that don’t have two adjacent 1 bits?
// For example, here are the three-digit numbers:
//
//     0     1     2     3     4     5     6     7
//    ---------------------------------------------
//    000   001   010   011   100   101   110   111
//
// Five of the possible eight combinations meet the criteria
//
//     0     1     2     3     4     5     6     7
//    ---------------------------------------------
//    000   001   010    -    100   101    -     -
//
// What is the number for sequences of length 4, 5, 10, n?
// Print all such numbers for interval <0; 100>, <m; n>
//
// Hint: Conversion integer to binary - i.toString(2)

var oneFlag = false;
var skipNumber = false;

for (var i = 0; i < 30; i++) {
    var bin = i.toString(2);
    var str = new String(bin);

    for (var j = 0; j < str.length; j++) {
        if (str[j] == 1) {
            if (oneFlag) {
                oneFlag = false;
                skipNumber = true;
                break;
            }
            oneFlag = true;
        } else {
            oneFlag = false;
        }
    }

    if (!skipNumber) {
        console.log(i + ' - ' + bin);
    }

    oneFlag = skipNumber = false;
}