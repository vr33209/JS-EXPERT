const Fibonacci = require('./fibonacci')
const sinon = require('sinon')
const { deepStrictEqual } = require('assert')


;(async ()=> {
    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)
        for await (const iterator of fibonacci.execute(3)) {}
        const expectedCallCount = 4;

        deepStrictEqual(spy.callCount, expectedCallCount)
    }

    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)
        const [...results] = fibonacci.execute(5)
        
        // [0] input = 5, current = 0, next = 1
        // [1] input = 4, current = 1, next = 1
        // [2] input = 3, current = 1, next = 2
        // [3] input = 2, current = 2, next = 3
        // [5] input = 0, - > PARA

        const call = spy.getCall(2)
        const { args } = call
        const expectedResult = [0,1,1,2,3]
        const expectedParams = Object.values({
            input: 3,
            current: 1,
            next: 2
        })

        deepStrictEqual(args, expectedParams)
        deepStrictEqual(results, expectedResult)
    }
})()