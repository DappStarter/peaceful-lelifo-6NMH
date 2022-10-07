require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember million hockey enroll orange ghost'; 
let testAccounts = [
"0x1ad1552d1c09066672a2233cea7965c7d9e6f6e5e78ed4d7e08f69070144fcf6",
"0x4da52d28eb229279969fa80f519dcd118905ac65a9b323f8c50985923224f487",
"0x422ff1d8b952e83063fd6116f45558025aa1c1abf810fe4019fd4de85fa9d1c3",
"0x8af73c85f6a95f7ae8ce675e04c2751806b45b87904499a9d4b01152457d029c",
"0xc8d1c3b2fbfe5690ba91bc03c2227f3f5756fc759c6ed48076f15bea367298b4",
"0x165904931d926579c946959a68b0fe7da89b019aa4c7ea58792b6dbd4e19c84b",
"0x9155b5152569af9e802740340e6205c0693350cf7f9a111f97c312afd4ffc46d",
"0x95d9a19adeb63f42be72e11c8d5ab93a75365c4888e34a78d2614e1221888ac1",
"0x1b72327a3f46d19fc76715c2ea1da0784187ea526d4097bfc78f2e149c2e15bd",
"0xba2a6f09f21b25aa9062bf796b8192471cd08d83b0f88b1adba6f620651f6d63"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


