var calculatorState = {
    currentValue: '',
    previousValue: '',
    pendingOperator: ''
}

window.calculatorApp = {
  clickDigit: function(digit) {
    if((digit !== 0) || calculatorState.currentValue) {
      calculatorState.currentValue += digit;
    }
    display.value = calculatorState.currentValue;
  },
  clickNegative: function() {
      if(display.value >=0){
          calculatorState.currentValue = calculatorState.currentValue -    (2*calculatorState.currentValue);
          display.value = calculatorState.currentValue;
      }else{
          calculatorState.currentValue = calculatorState.currentValue +    ((-2) * calculatorState.currentValue);
          display.value = calculatorState.currentValue;
      };
  },
  clickOperator: function(op) {
    if(calculatorState.pendingOperator) {
      this.clickEquals();
    }
    else {
      calculatorState.previousValue = calculatorState.currentValue;
    }
    calculatorState.pendingOperator = op;
    calculatorState.currentValue = '';

  },
  clickEquals: function() {
    if(calculatorState.pendingOperator) {
      var current = parseFloat(calculatorState.currentValue);
      var prev = parseFloat(calculatorState.previousValue);
      switch(calculatorState.pendingOperator) {
        case '+':
          calculatorState.currentValue = prev + current;
          break;
        case '-':
          calculatorState.currentValue = prev - current;
          break;
        case '*':
          calculatorState.currentValue = prev * current;
          break;
        case '/':
          calculatorState.currentValue = prev / current;
          break;
      }
      calculatorState.previousValue = '';
      calculatorState.pendingOperator = '';
      display.value = calculatorState.currentValue;
	}
  },  
  clickDecimal: function(){
      if(display.value > 0){
          calculatorState.currentValue = calculatorState.currentValue + ".";
      }; 
  },    
  clearNumbers: function(){
        calculatorState.currentValue = '';
        calculatorState.previousValue = '';
        calculatorState.pendingOperator = '';
        display.value = "0";
  }, 
  clearError: function(){
     if(display.value){
        calculatorState.currentValue = calculatorState.previousValue;
       // calculatorState.previousValue = '';
        calculatorState.pendingOperator = '';
        display.value = calculatorState.currentValue;
     }
  }, 
  clickClose: function(){
    if(display.value){
    calculatorState.currentValue = '';
    calculatorState.previousValue = '';
    calculatorState.pendingOperator = '';
    display.value = "";
    }else{
    display.value = "0";
    };
}
}

