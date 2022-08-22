import * as ethers from ethers;

export default class Contract {
    constructor(address) {
        const abi = [
            "function mint(address to, string memory claimCode) external onlyOwner",
            "function claimed(string memory claimCode) external onlyOwner view returns (bool)",
        ];

        this.contract = new ethers.Contract(address, abi);
    }

    async isClaimed(claimCode) {
        return await this.contract.claimed(claimCode);
    }

    async claim(claimerAddress, claimCode) {
        const tx = await mint(claimerAddress, claimCode)
        return tx.wait();
    }
}