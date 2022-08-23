import * as ddb from "@aws-sdk/client-dynamodb";

class CodeRepository {
    constructor(accessKeyId, secretAccessKey) {
        this.client = new ddb.DynamoDBClient({
            region: "us-east-1", credentials: {
                accessKeyId,
                secretAccessKey,
            }
        });
    }

    isValid(code) {

    }
}