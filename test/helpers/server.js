import Hapi from 'hapi'
export const server = new Hapi.Server()
export default server

server.connection({host: 'localhost'})
