/**
 * File created to try to set Factory Bootstrap values
 * 
 * Server and Security LwM2M Objects are set in CoapNode.prototype.configure method from node_modules/coap-node/lib/coap-node.js file
 * 
 * Device LwM2M object is set in init.setupNode method from node_modules/coap-node/lib/init.js file
 */

var SmartObject = require('smartobject');
var CoapNode = require('coap-node');
 
const LwM2MVersion = "1.1"
const LwM2MServerLifetime = 59
const deviceName = "urn:imei:000000000000005"
const port = 5683

/** 
 * LwM2M SERVERS options
 */ 
// const localhost = '127.0.0.1'
const coiote = "eu.iot.avsystem.cloud"
const leshan = "leshan.eclipseprojects.io"
const useCoiote = true

// initialize Resources that follow IPSO definition
var LwM2MObjects = new SmartObject();


// Factory Bootstrap Initialization happening in CoapNode.prototype.configure method from node_modules/coap-node/lib/coap-node.js file

// Device initialization happening in init.setupNode method from node_modules/coap-node/lib/init.js file


// temperature object
LwM2MObjects.init(3303, 0, {
    sensorValue: 21,
    units: 'C',
    5702: {
        read: function (cb) {
            var time = new Date();
            cb(null, time.toString());
        }
    },
    5703: {
        write: function (val, cb) {     
            console.log('write ' + val);  
            cb(null, val);
        }
    },
    5704: {
        exec: function (val1, val2, cb) {
            console.log(val1 + ': Hello ' + val2 + '!');
            cb(null);
        }
    }
});

console.log(LwM2MObjects.objectList(), "Object list");

// Object initialization
var cnode = new CoapNode(deviceName, LwM2MObjects, {version:LwM2MVersion, "lifetime":LwM2MServerLifetime});

cnode.on('registered', function () {
    // If the registration procedure completes successfully, 'registered' will be fired
    // after registered, start your application
    console.log("registered successfully!!!!!")
});

cnode.register(useCoiote ? coiote : leshan, port, function (err, rsp) {
    console.log({err})
    console.log({rsp});      // { status: '2.05' }
});
