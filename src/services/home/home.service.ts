import { Home } from '../../model/panel/home/home';
import { IHomeService } from './IHomeServices';
export class HomeServices implements IHomeService{
    async getHome(): Promise<any> {
       const resp = await Home.findAll();
       return resp; 
    }
    
    async createHome( data:any ):Promise<any>{
        try{
            const home = await Home.create( data );
            return home;      
        }catch( error ){
            console.error('Error en createHome:', error);
            throw new Error('Error al crear los mensajes de inicio - home');
        }
     }
  
     async updateStatusHome():Promise<void>{
        try{
            const statusUpdate = await Home.update({
                Home_Status: false
            },{
                where:{
                    Home_Status:true
                }
            });
    console.log(statusUpdate);
            return;
        }catch( error ){
               console.error('Error en updateStatusHome:', error);
            throw new Error('Error al actualizar los status de los mensajes de inicio')
        }
     }
}