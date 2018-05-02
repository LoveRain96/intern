const app = require('express')();

app.set('config', require('./config'));

app.get('config').services.forEach(provider => provider(app));

app.listen(app.get('config').http.port);
