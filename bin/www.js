var app = require("../server/server");

var  port = 8001;

app.listen(port , () => {
    console.log('Port Running at : ' , port);

})