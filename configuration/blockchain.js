// -------------------------------------------------------------------------------------
// This page is set up to handle the blockchai infrastructure.
// This is most optimal for EVM compatible chains.
// This is Solidity code stack focused, so anything built on Substrate is not compatible.
// -------------------------------------------------------------------------------------
// LIST OF TOKEN IDs:
// Refer to the TOKEN_ID from this doc: https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?gid=0#gid=0
// -------------------------------------------------------------------------------------

const BLOCKCHAIN_NETWORK = "hardhat";
const TOKEN_ID = "binancecoin"; // Read header

const NATIVE_CURRENCY_DECIMALS = 18; // Found in docs, typically 18
const DISPLAYED_CURRENCY_DECIMALS = 6;

// -------------------------------------------------------------------------------------
// TO DO:
// -------------------------------------------------------------------------------------

// Custom RPC for an EVM. Only touch if you know what you're doing.
// export const BLOCKCHAIN_NAME = "opBNB"; // Network Name
// export const RPC_URL_DEFAULT = "https://opbnb-testnet-rpc.bnbchain.org/"; // Default RPC URL, found in docs or discord community
// export const RPC_URL_BACKUP = "https://opbnb-testnet-rpc.bnbchain.org/"; // RPC URL, found in docs or discord community - This is the backup. Optional, but effective
// export const BLOCKCHAIN_ID = "5611"; // Blockchain ID, found in docs
// export const BLOCKCHAIN_CHAIN_NETWORK = "opBNB"; // Found in docs
// export const NATIVE_TOKEN_NAME = "tBNB"; // Found in docs
// export const NATIVE_TOKEN_SYMBOL = "tBNB"; // Found in docs

module.exports = {
  BLOCKCHAIN_NETWORK,
  TOKEN_ID,
  NATIVE_CURRENCY_DECIMALS,
  DISPLAYED_CURRENCY_DECIMALS,
};
