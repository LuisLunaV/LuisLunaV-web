import dotenv from 'dotenv';
dotenv.config({path: '.env'});

const {
PORT,
HOST_DB,
USER_DB,
PASS_DB,
NAME_DB
} = process.env;
   
export{
PORT,
HOST_DB,
USER_DB,
PASS_DB,
NAME_DB
}