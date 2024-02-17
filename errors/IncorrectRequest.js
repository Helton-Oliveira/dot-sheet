import BaseError from "./BaseError.js";

class IncorrectRequest extends BaseError {
    constructor(message = 'One or more data provided is incorrect') {
        super(message, 400);
    }
}

export default IncorrectRequest;