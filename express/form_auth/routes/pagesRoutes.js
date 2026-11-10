

const express = require('express')

 const pagesRoutes = express.Router()

pagesRoutes.use(express.static('pages'))

module.exports=pagesRoutes