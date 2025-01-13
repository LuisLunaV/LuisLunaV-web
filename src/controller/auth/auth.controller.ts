import { Request, Response } from 'express';
import { User } from '../../model/auth/users';
import { BcryptAdapter } from '../../config/bcrypt';
import { JwtAdapter } from '../../config/jwt';


export class AuthController{

    static renderRegister( req:Request, res:Response ){
        try {
            res.render('register', {
                title: 'register'
            });

        } catch (error) {
            res.status(500).json({
                'Erro':`Internal server error. ${ error }`
            });
        }
    }

    static renderLogin( req:Request, res:Response ){
        try {
            res.render('login', {
                title: 'login'
            });

        } catch (error) {
            res.status(500).json({
                'Erro':`Internal server error. ${ error }`
            });
        }
    }

     static async register( req:Request, res:Response):Promise<void>{
        try {
            const { User_Name, User_Email, User_Password } = req.body;

            const hashPassword = BcryptAdapter.hash;

            const data = { 
                User_Name:User_Name.toUpperCase(), 
                User_Email:User_Email, 
                User_Password: hashPassword( User_Password )
            };
            
            const user = await User.create( data );

            res.status(201).json({
               'status':201,
               'message':'Usuario registrado',
               user
           });

        } catch (error) {
            res.status(500).json({
                'Erro':`Internal server error. ${ error }`
            });
        }
    }

    static async login( req:Request, res:Response ):Promise<any>{
      try {
        const { User_Email, User_Password } = req.body;

       const user = await User.findOne({ where:{ User_Email } });

       if( !user ){
        return res.status(401).json({
            "status": 401,
            "error": "Unauthorized",
            "message": "El usuario no existe."
        });
       }

       const comparePassword = BcryptAdapter.compare;
       const isMatched = comparePassword( User_Password, user!.User_Password);

       if( !isMatched ){
           return res.status(401).json({
            "status": 401,
            "error": "Unauthorized",
            "message": "El password es incorrecto."
        });
       }
       
       const token = await JwtAdapter.generarToken({
        id:user.User_Id,
        name: user.User_Name,
        email: user.User_Email
       });

       res.cookie('x-token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 2 * 60 * 60 * 1000 
       })

       res.status(200).json({
           id:user.User_Id,
           name:user.User_Name,
           email:user.User_Email
       });
       
      } catch (error) {
        res.status(500).json({
              'Erro':`Internal server error. ${ error }`
        });
      }
    }
}