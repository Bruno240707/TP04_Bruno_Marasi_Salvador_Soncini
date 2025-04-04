const { getAllInfoByISO } = require("iso-country-currency")

const moneda = getAllInfoByISO("US").currency
console.log(moneda)