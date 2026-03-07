const express = require("express")
const cors = require("cors")

const application = express()
const port = 3000

application.use(cors())

application.get("/coca", (req, res) => {
    res.send("Sua coca chegou!!!!!")
})

application.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})