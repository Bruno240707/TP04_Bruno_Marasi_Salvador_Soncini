
const parsearUrl = (url) => {
    const parsedUrl = new URL(url);
    const params = {};



    parsedUrl.searchParams.forEach((valor, i) => {
        params[i] = valor;
    })

    let objetoUrl = {
        host: `${parsedUrl.protocol}//${parsedUrl.host}`,
        pathname: parsedUrl.pathname,
        parametros: params
        
    }

    return {
        objetoUrl
    }
}

module.exports = parsearUrl