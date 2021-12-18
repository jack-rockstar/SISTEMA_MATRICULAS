import {config} from 'dotenv'
config();

export default{
    PORT:process.env.PORT||3000,
    USER:process.env.USER,
    PASS:process.env.PASS,
    SERVER:process.env.SERVER,
    DB:process.env.DB,
}
    