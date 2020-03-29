const generatUnicId=require('../utils/generateUnicId')
const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id =generatUnicId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({ id });
    },
    async index(request, response) {
        const ongs = await connection('ongs').select("*");

        return response.json(ongs);
    }
}