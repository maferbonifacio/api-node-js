const express = require('express'); 
const router = express.Router(); 

const UsuariosController = require('../controllers/usuarios'); 
const Perfil_psicologoController = require('../controllers/perfil_psicologo'); 

router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

router.get('/perfil_psicologo', Perfil_psicologoController.listarPerfil_psicologo); 
router.post('/perfil_psicologo', Perfil_psicologoController.cadastrarPerfil_psicologo); 
router.patch('/perfil_psicologo', Perfil_psicologoController.editarPerfil_psicologo); 
router.delete('/perfil_psicologo', Perfil_psicologoController.apagarPerfil_psicologo); 


module.exports = router;