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

## **Basic** _Sample_ Hardhat Project


```shell
#Télécharger l'image docker qu'on a build sur gitlab
docker pull docker.csm.ovh/stage-blockchain/my-wave-portal-back/master:95a0488a

#Exécuter l'image docker en mode interactif
docker run -it docker.csm.ovh/stage-blockchain/my-wave-portal-back/master:95a0488a sh

#run
npx hardhat run scripts/run.js

#deployer sur rinkeby
npx hardhat run scripts/deploy.js --network rinkeby

```
```

/app # npx hardhat run scripts/deploy.js --network rinkeby
(node:76) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
You are using a version of Node.js that is not supported by Hardhat, and it may work incorrectly, or not work at all.

Please, make sure you are using a supported version of Node.js.

To learn more about which versions of Node.js are supported go to https://hardhat.org/nodejs-versions
(node:87) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
WavePortal address:  0x62E0Ef6897cA557a8801F0E2e9FC182FFC5ccdE3 
```
voir le contract sur etherscan
https://rinkeby.etherscan.io/address/0x62E0Ef6897cA557a8801F0E2e9FC182FFC5ccdE3
