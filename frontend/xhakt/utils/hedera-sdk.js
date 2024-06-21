import {
    PrivateKey,
} from '@hashgraph/sdk';
import {
    HDNode as ethersHdNode,
} from '@ethersproject/hdnode';
import dotenv from 'dotenv';

async function main() {
    // Ensure required environment variables are available
    dotenv.config();
    if (!process.env.SEED_PHRASE) {
        throw new Error('Please set required keys in .env file.');
    }

    // Create an ECSDA secp256k1 private key based on a BIP-39 seed phrase,
    // plus the default BIP-32/BIP-44 HD Wallet derivation path used by Metamask.
    // NOTE: Derive private key
    // Step (1) in the accompanying tutorial
    const hdNodeRoot = ethersHdNode.fromMnemonic(/* ... */);
    const accountHdPath = `m/44'/60'/0'/0/0`;
    const hdNode = hdNodeRoot.derivePath(accountHdPath);

    // At this point the account technically does not yet exist,
    // and will need to be created when it receives its first transaction (later).
    // Convert the private key to string format as well as an EVM address.
    const privateKey = PrivateKey.fromStringECDSA(hdNode.privateKey);
    const privateKeyHex = `0x${privateKey.toStringRaw()}`;
    // NOTE: Derive EVM address
    // Step (2) in the accompanying tutorial
    const evmAddress = `0x${/* ... */}`;
    const accountExplorerUrl = `https://hashscan.io/testnet/account/${evmAddress}`;
    const accountBalanceFetchApiUrl =
        `https://testnet.mirrornode.hedera.com/api/v1/balances?account.id=${evmAddress}&limit=1&order=asc`;

    let accountBalanceTinybar;
    let accountBalanceHbar;
    let accountId;
    try {
        const accountBalanceFetch = await fetch(accountBalanceFetchApiUrl);
        const accountBalanceJson = await accountBalanceFetch.json();
        accountId = accountBalanceJson?.balances[0]?.account;
        accountBalanceTinybar = accountBalanceJson?.balances[0]?.balance;
        if (accountBalanceTinybar) {
            accountBalanceHbar = new Intl.NumberFormat('en-GB', {
                minimumFractionDigits: 8,
                maximumFractionDigits: 8,
            })
            .format(accountBalanceTinybar * (10 ** -8));
        }
    } catch (ex) {
        // do nothing
    }

    console.log(`privateKeyHex: ${privateKeyHex}`);
    console.log(`evmAddress: ${evmAddress}`);
    console.log(`accountExplorerUrl: ${accountExplorerUrl}`);
    console.log(`accountId: ${accountId}`);
    console.log(`accountBalanceHbar: ${accountBalanceHbar}`);

    return {
        privateKeyHex,
        evmAddress,
        accountExplorerUrl,
        accountBalanceFetchApiUrl,
        accountBalanceHbar,
        accountBalanceTinybar,
    };
}

main();

export default main;