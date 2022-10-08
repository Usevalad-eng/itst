
function PrimeNumber(InputNumber) {
	
    function isPrime(m) {
    	
        var i;
        
        for (i = 2; i < m; i++) {
        	
            if (m % i === 0) {
            	
                return false;
            }
        }
        
        return true;
    }

    
    var j;
    
    var sequence = [];
    
    for (j = 2; j < InputNumber; j++) {
    	
        if (InputNumber % j === 0 && isPrime(j)) {
        	
            sequence.push(j);
        }
    }
    
    return sequence;
};


console.log(PrimeNumber(123456789));
