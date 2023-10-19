// function handleFileShare(evt) {
//     try {
//       evt.responseWith(Response.redirect("./"))
// 
//       evt.waitUntil(async function() {
//           const data = await evt.request.formData();
//           const client = await self.clients.get(evt.resultingClientId);
//           const file = data.get('file');
//   
//           client.postMessage({ file });
//       })
//     } catch {}
// }

self.addEventListener('install', evt => {
  self.skipWaiting();
  console.log('service worker installed');
});

self.addEventListener("activate", (event) => {});
/*
self.addEventListener('fetch', evt => {
  // const url = new URL(evt.request.url);

  if (evt.request.method === 'GET') {
    // handleFileShare(evt);
    // self.clients.get(evt.resultingClientId).then((client) => {
    //   client.postMessage({ file: 'Hello 222' });
    // })
    evt.responseWith((() => {
      // const formdata = await evt.request.formData();
      // const title = formdata.get('title') || 'One';
      const responseUrl = `/?title=One`
      return Response.redirect(responseUrl, 303);
      // const data = [...formdata.entries()]
    })())
  }
});
*/
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (event.request.method === 'POST' && url.pathname === '/post-shared-content') {
      event.respondWith((async () => {
          const data = await event.request.formData();

          const title = data.get('file') || 'Five';
          const text = 'Five';
          const url = data.get('url');
          //const temp = self.URL.createObjectURL(title)
          // const client = await self.clients.get(event.resultingClientId);
          // client.postMessage({ file: title });
          // Do something with the shared data here.

          return Response.redirect(`/?title=${event.resultingClientId}`, 303);
      })());
  }
});