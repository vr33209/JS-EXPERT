const { error } = require('./constants')
const File = require('./file')
const { rejects, deepStrictEqual } = require('assert')
;
(async () => {
    {
        const filePath = './../mocks/invalid-header.csv'
        const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result,rejection)
    }
    {
        const filePath = './../mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result,rejection)
    }

    {
        const filePath = './../mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result,rejection)
    }

    {
        const filePath = './../mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)

        const expected = [
            {
                "id": 123,
                "name": "Erick Wendel",
                "profession": "Javascript",
                "birthDay": 1996
            },
            {
                "id": 432,
                "name": "Xuxa da Silva",
                "profession": "Javascript",
                "birthDay": 1941
            },
            {
                "id": 433,
                "name": "Joaozinho",
                "profession": "Java Developer",
                "birthDay": 1991
            }
        ]
        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }
    
 })()