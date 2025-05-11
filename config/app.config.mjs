import dotevn from "dotenv";

dotevn.config();

const configurations = {
  serverConfig: {
    host: process.env.HOST,
    port: process.env.PORT,
  },
  databaseConfig : {
    
  }
};
export default configurations;
