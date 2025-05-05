const multiply = (a,b,c) => a*b*c; 
const add = (a,b,c,d,e) => a+b+c+d+e;

const curry = (operation) => {
    if(operation === multiply) {
        return function(a) {
            return function(b) {
                return function(c) {
                    return operation(a,b,c);
                }
            }
        }
    }
    else if (operation === add) {
        return function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return operation(a,b,c,d,e);
                        }
                    }
                }
            }
        }
    }
}

curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5) // should be true 
curry(multiply)(1)(2)(3) == multiply(1,2,3) // should be true
