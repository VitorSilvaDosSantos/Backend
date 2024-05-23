const express = require('express')
const router = express.Router()

const AutenticacaoController = require('../controllers/AutenticacaoControler')

const { usuarioValidador, loginValidador } = require('../validators/AutenticacaoValidators')


router.post('/auth/registro', usuarioValidador, AutenticacaoController.registrar)

router.post('/auth/login', loginValidador, AutenticacaoController.login)


module.exports = router