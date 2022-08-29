---
sidebar_position: 23
---
newcoin.pools contract swaps $GNCO for Licensing Credit Tokens LCT, which represent a fraction of ownership for all the assets owned by the treasury of the pool, especially all the $GNCO staked by the SubPool creator, their fans, clients and patrons. 

## Pool Actions

### Create a Pool
**You can only create one pool per User.**  
```typescript
const nco = new NCO_BlockchainAPI(
    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services
);
nco.createPool({
        owner: "satoshi.io", //string;
        owner_prv_active_key:  "<private key>", //string;
        ticker: "wBTC" //string - cannot be changed afterwards!!!;
    }).then((res) => {
   console.log("Transaction ID: " + res?.TxID_createPool)
}).catch((error) => console.log("Error: "+error))
        
```

<details>

<summary>Requires: private key, Errors: auth</summary>

Requires: Authorization from Account 

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match
- **"Error: create_dao: pool already exist"**: Only one pool per user allowed, and there is one already existing.

</details>

### Stake into a pool
In SubPools you only can stake GNCO - therefore the Token code should not be changed. 
```typescript
const nco = new NCO_BlockchainAPI(
    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services
);
nco.stakePool({
        owner: "satoshi.io", //string;
        payer:  "<private key>", //string;
        payer_prv_key:  "<private key>", //string;
        amt: "10.0000 GNCO" //string always in the format of "#.#### GNCO"
    }).then((res) => {
   console.log("Transaction ID: " + res?.TxID_stakePool)
   console.log("Pool ID: " + res?.pool_id)
   console.log("Pool Code: " + res?.pool_code)
}).catch((error) => console.log("Error: "+error))
        
```

<details>

<summary>Requires: private key, Errors: auth</summary>

Requires: Authorization from Account 

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match
- **"Error: create_dao: pool already exist"**: Only one pool per user allowed, and there is one already existing.

</details>

### Unstake from a pool
The pool to unstake from is decided by the Token Symbol in the amt param.
```typescript
const nco = new NCO_BlockchainAPI(
    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services
);
nco.unstakePool({
        payer:  "<private key>", //string;
        payer_prv_key:  "<private key>", //string;
        amt: "10.0000 wBTC" //string always in the format of "#.#### Token"
    }).then((res) => {
   console.log("Transaction ID: " + res?.TxID_stakePool)
   console.log("Pool ID: " + res?.pool_id)
   console.log("Pool Code: " + res?.pool_code)
}).catch((error) => console.log("Error: "+error))
        
```

<details>

<summary>Requires: private key, Errors: auth</summary>

Requires: Authorization from Account 

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match
- **"Error: create_dao: pool already exist"**: Only one pool per user allowed, and there is one already existing.

</details>


## Pool Data

### Get Pool Info
The pool info can be either retrieved by the Owners Name or by Pool ID. Only one of the params need to be provided.
```typescript
const nco = new NCO_BlockchainAPI(
    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services
);
nco.getPoolInfo({
        owner: "satoshi.io", //string, optional
        code:  undefined, //string, optional
    }).then((res) => {
   console.log("Pool Code: " + res?.rows[0]?.code)
   console.log("Pool Desc: " + res?.rows[0]?.description)
   console.log("Pool Totals: " + res?.rows[0]?.total?.quantity) // always calculated in GNCO
}).catch((error) => console.log("Error: "+error))
        
```

<details>

<summary>Requires: -, Errors: no pool found</summary>


Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match
- **"Error: create_dao: pool already exist"**: Only one pool per user allowed, and there is one already existing.

</details>