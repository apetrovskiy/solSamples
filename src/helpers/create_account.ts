// require('./connect_probe.ts');



// console.log(web3);
// console.log(url_evm);


// console.log(typeof result);

export class AccountCreator {
    create(): object {
        require('dotenv').config();

        // const randomstring = require('randomstring');

        let Web3 = require('web3');
        let url_evm = process.env.RPC_URL;
        let web3 = new Web3(url_evm);

        // const randomString = randomstring.generate(32);
        let result = web3.eth.accounts.create();
        //randomString);
        // console.log(result);

        return result;
    }
}