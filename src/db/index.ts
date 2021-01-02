import { connect, ConnectionOptions, set } from 'mongoose'
import config from '../config'

(async () => {
  const { DATABSE, HOST } = config.MONGO
  const mongooseOptions: ConnectionOptions = { useNewUrlParser: true, useUnifiedTopology: true }

  try {
    set('useCreateIndex', true)
    const db = await connect(`mongodb://${HOST}/${DATABSE}`, mongooseOptions)
    console.log(`Database "${db.connection.name}" connected`);

  } catch (err) {

    console.error(err)

  }
})()
