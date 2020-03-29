const crypto=require('crypto')
const unicId =()=>{
    return  crypto.randomBytes(4).toString('HEX');
}

module.exports= unicId;