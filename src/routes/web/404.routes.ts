import { Router, Request, Response } from 'express';

const router = Router();

router.all('*', async (req: Request, res: Response): Promise<void> => {
    try {
        const staticExtensions = ['.css', '.js', '.map', '.ico', '.png', '.jpg'];
        const isStaticResource = staticExtensions.some((ext) =>
            req.originalUrl.endsWith(ext)
        );

        if (isStaticResource) {
            res.status(404).send('Archivo no encontrado');
            return; // Detenemos la ejecución aquí
        }

        // Redirigir al login para otros recursos
        res.status(404).redirect('/auth/login');
    } catch (error) {
        res.status(500).json({
            'Erro': `Internal server error. ${error}`
        });
    }
});

export default router;
