const {URL} = require("url");

function parseUrl(req){
    const base = `http://${req.headers.host}`;
    const url = new URL(req.url,base);

    return {
        pathname:url.pathname,
        searchParams:url.searchParams
    };
}
module.exports = parseUrl;