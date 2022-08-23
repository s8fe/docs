---
sidebar_position: 22
---
MainPool contract swaps $NCO for Governance NCO with a ticker $GNCO, locks $NCO and distributes fees automatically according to the stake fee distribution structure. $GNCO tokens are minted after the lock and are burned when $NCO is unlocked and recovered by the owner. 

# MainPool Actions
All MainPool actions can be found in the [Newcoin-SDK](https://github.com/Newcoin-Foundation/newcoin-sdk)

## Staking

### Stake to the MainPool
```typescript
const nco = new NCO_BlockchainAPI(
    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services
);
nco.stakeMainDAO({
    amt: "10.0000 NCO" //string;
    payer: "satoshi.io" //string;
    payer_prv_key: "<private key>" //string;
}).then((res) => {
   console.log("Transaction ID: " + res.TxID_stakeMainDAO)
}).catch((error) => console.log("Error: "+error))
        
```
<details>

<summary>Requires: private key, Errors: auth, negative amt</summary>

Requires: Authorization from Account 

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match.
- **"do_stake : amount in should be positive"**: the amount in amt should be positive
- **"Error: Expected symbol to be A-Z and between one and seven characters"**: the amt needs to be in the Format "#.#### NCO"

</details>

### Unstake instantly from the MainPool
```typescript
const nco = new NCO_BlockchainAPI(
    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services
);
nco.instUnstakeMainDAO({
    amt: "10.0000 NCO" //string;
    payer: "satoshi.io" //string;
    payer_prv_key: "<private key>" //string;
}).then((res) => {
   console.log("Transaction ID: " + res.TxID_unstakeMainDAO)
}).catch((error) => console.log("Error: "+error))
```
<details>

<summary>Requires: private key, Errors: auth, negative amt</summary>

Requires: Authorization from Account

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match.
- **"do_stake : amount in should be positive"**: the amount in amt should be positive
- **"Error: Expected symbol to be A-Z and between one and seven characters"**: the amt needs to be in the Format "#.#### GNCO"

</details>


### Delayed unstake from the MainPool
```Javascript
 function dldunstake (from, quantity){
    ...
 }
```
<details>

<summary>Requires: Account, Errors: ?</summary>
Requires: Authorization from Account
Errors:

</details>


### Redeem a delayed unstake from the MainPool
```Javascript
 function redeem (from, id){
    ...
 }
```
<details>

<summary>Requires: Account, Errors: ?</summary>
Requires: Authorization from Account
Errors:

</details>


## Account management in the MainPool

### open
Creates 0 balance account in balances table. 
```Javascript
 function open (owner, symbol, payer){
    ...
 }
```


### close
Closes 0 balance account in balances table. 
```Javascript
 function close (owner, symbol){
    ...
 }
```