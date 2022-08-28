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
This is the basic generic mint function, that enables you to mint any type of NFT structure.  
Please note, that the account needs to have at least 1 collection before. so it is recommended to check for collections first.  
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
                {'key': 'content','value':['string', "test"]},
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
            console.log("transaction ID: " + res.TxID_mintAsset)
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
- **"Error: assertion failure with message: No collection with this name exists"**: The creator has no collection. See 
</details>


createCollection

## Create a Collection
All NFTs and Assets need to be stored in a collection, that give it its market abilities.  
```typescript
nco.createCollection({ 
            user: "satoshi.io", 
            user_prv_active_key: "<private key>", 
            collection_name: "my.First.Col", //max 13 chars
            schema_name: "defSchema", //max 13 chars
            schema_fields: default_schema,
            template_name: "defTemplate", //max 13 chars
            template_fields: [], //template fields are higher ranked than asset fields - see Data Precedence
            allow_notify: true,
            mkt_fee    : 0.05,
            xferable   : true, //If false, Assets in the collection cannot be transferred, and therefore is Soulbound
            burnable   : true, //If false, Assets in the collection cannot be destroyed again.
            max_supply : 0xffff 
    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("transactions Collection: {0}, Schema: {1}, Template: {2}", res.TxID_createCol, res.TxID_createSch, res.TxID_createTpl)
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
- **"Error: Name should be less than 13 characters,..."**: Check Collection Name, Schema Name, Template Name to be only lowercase and less than 13 chars long.
- **"Error: assertion failure with message: collection names must be 12 characters long"**: Collection names must be exactly 12 char long and only contains lowercase characters or "."
- **"Error: assertion failure with message: When the collection name has a suffix, the suffix authorization is required"**:Remove the . characters from the name, or provide the authorization first.

</details>