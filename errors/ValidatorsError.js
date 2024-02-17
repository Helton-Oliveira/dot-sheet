import IncorrectRequest from "./IncorrectRequest.js";

class ValidatorsError extends IncorrectRequest {
    constructor(error) {
        const messageError = Object.values(error.errors)
        .map(err => err.message)
        .join(';')

        super(`The following errors were found: ${messageError}`);
    }
}

export default ValidatorsError;