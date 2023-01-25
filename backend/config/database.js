const mongoose = require('mongoose');

const connentDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        
}).then(con => {
    console.log(`Mongodb connection established with HOST: ${connentDatabase.connection.host}`)
})
}
module.exports = connentDatabase;