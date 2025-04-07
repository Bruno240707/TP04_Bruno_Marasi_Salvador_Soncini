const { getAllInfoByISO } = require("iso-country-currency")

const moneda = getAllInfoByISO("SE").currency
console.log(moneda)