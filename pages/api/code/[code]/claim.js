import Contract from "../../../../lib/contract";

const contract = new Contract();

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { code } = req.query;
        const { address } = JSON.parse(req.body);

        try {
            const receipt = await contract.claim(address, code);
            return res.status(200).json(receipt);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}
