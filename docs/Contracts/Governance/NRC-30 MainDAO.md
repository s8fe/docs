---
sidebar_position: 30
---
newcoin.dao contract is the MainDAO in charge for making infrastructure-level decisions, in particular related to: 
the allocation of MainDAO treasury to fund specific proposals
the deployment of new Standardized smart contracts


# MainDAO Actions
All MainPool actions can be found in the [Newcoin-SDK](https://github.com/Newcoin-Foundation/newcoin-sdk)

## Whitelisting

TBD
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