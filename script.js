var NumIn = 0;
var RoundedNum = 0;

class BigNum {
    constructor(number) {
        this.number = number.toString();
        this.dotP = 0;
    }

    parseNumber(num, roundToDigit) {
        var numD = [];
        var counter = 0;
        for (let n of num) {
            if (n !== '.') {
                numD.push(n);
                counter++;
            } else {
                this.dotP = counter;
            }
        }
        if (roundToDigit > numD.length - this.dotP) {
            numD = numD.concat(Array(roundToDigit - (numD.length - this.dotP)).fill('0'));
        }
        return numD;
    }

    checkOverflow(digits, pos = 0) {
        if (parseFloat(digits[digits.length - 1]) === 10) {
            if (digits.length === 1) {
                return digits.concat(Array(pos).fill('0'));
            }
            digits.pop();
            pos++;
            digits[digits.length - 1] = (parseFloat(digits[digits.length - 1]) + 1).toString();
            return this.checkOverflow(digits, pos);
        }
        return digits.concat(Array(pos).fill('0'));
    }

    parseRound(digits, roundToDigit, afterPlaces) {
        if (afterPlaces === roundToDigit) {
            return this.checkOverflow(digits);
        } else {
            if (parseFloat(digits[digits.length - 1]) >= 5) {
                digits.pop();
                digits[digits.length - 1] = (parseFloat(digits[digits.length - 1]) + 1).toString();
                afterPlaces--;
                return this.parseRound(digits, roundToDigit, afterPlaces);
            }else{
                digits.pop();
                afterPlaces--;
                return this.parseRound(digits, roundToDigit, afterPlaces);
            }
        }
        return digits;
    }

    concatRound(digits) {
        digits.splice(this.dotP, 0, '.');
        return digits;
    }

    Round(roundToDigit) {
        var num = this.parseNumber(this.number, roundToDigit);
        num = this.parseRound(num, roundToDigit, num.length - this.dotP);
        num = this.concatRound(num);
        num = this.parseString(num);
        num = roundToDigit == 0 ? parseFloat(num).toString(): num;
        return num;
    }
    
    parseString(num){
        var pNum = '';
        for (let n of num){
            pNum += n;
        }
        return pNum;
    }
}

function RoundOff(){
    var numInput = document.getElementById('numIn');
    var roundTo = document.getElementById('roundId');
    if (roundTo.value == null || roundTo.value == "" || numInput.value == null || numInput == ""){
        alert("Please enter all the required fields.");
        return;
    }
    NumIn = parseFloat(numInput.value);
    RoundedNum = new BigNum(NumIn);
    document.getElementById("roundedNumDisplay").textContent = RoundedNum.Round(parseFloat(roundTo.value));
    console.log(RoundedNum);
}