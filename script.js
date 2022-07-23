var arrayNum = [];
var arrayRealNumber = [];
var arrayResult = document.getElementById("txtArray");
function addNumber() {
    var getNum = document.getElementById("txtNumN");

    arrayNum.push(+getNum.value);
    getNum.value = "";
    getNum.focus();
    arrayResult.innerHTML = arrayNum;
}

function deleteArray() {
    arrayNum = [];
    arrayResult.innerHTML = "";
    document.getElementById("txtNumN").focus();
}

//Bài 1
function calcSum() {
    var sum = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            sum += arrayNum[i];
        }
    }
    document.getElementById("resultEx1").innerHTML = "Tổng các số dương là: " + sum;
}

//Bài 2
function countPosNum() {
    var count = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            count++;
        }
    }
    document.getElementById("resultEx2").innerHTML = "Số dương trong mảng là: " + count;
}

//Bài 3
function findMinNum() {
    var min = arrayNum[0];
    for (var i = 1; i < arrayNum.length; i++) {
        if (arrayNum[i] < min) {
            min = arrayNum[i];
        }
    }
    document.getElementById("resultEx3").innerHTML = "Số nhỏ nhất trong mảng là: " + min;
}

//Bài 4
function findMinPosNum() {
    var min = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if ((min === 0 || arrayNum[i] < min) && arrayNum[i] > 0) {
            min = arrayNum[i];
        }
    }
    min > 0 ? document.getElementById("resultEx4").innerHTML = "Số dương nhỏ nhất trong mảng là: " + min :
        document.getElementById("resultEx4").innerHTML = "Không có số dương trong mảng";
}

//Bài 5
function findLastEvenNum() {
    var lastEvenNum;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] % 2 === 0) {
            lastEvenNum = arrayNum[i];
        }
    }
    lastEvenNum >= 0 ? document.getElementById("resultEx5").innerHTML = "Số chẵn cuối cùng trong mảng là: " + lastEvenNum :
        document.getElementById("resultEx5").innerHTML = "-1";
}

//Bài 6
function swapNum() {
    var swap;
    var index1 = document.getElementById("txtIndex1").value;
    var index2 = document.getElementById("txtIndex2").value;
    var arraySwap = JSON.parse(JSON.stringify(arrayNum));

    swap = arraySwap[index1];
    arraySwap[index1] = arraySwap[index2];
    arraySwap[index2] = swap;
    document.getElementById("resultEx6").innerHTML = arraySwap;
}


//Bài 7
function sortArray() {
    for (var i = arrayNum.length - 1; i >= 0; i--) {
        var isSwapped = false;
        for (var k = 0; k < i; k++) {
            if (arrayNum[k] > arrayNum[k + 1]) {
                var temp = arrayNum[k];
                arrayNum[k] = arrayNum[k + 1];
                arrayNum[k + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            document.getElementById("resultEx7").innerHTML = "Mảng đã được sắp xếp: " + arrayNum;
            return;
        }
    }
    document.getElementById("resultEx7").innerHTML = "Mảng đã được sắp xếp: " + arrayNum;
}

//Bài 8
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findFirstPrime() {
    for (var i = 0; i < arrayNum.length; i++) {
        if (isPrime(arrayNum[i])) {
            document.getElementById("resultEx8").innerHTML = "Số nguyên tố đầu tiên trong mảng là: " + arrayNum[i];
            break;
        }
        document.getElementById("resultEx8").innerHTML = "-1";
    }
}

//Bài 9
function addRealNumber() {
    var getRealNum = document.getElementById("txtNum");
    var arrayRealResult = document.getElementById("txtRealArray");
    arrayRealNumber.push(+getRealNum.value);
    getRealNum.value = "";
    getRealNum.focus();
    arrayRealResult.innerHTML = arrayRealNumber;
}

function findIntNum() {
    var count = 0;
    for (var i = 0; i < arrayRealNumber.length; i++) {
        if (Number.isInteger(arrayRealNumber[i])) {
            count++;
        }
    }
    document.getElementById("resultEx9").innerHTML = "Số nguyên trong mảng là: " + count;
}

//Bài 10
function comparePosNegNum() {
    var posNum = 0;
    var negNum = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0 && arrayNum[i] !== 0) {
            posNum++;
        } else if (arrayNum[i] < 0 && arrayNum[i] !== 0) {
            negNum++;
        }
    }
    if (posNum > negNum) {
        document.getElementById("resultEx10").innerHTML = "Số dương > số âm";
    } else if (posNum === negNum) {
        document.getElementById("resultEx10").innerHTML = "Số dương = số âm";
    } else {
        document.getElementById("resultEx10").innerHTML = "Số dương < số âm";
    }
}