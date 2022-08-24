import faunadb from "faunadb";

export default class CodeRepository {
    constructor() {
        this.client = new faunadb.Client({
            secret: process.env.FAUNADB_SECRET,
        });
    }

    async isValid(code) {
        let query = await this.client.query(Get(Match(Index("codes_by_code"), code)));
        return query.data;
    }
}