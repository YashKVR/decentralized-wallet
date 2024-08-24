import { generateMnemonic, mnemonicToSeedSync } from "bip39";

export async function generateKeyPhrase() {
    const mnemonic = generateMnemonic(128);
    return mnemonic;
}