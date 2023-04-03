var bsServer = require('lwm2m-bs-server');

bsServer.on('ready', function () {
    bsServer.configure('urn:imei:000000000000004', [{
        serverURI: 'coap://127.0.0.1:5683'
    }]);

});

bsServer.on('bootstrapped', function () {
    console.log('bootstrapped');
});

bsServer.on('error', function (err) {
    console.log(err);
});

bsServer.start(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('>> lwm2m bootstrap server start!');
    }
});

bsServer.list("urn:imei:000000000000004")

bsServer.find("urn:imei:000000000000004")