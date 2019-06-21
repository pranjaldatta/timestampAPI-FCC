var express = require('express');
router = express.Router();

router.get("/" , (req , res) => {
    console.log("rendering index");
    res.render("index");
})

router.get('/hello' , (req , res) => {
    res.send("hello!");
})

router.get("/timestampapi/api/timestamp" , (req ,  res ) => {
    var date_string = req.query.param;
    var response = {
        "unix" : "",
        "utc" : "",
        "error" : ""
    }

    err = "ok";
    if(date_string !== ''){

        if(/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/.test(date_string) == true){
            var date = new Date(date_string);
        }else{
            err = "Invalid date";
        }
    }
    else{
        var date = new Date();
    }

    if(err !== "Invalid date"){
        var  unix = date.getTime();
        var utc = date.toUTCString();
    }

    if(err == "ok"){
        response.unix = unix;
        response.utc = utc ;
        response.error = err;
    }else{

        response.error = err;
    }

    res.json(response);

})

module.exports = router;