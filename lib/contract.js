import * as ethers from "ethers";

export default class Contract {
    constructor() {
        const abi = [
            "function mint(address to, string memory claimCode) external onlyOwner",
            "function claimed(string memory claimCode) external onlyOwner view returns (bool)",
        ];

        const provider = new ethers.providers.JsonRpcProvider(process.env.GNOSIS_RPC_URL);
        const signer = new ethers.Wallet(process.env.WALLET_KEY, provider);
        this.contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi).connect(signer);
    }

    isClaimed(claimCode) {
        return this.contract.claimed(claimCode);
    }

    async claim(claimerAddress, claimCode) {
        const tx = await mint(claimerAddress, claimCode)
        return tx.wait();
    }
}