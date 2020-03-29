const generateUnicId=require('../../src/utils/generateUnicId')

describe('Generate Unique ID',()=>{
    it('Should generate an unic ID',()=>{
        const id = generateUnicId();
        expect(id).toHaveLength(8);
        //expect(id).toBeInstanceOf(String);
    })
})