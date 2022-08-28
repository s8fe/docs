---
sidebar_position: 11
---
The NFT assets contract can be used to 
create a new collection with custom schema
Mint, burn or transfer NFTs
Mint backed NFTs holding tokens 
Direct sale/purchase of an NFT between two use


# NFT Actions


## Mint Generic Asset

```typescript
nco.mintAsset({ 
            creator: "satoshi.io", 
        payer: "satoshi.io", 
            payer_prv_key: "<private key>", 
            immutable_data: [
                {'key': 'name', 'value': ['string', 'Demo NFT-'+(new Date()).getTime()]},
                {'key': 'description','value': ['string', 'demo nft']}, 
                {'key': 'image','value': ['string', 'https://lh3.googleusercontent.com/1gqAWnic2dGMSVC2mcHCWTK2aIfYBtKS5GFpsNryT6Gtxhj6_H_x7a14AnfA__nn_TWvI1Ankv90mj49JZa0G7QUkafOv4Tb31Z_8ZQ=s0']},
                {'key': "external_url",'value':['string', '']},
                {'key': 'content_type','value':['string', 'text']},
                {'key': 'content','value':['string', test]},
                {'key': "license",'value':['string', 'CC-EX-123456']},
                //{'key': "template_name"}, {'value': ['string', '']},
                //{'key': "attributes"}, { 'value': ['string[]', []] }
              ],
            mutable_data: [
                //{'key': 'storage', 'value': ['string', test]}
            ]
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

</details>