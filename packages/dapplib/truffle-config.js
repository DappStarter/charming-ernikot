require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom drink frame suspect notice crime remain purity hover ensure swift tribe'; 
let testAccounts = [
"0xafe5bcae01ae900919e2caf1d90fc4c352ccec90f75f5b765d17194356ad468e",
"0xf4bec2b6ece3492ac69069bdbe1a3915913d412c62f4c2b3a141fbf968da3e86",
"0xaae5b27741ac6fa7e9f1e51d99d9dd44d3dd90066bed5e4a050667228cb0accd",
"0x2d1481f2408b3510a01b19f1f7d3b6e7258e855bd235b044b4aac0e2ad1010b8",
"0xc8154441cc102bd2357a748a9adbd790f9f233d20d16d3c9a689775b5faa60cd",
"0xe3b55f68f6938de1b929fd5738f970d16ab32d5f457aee40257adb5106b06d70",
"0x35b6a085ff35fd24717cae6919e6b49255644843e8bf923e8bbe757b4fbe836a",
"0x0680ce2164ac8ccc4c4b7ec5d58b10c91ecb5d040802822a454bd94200d9f523",
"0x4eee21d613e31bb849985602ab982bd124b8217601d16f9756f509ec72cd2eed",
"0xe084a553645b07d3cde4c60ff4dcf87f400384cd4bddaf803afd39113b566510"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

