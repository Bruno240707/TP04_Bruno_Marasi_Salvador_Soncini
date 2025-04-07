const url = require('url')

const parsearUrl = (url) => {
    const parsedUrl = new URL(url);

    const params = {};
    parsedUrl.searchParams.forEach((value, key) => {
        params[key] = value;
    })

    return {
        host: `${parsedUrl.protocol}//${parsedUrl.host}`,
        pathname: parsedUrl.pathname,
        parametros: params
    }
}

module.exports = parsearUrl