import dotenv from 'dotenv'
dotenv.config() // va a leer las variables de entorno

export default {
  MONGO: {
    DATABSE: process.env.MONGO_DATABASE || 'lcp-users',
    USER: process.env.MONGO_USER || 'admin',
    PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.MONGO_PORT || '271017',
  },
  API: {
    PORT: process.env.PORT || 4000,
  }
}