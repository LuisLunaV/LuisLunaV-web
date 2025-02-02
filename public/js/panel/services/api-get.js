export const getInformation = async( url )=>{
    try {
        const resp = await fetch(url,{
            method: 'GET',
            headers:{
                "Content-Type": "application/json"
            },
            credentials: 'include'
        });
    
        if( resp.ok ){
            const data = await resp.json();
            return data;
        }else{
            const error = await resp.json();
            throw error;
        }
    } catch (error) {
        throw error ;   
    }
    }