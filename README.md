# Understanding LwM2M arch
Interact with LwM2M architecture components: Client, Server and Bootstrap Server. 

* Client: https://github.com/PeterEB/coap-node
* Server: https://github.com/telefonicaid/lwm2m-node-lib 
* Bootstrap: https://github.com/PeterEB/lwm2m-bs-server

> Tried to use https://github.com/PeterEB/coap-shepherd as the server but repo was not able to download. 

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
