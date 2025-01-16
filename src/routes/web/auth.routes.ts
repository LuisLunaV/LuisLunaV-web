import { Router } from 'express';
import { check } from 'express-validator';
import { validateProperties } from '../../middlewares/validate-properties';
import { emailExiste } from '../../config/validadores-database';
import { AuthController } from '../../controller/auth/auth.controller';

const router = Router();

router.get('/register', AuthController.renderRegister);

router.get('/login', AuthController.renderLogin);

router.post('/register',[
    check('User_Name', 'El campo nombre es obligatorio').not().isEmpty(),
    check('User_Email', 'El email es obligatorio').isEmail().custom( emailExiste ),
    check('User_Password', 'El password es obligatorio')
    .not().isEmpty()
    .isLength({min:10}).withMessage('El password debe tener minimo 10 caracteres')
    .matches(/[0-9]/).withMessage('Agrega almenos un valor numerico')
    .matches(/[\W_]/).withMessage('Agrega almenos un caracter especial:$@%_!?'),
    validateProperties
], AuthController.register);

router.post('/login',[
    check('User_Email', 'El email es obligatorio').isEmail(),
    check('User_Password', 'El password es obligatorio').not().isEmpty(),
    validateProperties
], AuthController.login );


export default router;