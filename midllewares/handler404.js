import mongoose from "mongoose";
import NotFound from "../errors/NotFound.js";

function handler404(err, req, res, next) {
    if(!err.message.includes('Cast')) {
        const error404 = new NotFound(err.message).sendReply(res);
        next(error404);
    } else {
        next(err)
    }
}

export default handler404;