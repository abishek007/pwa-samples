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