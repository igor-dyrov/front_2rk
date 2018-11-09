this.addEventListener('fetch', (event) => {
  if (event.request.url === 'http://localhost:7000/ping') {
    this.clients.matchAll({includeUncontrolled: true})
    .then((clients) => {
      clients.slice(1).forEach((client) => {
         client.postMessage({
           msg: 'hello!'
         });
      });
    })
  }
  console.log(event.request.url);

});

this.addEventListener('message', event => {
  console.log(event.data.msg, event.data.url);
});

this.addEventListener('install', (event) => {
  console.log('SW installed');
});