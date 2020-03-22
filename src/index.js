function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    let arr = expr,
    result,
    start = 0, 
    end = arr.length,
    bracketOpen = 0,
    bracketClose = 0,
    value;
    if(arr[0] !== ''){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '(') bracketOpen++
            
            if (arr[i] == ')') bracketClose++
        }

        if(bracketOpen != bracketClose) throw 'ExpressionError: Brackets must be paired'
        
        for (let i = 0; i < expr.length; i++) {
            if(expr[i] == ' ') value = true
        }

        value ? arr = expr.split(' ') : arr = expr.split('')
    } 
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '(') start = i; 
        
        if(arr[i] == ')') {
            end = i - 2;
            arr.splice(i-1,2)
            arr.splice(start,2)
            start += 1
            end -=2
            break;
        }
    }

    for (let i = start; i < end; i++) {
        if(arr[i] == '/') {
            if(arr[i+1] == 0) {
                throw 'TypeError: Division by zero.'
            } else {
               result = arr[i-1] / arr[i+1]
               arr[i-1] = result
               arr.splice(i,2)
               i -= 1
               end -= 2
            }

        }
        if(arr[i] == '*') {
            result = arr[i-1] * arr[i+1]
            arr[i-1] = result
            arr.splice(i,2)
            i -= 1
            end -= 2
        }
    } 

    for (let i = start; i < end; i++) {
        if(arr[i] == '+') {
               result = +arr[i-1] + +arr[i+1]
               arr[i-1] = result
               arr.splice(i,2)
               i -= 1
               end -= 2
            }

        if(arr[i] == '-') {
            result = +arr[i-1] - +arr[i+1]
            arr[i-1] = result
            arr.splice(i,2)
            i -= 1
            end -= 2
        }
    } 

    while(arr.length > 3) {
        expressionCalculator(arr)
    }
    for(let i = 0; i < arr.length; i++) {
        if (arr[i]!=='')
        return arr[i]
    }
}

module.exports = {
    expressionCalculator
}