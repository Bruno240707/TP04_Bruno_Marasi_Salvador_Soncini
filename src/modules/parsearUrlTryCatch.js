const url = require('url')

const parsearUrl = (url) => {
    try {
        const parsedUrl = new URL(url)

        const params = {};
        parsedUrl.searchParams.forEach((valor, i) => {
            params[valor] = value;
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
    catch (error){
        console.error("Error al parsear la URL:", error.message)
        return null
    }
}

module.exports = parsearUrl