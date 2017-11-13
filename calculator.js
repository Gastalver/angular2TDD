var calculator = {
    multiply: function(a,b){
        "use strict";
        return a*b
    }
};

function multipletest1(){
    "use strict";
    // Test. O sea, el resultado perseguido.
    var result = calculator.multiply(3,3);
    // Assert result is expected
    if (result===9){
        console.log('Test superado')
    } else {
        console.log('Test no superado')
    }
}

multipletest1();