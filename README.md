# Understanding LwM2M arch
Interact with LwM2M architecture components: Client, Server and Bootstrap Server. 

* Client: https://github.com/PeterEB/coap-node
* Server: https://github.com/telefonicaid/lwm2m-node-lib 
* Bootstrap: https://github.com/PeterEB/lwm2m-bs-server

> Tried to use https://github.com/PeterEB/coap-shepherd as the server but repo was not able to download. 

## Install
```
npm install
```

## Factory Bootstrap
To execute the factory bootstrap is required to run the next command 

```
node src/factoryBootstrap.js
```

LwM2M Servers:

* Coiote
* Leshan
* Localhost

To make sure which LwM2M Server is used, please check `src/factoryBootstrap.js line 20` and `node_modules/coap-node/lib/coap-node.js line 236`

By executing the Factory Bootstrap there is also trigered the `Register` and then the `Device Management` interface

### Register
It is called in `register method from src/factoryBootstrap.js file` and defined in `CoapNode.prototype.register method from node_modules/coap-node/lib/coap-node.js file`. The objects defined in this process are: 0, 1, 3, and 4. 

The objects are defined in: 
* Server and Security: `CoapNode.prototype.configure method from node_modules/coap-node/lib/coap-node.js file`
* Device: `init.setupNode method from node_modules/coap-node/lib/init.js file`

### Device Management
The `GET` request from LwM2M Server is received in `_handle method from node_modules/coap/lib/server.js file`

## Connection Client-Server
### Run Server
```
bin/iotagent-lwm2m-server.js

start
```

### Run Client
```
node src/client.js
```


## Connection Client-Bootstrap Server

### Run Client
```
node src/bootstrap.js
```

### Run Bootstrap server
```
node src/bootstrap-server/index.js
```
> Bootstrap server is not working as expected. 
