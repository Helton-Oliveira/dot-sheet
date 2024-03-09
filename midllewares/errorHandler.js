import BaseError from "../errors/BaseError.js";
import ValidatorsError from "../errors/ValidatorsError.js";
import IncorrectRequest from "../errors/IncorrectRequest.js";
import mongoose from "mongoose";

function errorHandler(err, req, res, next) {
    console.log(err);

    if(err instanceof mongoose.Error.CastError) { 

        new IncorrectRequest().sendReply(res);

    } else if ( err instanceof mongoose.Error.ValidationError) {

        new ValidatorsError(err).sendReply(res);

    } else if (err instanceof BaseError) {

        err.sendReply(res);
        
    } else {
        new BaseError().sendReply(res)
    }

    next()
}

export default errorHandler;