const express = require(`express`)
const app = express()

app.use(express.json())

// call siswa controller
let userController = require("../controllers/userController")

// endpoint get data siswa
app.get("/", userController.getDataSiswa)

// endpoint add data siswa
app.post("/", userController.addDataSiswa)

// endpoint edit siswa
app.put("/:id_user", userController.editDataSiswa)

// endpoint delete siswa
app.delete("/:id_user", userController.deleteDataSiswa)

module.exports = app
