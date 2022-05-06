# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

## Deploy/run the smart contract
```shell
#run
npx hardhat run scripts/run.js

#deployer sur rinkeby
npx hardhat run scripts/deploy.js --network rinkeby

#Télécharger l'image docker qu'on a build sur gitlab
docker pull docker.csm.ovh/stage-blockchain/my-wave-portal-back/master:95a0488a

#Exécuter l'image docker en mode interactif
docker run -it docker.csm.ovh/stage-blockchain/my-wave-portal-back/master:95a0488a sh
```
voir le contract sur etherscan :
https://rinkeby.etherscan.io/address/0xed8A56B4b028F731f57daF888e9E66f117494098