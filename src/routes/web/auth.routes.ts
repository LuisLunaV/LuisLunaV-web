import { Router } from 'express';
import { check } from 'express-validator';
import { AuthController } from '../../controller/auth/auth.controller';

const router = Router();



router.post('/register',[
    check('User_Name', 'El campo nombre es obligatorio').not().isEmpty(),
    check('User_Email', 'El email es obligatorio').isEmail(),
], AuthController.register);

router.post('/login', AuthController.login );



export default router;