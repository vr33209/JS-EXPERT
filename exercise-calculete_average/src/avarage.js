const constants = require('./constants')

class Avarage {
    async calculateAvarege(avarege1, avarege2) {
        if(!avarege1 || !avarege2) {
            return {
                error: constants.error.AVAREGE_NOT_BE_EMPTY_ERROR_MESSAGE,
                valid: false
            }
        }
        
        const soma = avarege1 + avarege2
        const avarage = soma / 2
        if(avarage > 10) {
            return {
                error: constants.error.AVAREGE_BIGGER_THAN_10_ERROR_MESSAGE,
                valid: false
            }
        }
        
        return {
            avarage,
            valid: true
        }
    }
}

module.exports = Avarage