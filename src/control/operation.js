export default function operation(obj, buttonName) {
    switch (buttonName) {
        case "C":
            return{result:null, opA: null,opB:null,op:null};
        case "+":
        case "-":
        case "*":
        case "/":
            return{op:buttonName};
        case "=":
            return{result:resolve(obj.op,obj.opA,obj.opB)};
        default:
            if(obj.op){
                return{ opB: obj.opB == null?buttonName:obj.opB + buttonName};
            }else{
                return{ opA: obj.opA == null?buttonName:obj.opA + buttonName};
            }
    }

}

function resolve(operador, opA, opB) {
    var result = 0;
    console.log("Valor operador: " + operador);
    console.log("Valor opA: " + opA);
    console.log("Valor opB: " + opB);
    switch (operador) {
        case "+":
            result = parseFloat(opA) + parseFloat(opB);
            break;
        case "-":
            result = parseFloat(opA) - parseFloat(opB);
            break;
        case "*":
            result = parseFloat(opA) * parseFloat(opB);
            break;
        case "/":
            if(parseFloat(opB)=== 0) return "Infinity"
            result = parseFloat(opA) / parseFloat(opB);
            break;
        default:
            break;
    }
    return result.toString();
}