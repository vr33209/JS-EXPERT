const Avarage = require('./avarage.js')
const constants = require('./constants')
const { deepStrictEqual } = require('assert')

;(async ()=> {
    console.log('Describe: Testing avarage class:', )

    {
        console.log('1 - It: should not be empty')
        const avarage = new Avarage()
        const result = await avarage.calculateAvarege()
        const expected = {
            error: constants.error.AVAREGE_NOT_BE_EMPTY_ERROR_MESSAGE,
            valid: false
        }
        deepStrictEqual(result, expected)
        console.log('1 - Passou')

    }

    {
        console.log('2- It: should not be empty')
        const avarage = new Avarage()
        const result = await avarage.calculateAvarege(100, 200)
        const expected = {
            error: constants.error.AVAREGE_BIGGER_THAN_10_ERROR_MESSAGE,
            valid: false
        }
        deepStrictEqual(result, expected)
        console.log('2 - Passou')
    }
    {
        console.log('3- It: should calculate the average of several grades entered by the user.')
        const avarage = new Avarage()
        const result = await avarage.calculateAvarege(5, 10)
        const expectedAvarage = {
            valid: true,
            avarage: 7.5
        }
        deepStrictEqual(result, expectedAvarage)
        console.log('3 - Passou')
    }
       
})()