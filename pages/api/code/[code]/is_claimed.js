import CodeRepository from "../../../../lib/code_repository";
import Contract from "../../../../lib/contract";

const repository = new CodeRepository();
const contract = new Contract();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { code } = req.query;

        const foundCode = await repository.isValid(code);
        if (!foundCode) {
            return res.status(404).end();
        }

        const claimed = await contract.isClaimed(code);
        if (claimed) {
            return res.status(404).end();
        }

        res.status(200).end();
    }
}
