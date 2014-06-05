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
   // else {
      calculatorState.previousValue = calculatorState.currentValue;
    //}
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
};

jQuery(function($){
window.backgroundColor = {
    red: function(){
        $(".calcRowColor").css("background-color", "#FD0000");
    },
    green: function(){
        $(".calcRowColor").css("background-color", "#00FF00");
    },
    yellow: function(){
        $(".calcRowColor").css("background-color", "#FFFF00");
    },
    blue: function(){
        $(".calcRowColor").css("background-color", "#0A4881");
    },
    purple: function(){
        $(".calcRowColor").css("background-color", "#C100C1");
    },
    orange: function(){
        $(".calcRowColor").css("background-color", "#FF8906");
    },
    white: function(){
        $(".calcRowColor").css("background-color", "white");
    },
    black: function(){
        $(".calcRowColor").css("background-color", "black");
    }   
};

window.buttonColor = {
    red: function(){
        $(".buttonColor").removeClass("buttonColor");
        $(".calcbutton").css("background-color", "#FD0000");
        $(".calcbutton").css("border-style", "inset");
    },
    green: function(){
        $(".buttonColor").removeClass("buttonColor");
        $(".calcbutton").css("background-color", "#00FF00");
        $(".calcbutton").css("border-style", "inset");
    },
    yellow: function(){
        $(".buttonColor").removeClass("buttonColor");
        $(".calcbutton").css("background-color", "#FFFF00");
    },
    blue: function(){
        $(".buttonColor").removeClass("buttonColor");
        $(".calcbutton").css("background-color", "#0A4881");
    },
    purple: function(){
        $(".buttonColor").removeClass("buttonColor");
        $(".calcbutton").css("background-color", "#C100C1");
    },
    orange: function(){
        $(".buttonColor").removeClass("buttonColor");
        $(".calcbutton").css("background-color", "#FF8906");
    },
    white: function(){
        $(".buttonColor").removeClass("buttonColor");
        $(".calcbutton").css("background-color", "white");
    },
    black: function(){
        $(".buttonColor").removeClass("buttonColor");
        $(".calcbutton").css("background-color", "black");
    }   
};
window.borderColor = {
    red: function(){
        $(".backgrounddiv ").css("border-color", "#FD0000");
        $(".calcRow ").css("border-top-color", "#FD0000");
    },
    green: function(){
        $(".backgrounddiv ").css("border-color", "#00FF00");
        $(".calcRow").css("border-top-color", "#00FF00");
    },
    yellow: function(){
        $(".backgrounddiv ").css("border-color", "#FFFF00");
        $(".calcRow ").css("border-top-color", "#FFFF00");
    },
    blue: function(){
        $(".backgrounddiv ").css("border-color", "#0A4881");
        $(".calcRow ").css("border-top-color", "#0A4881");
    },
    purple: function(){
        $(".backgrounddiv ").css("border-color", "#C100C1");
        $(".calcRow ").css("border-top-color", "#C100C1");
    },
    orange: function(){
        $(".backgrounddiv ").css("border-color", "#FF8906");
        $(".calcRow ").css("border-top-color", "#FF8906");
    },
    white: function(){
        $(".backgrounddiv ").css("border-color", "white");
        $(".calcRow ").css("border-top-color", "white");
    },
    black: function(){
        $(".backgrounddiv ").css("border-color", "black");
        $(".calcRow ").css("border-top-color", "black");
    }   
};

    

});
