const req = require("express/lib/request")
const res = require("express/lib/response")

// memanggil file model untuk siswa
let modelUser = require("../models/index").user



exports.getDataUser = (request, response) => {
    modelUser.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.addDataUser = (request, response) => {
    const md5 = require("md5")
    let password = md5(request.body.password)
 
    let newUser = {
        nama: request.body.nama,
        nickname: request.body.nickname,
        password: password
    }
    modelUser.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
  }
exports.editDataSiswa = (request, response) => {
    let id_user = request.params.id_user
    let dataUser = {
        nama: request.body.nama,
        nickname: request.body.nickname,
        password: md5(request.body.password)

    }
    modelUser.update(dataUser, {where: {id_user: id}})
    .then(result => {
        return response.json({
            message: `Data user berhasil diubah`
        })
    })
    .catch(error =>{
        return response.json({
            message: error.message
        })
    })

}
exports.deleteDataUser = (request, response) => {
    let id_user = request.params.id_user

    modelUser.destroy({ where: {id_user: id}})
    .then(result => {
        return response.json({
            message: `Data user berhasil dihapus`
        })
    })
    .catch(error =>{
        return response.json({
            message: error.message
        })
    })

}

