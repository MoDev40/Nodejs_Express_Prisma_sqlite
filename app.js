import server from './api/index.js';

const port = 4000;

server.listen(port,()=>{
    console.log(`Server started! on port ${port}`);
})
