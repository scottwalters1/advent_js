findSum();

async function findSum() {

    const numberObject = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };

    const response = await fetch('input.txt');
    const inputText = await response.text();
    const lines = inputText.split('\n');

    let sum = 0;

    lines.forEach(line => {

        let first = '';
        let last = '';

        let potentialFirst = "";
        let potentialLast = "";

        outerLoopFirst: for (let i = 0; i < line.length; i++) {

            potentialFirst += line[i];

            for (let digit of Object.keys(numberObject)) {
                if (potentialFirst.includes(digit)) {
                    first = numberObject[digit];
                    break outerLoopFirst;
                }
            }

            if (!isNaN(line[i]) && line[i] != ' ') {
                first = line[i];
                break;
            }
        }

        outerLoopLast: for (let i = line.length - 1; i >= 0; i--) {

            potentialLast = line[i] + potentialLast;

            for (let digit of Object.keys(numberObject)) {
                if (potentialLast.includes(digit)) {
                    last = numberObject[digit];
                    break outerLoopLast;
                }
            }

            if (!isNaN(line[i]) && line[i] != ' ') {
                last = line[i];
                break;
            }
        }

        if (first !== '' && last !== '') {
            let newNum = parseInt(first + last);
            sum += newNum;
        }
    });
    console.log("Sum: ", sum);
}

