var numFirst = +prompt('Enter number');
var numSecond = +prompt('Enter number');
var matSign = prompt('Select sign: +, -, *, /, %.');

doMath();

function doMath() {
    switch (matSign) {
        case '+':
            alert(numFirst + numSecond);
            break;

        case '-':
            alert(numFirst - numSecond);
            break;

        case '*':
            alert(numFirst * numSecond);
            break;

        case '/':
            alert(numFirst / numSecond);
            break;

        case '%':
            alert(numFirst % numSecond);
            break;

        default:
            alert( "Нет таких значений" );
    }
}


var degree = prompt('Enter degree for number 2');

function degreeNum(degree) {
    if (degree > 1) { 
        return degreeNum(degree / 2);
    }

    else if (degree == 1) {
        return 'Yes';
    }

    if (degree < 1) {
        return 'No';
    }
}

alert(degreeNum(degree));


var degree = prompt('Enter degree for number 2');
var num = 2;

function degreeNum(degree) {
    if (degree == 1) { 
        return 'Yes';
    }
    
    else if (degree < 1) {
        return 'No';
    } 
    
    else {
        return degreeNum(degree / num);
    }
}

alert(degreeNum(degree));


var degree = +prompt('Enter degree for number 2');

function degreeNum(degree) {
    for (sum = 0; sum < degree;) {
        degree = degree / 2;
        console.log(degree);

        if (degree == 1) {
            return 'Yes';
        }

        else {
            return 'No';
        }    
    }
}

alert(degreeNum(degree));
