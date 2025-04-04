const url = require('url')

const parsearUrl = (url) => {
    try {
        const parsedUrl = new URL(url)

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
    catch (error){
        console.error("Error al parsear la URL:", error.message)
        return null
    }
}

module.exports = parsearUrl