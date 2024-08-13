// -------------------------------------------------------------------------------------
// This page is set up to handle the blockchai infrastructure.
// This is most optimal for EVM compatible chains.
// This is Solidity code stack focused, so anything built on Substrate is not compatible.
// -------------------------------------------------------------------------------------
// LIST OF TOKEN IDs:
// Refer to the TOKEN_ID from this doc: https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?gid=0#gid=0
// -------------------------------------------------------------------------------------

export const BLOCKCHAIN_NETWORK = "opBNBTestnet";
export const TOKEN_ID = "binancecoin"; // Read header

// Custom RPC for an EVM. Only touch if you know what you're doing.
export const RPC_URL = "https://eth-mainnet.alchemyapi.io/v2/";
