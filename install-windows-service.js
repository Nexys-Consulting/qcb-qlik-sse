var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'QCBSSE',
  description: 'Qlik Sense QCB extension',
  script: 'C:\\QlikSSE\\qcb-qlik-sse\\index.js',
  workingDirectory: 'C:\\QlikSSE\\qcb-qlik-sse'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();