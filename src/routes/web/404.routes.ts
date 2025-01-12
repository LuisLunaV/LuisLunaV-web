import { Router, Request, Response } from 'express';

const router = Router();

router.all('*',( req:Request, res:Response )=>{
    try {
        res.status(404).redirect('auth/login');
    } catch (error) {
        res.status(500).json({
            'Erro':`Internal server error. ${ error }`
        });
    }
});

export default router;