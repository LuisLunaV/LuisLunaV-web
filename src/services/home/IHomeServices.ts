export interface IHomeService{
    getHome():Promise<any>;
    createHome( data:any ):Promise<any>;
    updateStatusHome():Promise<void>;
}
