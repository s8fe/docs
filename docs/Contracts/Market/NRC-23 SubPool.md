---
sidebar_position: 23
---
newcoin.pools contract swaps $GNCO for Licensing Credit Tokens LCT, which represent a fraction of ownership for all the assets owned by the treasury of the pool, especially all the $GNCO staked by the SubPool creator, their fans, clients and patrons. 

# Pool Actions

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
- **"Error: create_dao: pool already exist"**: Create a pool first
TBD

</details>