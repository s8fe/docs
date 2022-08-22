---
sidebar_position: 22
---
GPool contract swaps $NCO for Governance NCO with a ticker $GNCO, locks $NCO and distributes fees automatically according to the stake fee distribution structure. $GNCO tokens are minted after the lock and are burned when $NCO is unlocked and recovered by the owner. 

# GPool Actions
All GPool actions can be found in the [NewApi.pool-js SDK](https://github.com/Newcoin-Foundation/newcoin.pool-js)

## Staking

### Stake to the GPool
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

### Unstake instantly from the GPool
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


### Delayed unstake from the GPool
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


### Redeem a delayed unstake from the GPool
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


## Account management in the GPool

### open
Creates 0 balance account in balances table. 
```Javascript
 function open (owner, symbol, payer){
    ...
 }
```


### close
Closes 0 balance account in balances table. 
```Javascript
 function close (owner, symbol){
    ...
 }
```