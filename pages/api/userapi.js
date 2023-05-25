import * as fs from 'node:fs';

export default function handler(req, res) {
    fs.readFile('jsondata/userdata.json' , 'utf-8' , (err , data) => {
        res.status(200).json( JSON.parse(data) )
    })
}