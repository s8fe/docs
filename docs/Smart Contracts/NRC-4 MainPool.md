---
sidebar_position: 15
---
MainPool contract swaps $NCO for Governance NCO with a ticker $GNCO, locks $NCO and distributes fees automatically according to the stake fee distribution structure. $GNCO tokens are minted after the lock and are burned when $NCO is unlocked and recovered by the owner. 

# MainPool Actions
All MainPool actions can be found in the [NewApi.pool-js SDK](https://github.com/Newcoin-Foundation/newcoin.pool-js)

## Staking

### Stake to the MainPool
```Javascript
 function stake (from, quantity){
    ...
 }
```
<details>

<summary>Requires: Account, Errors: ?</summary>
Requires: Authorization from Account
Errors:

</details>

### Unstake instantly from the MainPool
```Javascript
 function instunstake (from, quantity){
    ...
 }
```
<details>

<summary>Requires: Account, Errors: ?</summary>
Requires: Authorization from Account
Errors:

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


## Accounts

### open
Creates 0 balance account in balances table. 
```Javascript
 function open (owner, symbol, payer){
    ...
 }
```


### open
Creates 0 balance account in balances table. 
```Javascript
 function close (owner, symbol){
    ...
 }
```