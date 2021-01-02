import server from './server'
import './db'

server.listen(server.get('port'), () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${server.get('port')}`)
})