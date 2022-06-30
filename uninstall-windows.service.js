var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'QCBSSE',
  description: 'Qlik Sense QCB extension',
  script: 'C:\\QlikSSE\\qcb-qlik-sse\\index.js',
  workingDirectory: 'C:\\QlikSSE\\qcb-qlik-sse'
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

// Uninstall the service.
svc.uninstall();
