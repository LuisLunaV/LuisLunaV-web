import { Router } from 'express';
import { validateJWT } from '../../middlewares/validate-jwt';
import { validateProperties } from '../../middlewares/validate-properties';
import { HomeController } from '../../controller/home.controller';
const router = Router();

router.get('/',[
    validateJWT,
    validateProperties
],HomeController.homeRender);

export default router;