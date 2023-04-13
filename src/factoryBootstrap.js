/**
 * File created to try to set Factory Bootstrap values
 * 
 * Server and Security LwM2M Objects will be created
 * 
 * The LwM2M server is coap://leshan.eclipseprojects.io:5683
 */

var SmartObject = require('smartobject');
var CoapNode = require('coap-node');
 
const LwM2MVersion = "1.1"
const LwM2MServerLifetime = 180
const deviceName = "urn:imei:000000000000005"
const port = 5683

/** 
 * LwM2M SERVERS options
 */ 
// const localhost = '127.0.0.1'
// const coiote = "eu.iot.avsystem.cloud"
const leshan = "leshan.eclipseprojects.io"

// initialize Resources that follow IPSO definition
var LwM2MObjects = new SmartObject();


/**
 * Object: LWM2M Security
 * Link: https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/0-1_1.xml
 */
so.init(0, 0, {
    0: "coap://leshan.eclipseprojects.io:5683", // LWM2M  Server URI
    1: false, // Bootstrap-Server
    2: 3, // Security Mode
    3: "",// ** Public Key or Identity
    4: "",// ** Server Public Key
    5: "",// ** Secret Key
    10: 1 // Short Server ID

});


/**
 * Object: LWM2M Server
 * Link: https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/1-1_1.xml
 */
so.init(1, 0, {
    0: 1, // Short Server ID
    1: 180, // Lifetime
    6: false, // Notification Storing When Disabled or Offline
    7: "U",// Binding
    8: "true",// Registration Update Trigger
});



LwM2MObjects.objectList();


var cnode = new CoapNode(deviceName, LwM2MObjects, {version:LwM2MVersion, "lifetime":LwM2MServerLifetime});

cnode.on('registered', function () {
    // If the registration procedure completes successfully, 'registered' will be fired
    // after registered, start your application
    console.log("registered successfully!!!!!")
});

cnode.register(leshan, port, function (err, rsp) {
    console.log({err})
    console.log({rsp});      // { status: '2.05' }
});