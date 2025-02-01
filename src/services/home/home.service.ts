import { Home } from '../../model/panel/home/home';
import { IHomeService } from './IHomeServices';
export class HomeServices implements IHomeService{
    async getHome(): Promise<any> {
       const resp = await Home.findAll();
       return resp; 
    }
    
    async createHome( data:any ):Promise<any>{
        const home = await Home.create( data );
        return home;
     }
  
     async updateStatusHome():Promise<void>{
        const statusUpdate = await Home.update({
            Home_Status: false
        },{
            where:{
                Home_Status:true
            }
        });
        console.log(statusUpdate);
        return;
     }
}