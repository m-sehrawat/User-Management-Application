const connect = require('./configs/db');
const app = require('./index');

const PORT = 8080;

app.listen(PORT, async ()=> {
    await connect();
    console.log(`listening to port: ${PORT}`);
});
