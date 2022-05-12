const API_KEY = process.env.API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const contract = require("../artifacts/contracts/WavePortal.sol/WavePortal.json")

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(
    (network = "rinkeby"),
    API_KEY
)

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider)

// contract instance
const myWavePortalContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contract.abi,
    signer
)

async function main() {
    const nbr = await myWavePortalContract.getTotalWaves()
    console.log("Il y a un total de " + nbr + " waves qui ont été envoyés.")
}
main()