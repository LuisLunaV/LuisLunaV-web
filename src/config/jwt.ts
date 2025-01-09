import jwt from 'jsonwebtoken';
import { JWT_SEED } from './envs';

export class JwtAdapter{
    static generarToken( payload: Object, duration:string = '2h' ):Promise<string|null>{

       return new Promise(( resolve, reject )=>{
        jwt.sign( payload, JWT_SEED as string,{
            expiresIn: duration
        },( err, token )=>{
            if( err ){
                reject(`No se pudo generar el token: ${ err }`);
            }else{
                resolve( token! )
            }
        })
        });

    }

    static validarToken<T>( token:string ):Promise<T|null>{
        return new Promise(( resolve, reject )=>{
            jwt.verify( token, JWT_SEED as string, ( err, decode )=>{
                    if( err ){
                        reject( err );
                    }else{
                        resolve( decode as T );
                    }
            });
        });
    }
}