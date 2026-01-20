class Calculator {
    constructor() {
        this.num1Input = document.getElementById('num1');
        this.num2Input = document.getElementById('num2');
        this.operationSelect = document.getElementById('operation');
        this.resultSpan = document.getElementById('result');
        this.calculateBtn = document.getElementById('calculateBtn');
        
        this.calculateBtn.addEventListener('click', () => this.calculate());
    }
    
    getInputValues() {
        const num1 = parseFloat(this.num1Input.value);
        const num2 = parseFloat(this.num2Input.value);
        return { num1, num2 };
    }
    
    getOperation() {
        return this.operationSelect.value;
    }
    
    calculate() {
        const { num1, num2 } = this.getInputValues();
        const operation = this.getOperation();
        
        if (isNaN(num1) || isNaN(num2)) {
            this.displayResult('Enter a number');
            return;
        }
        
        let result;
        
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    this.displayResult('Invalid');
                    return;
                }
                result = num1 / num2;
                break;
            default:
                this.displayResult('Invalid');
                return;
        }
        
        this.displayResult(result);
    }

    displayResult(result) {
        if (typeof result === 'number') {
            this.resultSpan.textContent = parseFloat(result.toFixed(3));
        } else {
            this.resultSpan.textContent = result;
        }
    }
}

const calculator = new Calculator();
