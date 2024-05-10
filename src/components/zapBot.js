const { Client } = require('whatsapp-web.js');
const client = new Client();

export function zapBot(){
    function conectar(){
        client.once('ready', () => {
            console.log('ready')
        }) 
    }
}