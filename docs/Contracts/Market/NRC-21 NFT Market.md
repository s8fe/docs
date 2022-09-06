---
sidebar_position: 21
---
Buy and sell NFTs with market mechanisms such as fixed price listing, auction, providing stake-based, manual white-listing mechanism and fair launch features.


## Create Auction
Creates an public NFT Auction.
The NFT's to sell need all be in one collection, and these need to match.  
During the auction, the NFT ownership will be transferred to the contract itself.  
The system supports standard, as well as dutch auctions. 
```typescript
nco.createAuction({ 
            accountName: "satoshi.io", //the owner of the assets and seller of the NFT's
            assetIds: ["1234","456"], //string[], need to be in the collection
            collection: "My First NFT Collection", //the name of the collection that contains the NFT's
            auctionType: 1, //0 = Regular auction, 1 = Dutch auction
            minPrice: 10.0000, //minimum price, number
            buyNowPrice: 100.0000, //can be undefined, number
            priceToken: "NCO", 
            precision: 2, //decimal, how many commas the price can have.
            startDateMs,
            endDateMs,
            discountRate: 0.1, //set this for 0 on standard auctions. The rate in which the price of a Dutch auction is droped (0 - 1). e.g. 10% = 0.1
            discountInterval: 0.1 //set this for 0 on standard auctions. The time interval in seconds in which the Dutch auction price is dropped. e.g. Price drop every hour = 3600
            requestPermission: "", //string, can be undefined
            marketplace: "", //can be undefined, currently unused.

    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("transaction: {0}", res.TxID)
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

## Edit Auction
Edits an auction.  
Please have in mind, that this creates a new auctionId  
```typescript
nco.editAuction({ 
            auctionId: "1234", //the original auction ID you want to edit. you need to be owner
            accountName: "satoshi.io", //the owner of the assets and seller of the NFT's
            assetIds: ["1234","456"], //string[], need to be in the collection
            collection: "My First NFT Collection", //the name of the collection that contains the NFT's
            auctionType: 1, //0 = Regular auction, 1 = Dutch auction
            minPrice: 10.0000, //minimum price, number
            buyNowPrice: 100.0000, //can be undefined, number
            priceToken: "NCO", 
            precision: 2, //decimal, how many commas the price can have.
            startDateMs,
            endDateMs,
            discountRate: 0.1, //set this for 0 on standard auctions. The rate in which the price of a Dutch auction is droped (0 - 1). e.g. 10% = 0.1
            discountInterval: 0.1 //set this for 0 on standard auctions. The time interval in seconds in which the Dutch auction price is dropped. e.g. Price drop every hour = 3600
            requestPermission: "", //string, can be undefined
            marketplace: "", //can be undefined, currently unused.

    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("transaction: {0}", res.TxID)
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


## Erase Auction
Erases an auction, as long as the auction has no bids.  
```typescript
nco.eraseAuction({ 
    
            requestPermission?: string;
            auctionId: string;
            accountName: "satoshi.io", //the owner of the assets and seller of the NFT's

    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("transaction: {0}", res.TxID)
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


## Place an auction bid
Erases an auction, as long as the auction has no bids.  
```typescript
nco.placeAuctionBid({ 
        accountName: "satoshi.io", //the owner of the assets and seller of the NFT's
        auctionId: "12345"; //the auction you are bidding on.
        amount: 10.0, //Number of the Bid.
        symbol: "", // The Token you want to pay in. Needs to be whitelisted during CreateAuction
        decimals: 2; //how many commas the amount can have
        marketplace?: string;
        requestPermission?: string;

    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("transaction: {0}", res.TxID)
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


## Claim the winning Bid as a seller
Retrieve your earnings 
```typescript
nco.claimAuctionWinBid({ 
        accountName: "satoshi.io", //the owner of the assets and seller of the NFT's
        requestPermission?: string;
        auctionId: "12345"; //the auction you are claiming.

    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("transaction: {0}", res.TxID)
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


## Claim the NFTs when you won the auction
Retrieve your new NFTs   
```typescript
nco.claimNftsFromAuction({ 
        accountName: "satoshi.io", //the user of the winning bid
        requestPermission?: string;
        auctionId: "12345"; //the auction you are claiming.

    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("transaction: {0}", res.TxID)
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