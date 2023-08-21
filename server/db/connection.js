const mongoose = require('mongoose');

const url = `mongodb://127.0.0.1:27017/chat`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))