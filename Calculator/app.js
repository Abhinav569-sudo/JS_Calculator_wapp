(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Calculation logic
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    // Calculation function
    const calculate = (expression) => {
        let numbers = [];
        let currentNum = "";
        let ops = [];

        for (let i = 0; i < expression.length; i++) {
            let char = expression[i];

            if (char >= '0' && char <= '9' || char === '.') {
                currentNum += char;
            } else {
                numbers.push(Number(currentNum));
                currentNum = "";
                ops.push(char);
            }
        }

        numbers.push(Number(currentNum));

        let result = numbers[0];

        for (let i = 0; i < ops.length; i++) {
            let currentOp = ops[i];
            let currentNum = numbers[i + 1];

            switch (currentOp) {
                case '*':
                    result *= currentNum;
                    break;
                case '/':
                    result /= currentNum;
                    break;
                case '+':
                    result += currentNum;
                    break;
                case '-':
                    result -= currentNum;
                    break;
            }
        }

        return result;
    };


    // Equal button
    equal.addEventListener('click', (e) => {
        if (screen.value === '') {
            screen.value = "";
        } else {
            let result = calculate(screen.value);
            screen.value = result;
        }
    });


    // Clear button
    clear.addEventListener('click', (e) => {
        screen.value = '';
    });

})();