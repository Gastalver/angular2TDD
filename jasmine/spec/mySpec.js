describe("Conjunto de tests de ejemplo para probar aserciones Jasmine",function() {
    "use strict";
    var a,
        myObject={
            setA: function(value){
                "use strict";
                a = value;
            },
            getA: function(value){
                "use strict";
                return a;
            }
        }
    let fetchA;

    beforeEach(function(){
        spyOn(myObject,"getA").and.returnValue(789);
        myObject.setA(123);
        fetchA = myObject.getA();
    });

    it("Comprueba que el espía ha sido llamado",function(){
        expect(myObject.getA).toHaveBeenCalled();
    });

    it("No debe afectar a otras funciones",function(){
        expect(a).toEqual(123);
    })

    it("Cuando se le llama debe devolver el número esperado", function(){
        expect(fetchA).toEqual(789)
    })


});