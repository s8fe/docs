---
sidebar_position: 10
---
The Universal Name System is a decentralized identity provider providing user-friendly names attached to blockchain accounts. Universal names are composed of two parts, the username and the extension. Extension owners can sell any username under their extension, therefore being able to monetise their extension. Extensions will be auctioned as NFTs

# Accounts

## Create New Account
If you never created an account before, we suggest to start with the [Create an Account](../../Guides/Create%20an%20Account) and the [CPU Ram Bandwidth](../../Guides/Deep%20Dive/CPU-Network-RAM-Bandwidth) Guides.  
We recommend to have the active account to be a different one than the owner account for additional security. Learn more in our [Active Owner Accounts Guide](../../Guides/Deep%20Dive/Active%20Owner%20Accounts)
```typescript
 let keypair = await nco.createKeyPair();
    console.log("Keys owner generated: \n Prv: %s \n Pub: %s\n", keypair.prv_key, keypair.pub_key);
    nco.createUser({
        newUser: "piffiedev.io", 
        newacc_pub_active_key: keypair.pub_key,
        newacc_pub_owner_key:  keypair.pub_key,
        payer: "io", 
        payer_prv_key: "5KdRwMUrkFssK2nUXASnhzjsN1rNNiy8bXAJoHYbBgJMLzjiXHV",
        ram_amt : 8196, 
        cpu_amount : "100.0000 NCO", 
        net_amount : "100.0000 NCO", 
        xfer : true, // stake or transfer CPU/NET to the account
    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("transaction ID: " + res.TxID_createAcc)
            console.log("full response: ",res)
        } else {
            console.log("NO RESULT seems error has occured")
        }
    })
```


<details>

<summary>Requires: private key, Errors: auth</summary>

Requires: Authorization from Account 

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match.
- **"create_proposal : vote start shoud be greater then current time"**: vote_start should be in the future.
- **"create_proposal : vote end should be greater then vote start"**: vote_end should be after vote_start.
- **"create_proposal : proposer is not whitelisted"**: the proposer needs to be whitelisted first.

</details>