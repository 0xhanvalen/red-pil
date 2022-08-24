import * as ethers from ethers;

export default class Contract {
    constructor() {
        const abi = [
            "function mint(address to, string memory claimCode) external onlyOwner",
            "function claimed(string memory claimCode) external onlyOwner view returns (bool)",
        ];

        this.contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi);
    }

    isClaimed(claimCode) {
        return this.contract.claimed(claimCode);
    }

    async claim(claimerAddress, claimCode) {
        const tx = await mint(claimerAddress, claimCode)
        return tx.wait();
    }
}