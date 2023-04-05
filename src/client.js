var SmartObject = require('smartobject');
var CoapNode = require('coap-node');
 
// initialize Resources that follow IPSO definition
var so = new SmartObject();
 
// initialize your Resources
// oid = 'temperature', iid = 0
so.init('temperature', 0, {
    sensorValue: 21,
    units: 'C'
});

console.log(so)

var cnode = new CoapNode('urn:imei:000000000000005', so, {version:'1.2', "lifetime":180});

cnode.on('registered', function () {
    // If the registration procedure completes successfully, 'registered' will be fired

    // after registered, start your application

    console.log("registered successfully")
});


// register to a Server with its ip and port

// const localhost = '127.0.0.1'
const coiote = "eu.iot.avsystem.cloud"

cnode.register(coiote, 5683, function (err, rsp) {
    console.log({err})
    console.log({rsp});      // { status: '2.05' }
});