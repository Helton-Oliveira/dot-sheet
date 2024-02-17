import NotFound from "../errors/NotFound.js";

function handler404(err, req, res, next) {
    const error404 = new NotFound()
    next(error404);
}

export default handler404;