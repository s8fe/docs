---
sidebar_position: 31
---
newcoin.daos creates DAOs on top of existing SubPools, using the tokens of each SubPool as a voting weight mechanism. The SubPool founder is automatically the custodian of the SubDAO and can review proposals and veto them before they get submitted to the DAO. 

# SubDAO Actions
All SubDAO actions can be found in the [Newcoin-SDK](https://github.com/Newcoin-Foundation/newcoin-sdk)

##  DAO Governance


### Create a DAO
```typescript
const nco = new NCO_BlockchainAPI(
    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services
);
nco.createDAO({
    author: "satoshi.io" //string;
    author_prv_key: "<private key>" //string;
    descr: "My first DAO" //string - cannot be changed afterwards!!!;
}).then((res) => {
   console.log("Transaction ID: " + res?.TxID_createDao)
}).catch((error) => console.log("Error: "+error))
        
```

**You can only create one DAO per User.**
<details>

<summary>Requires: private key, Errors: auth, negative amt</summary>

Requires: Authorization from Account 

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match.

TBD

</details>


### Create a DAO Proposal
```typescript
const nco = new NCO_BlockchainAPI(
    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services
);
nco.createDaoProposal({
    dao_id?: "12345" //string, optional; you have to provide either the dao_id or the dao_owner handle.
    dao_owner?: "nakamoto.io" //string, optional;
    proposer: "satoshi.io" //string, required;
    proposer_prv_key: "<private key>" //string, required;
    summary: "Summary of the Proposal   " //string, required;
    title: "Catchy proposal title" //string, required;
    url: "https://www.moreinfotomyproposal.com" //string, required;
    vote_start: "2022-08-23" //string, required, ISO8601 - "yyyy-MM-dd";
    vote_end: "2022-08-30" //string, required, ISO8601 - "yyyy-MM-dd";
}).then((res) => {
    console.log("Transaction ID: " + res?.TxID_createDaoProposal)
    console.log("DAO ID: " + res?.dao_id)
    console.log("Proposal ID: " + res?.proposal_id)
}).catch((error) => console.log("Error: "+error))
        
```

<details>

<summary>Requires: private key, Errors: auth, negative amt</summary>

Requires: Authorization from Account 

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match.
- **"create_proposal : vote start shoud be greater then current time"**: vote_start should be in the future.
- **"create_proposal : vote end should be greater then vote start"**: vote_end should be after vote_start.
- **"create_proposal : proposer is not whitelisted"**: the proposer needs to be whitelisted first.

</details>

### Create a DAO Stake Proposal
```typescript
const nco = new NCO_BlockchainAPI(
    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services
);
nco.createDaoStakeProposal({
    dao_id?: "12345" //string, optional; you have to provide either the dao_id or the dao_owner handle.
    dao_owner?: "nakamoto.io" //string, optional;
    proposer: "satoshi.io" //string, required;
    proposer_prv_key: "<private key>" //string, required;
    quantity: "10.0000 vtoken" //string, required - Format "#.#### <token>" Token needs to match the to's token
    to: "vitalik.io" //string, required
    vote_start: "2022-08-23" //string, required, ISO8601 - "yyyy-MM-dd";
    vote_end: "2022-08-30" //string, required, ISO8601 - "yyyy-MM-dd";
}).then((res) => {
    console.log("Transaction ID: " + res?.TxID_createDaoProposal)
    console.log("Proposal ID: " + res?.proposal_id)
}).catch((error) => console.log("Error: "+error))
        
```

<details>

<summary>Requires: private key, Errors: auth, negative amt</summary>

Requires: Authorization from Account 

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match.
- **"create_proposal : vote start shoud be greater then current time"**: vote_start should be in the future.
- **"create_proposal : vote end should be greater then vote start"**: vote_end should be after vote_start.
- **"create_proposal : proposer is not whitelisted"**: the proposer needs to be whitelisted first.

</details>