---
sidebar_position: 20
---

The infrastructure token is the $NCO token, which can be used to purchase computing resources such as RAM, NET or CPU quotas. It can also be used to purchase $GNCO, which is the governance token used for the MainDAO. Each token added to the network follows the same standard as the infrastructure token, which will facilitate development, transactions and listing on secondary markets such as centralized and decentralized exchanges. 


# Get Token Infos

## Get Account Balance of a specific token
This call either requires a contract name OR a Token Name [GNCO,NCO]  

```typescript
nco.getAccountBalance({
        owner: "satoshi.io", //from what account you request the balance
        contract: undefined, // if filled out, used to request the token amount.
        token_name: "GNCO", //can be GNCO, NCO, or null
    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("Account Balances: " + res.acc_balances )
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

</details>

# Transfer Tokens

## Transfer NCO between accounts

```typescript
nco.txNCOBalance({
        to: "nakamoto.io", //string;
        payer:  "satoshi.io", //string;
        payer_prv_key:  "<private key>", //string;
        amt: "10.0000 NCO" //string always in the format of "#.#### NCO"
    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("Transaction ID: " + res.TxID )
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

</details>


## Transfer NCO between accounts

```typescript
nco.txGNCOBalance({
        to: "nakamoto.io", //string;
        payer:  "satoshi.io", //string;
        payer_prv_key:  "<private key>", //string;
        amt: "10.0000 GNCO" //string always in the format of "#.#### GNCO"
    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("Transaction ID: " + res.TxID )
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

</details>


## Transfer NCO between accounts

```typescript
nco.txDAOTokenBalance({
        to: "nakamoto.io", //string;
        payer:  "satoshi.io", //string;
        payer_prv_key:  "<private key>", //string;
        amt: "10.0000 wBTC" //string always in the format of "#.#### Token"
    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("Transaction ID: " + res.TxID )
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

</details>
