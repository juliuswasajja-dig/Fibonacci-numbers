const assert = require('assert');
const fibonacci = require('./fibonacci');

describe ('fibonacii', ()=>{
    
    it('Fibonacci number for index 10 is 89', () =>{
        assert.equal(89, fibonacci)   
    })
})