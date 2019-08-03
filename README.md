# FTCfinalExam22
FTC final exam question 2.2

Instead of starting a kickstarter campaign, Co wants to use a token bonding curve to sell his
shoes.
The Token
Issuance: A fungible token called “CO”
Supply: 100, this is the number of shoes Co wants to produce
The Bond
Collateral: ETH, CO tokens are bought in ETH
The Traded Asset or Objective: The shoes, 1 pair cost one “CO”
Curve function: f(x) = 0.01x + 0.2 , x ∈ ℕ
Pricing: static pricing
Specialty
Only Co is allowed to sell tokens back to the curve.
Tasks
1. Create a truffle project
2. Write a smart contract to issue CO tokens:
a. Make the contract “ownable”
b. Implement the ERC20 functionalities
c. Implement a buyPrice function that calculates the price for the purchase of n
CO tokens based on the curve defined above.
d. Implement a sellPrice function that calculates the price for the sale of n CO
tokens based on the curve defined above.
e. Implement a mint function that creates tokens if the correct current price is
transferred to the contract. The price is determined by the buyPrice function.
f. Implement a burn function that can only be called by the owner (i.e., only the
owner can sell tokens back to the curve and withdraw the funds). The price is
determined by the sellPrice function.
g. Implement a destroy function that destructs the contract (see
selfdestruct). This function can only be called by the owner and it can only
be called if all CO tokens belong to the owner.
3. Test the following functions:
a. mint
b. burn
c. destroy
4. Compile your contract
5. Include a 2_deploy_contract.js in the migrations folder
6. Deploy your contract to a network of your choice (this can be an emulated network)
7. In addition to submitting on github, please hand in a complete zip file including the truffle
project.
