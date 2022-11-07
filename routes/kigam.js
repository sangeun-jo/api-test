var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('kigam', );
});

/*
router.get('/test1', function(req, res, next) {
    const key = '[발급받은 APIKEY]'

    const addr = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName='
    const addr2 = '&dataTerm=month&pageNo=1&numOfRows=10&ServiceKey='
    const addr3 = '&ver=1.3&_returnType=json'

    var myaddr = addr + encodeURI('서대문구') + addr2 + key + addr3

    request(myaddr, function(error, response, body){
        if(error){
            console.log(error)
        }
        var obj = JSON.parse(body)
        console.log(obj) // 콘솔창에 찍어보기
    });

    res.send("...");
});
*/
module.exports = router;