function handleFileShare(evt) {
    try {
      evt.responseWith(Response.redirect("./"))

      evt.waitUntil(async function() {
          const data = await evt.request.formData();
          const client = await self.clients.get(evt.resultingClientId);
          const file = data.get('file');
  
          client.postMessage({ file });
      })
    } catch {}
}

self.addEventListener('install', evt => {
  console.log('service worker installed');
});

self.addEventListener('fetch', evt => {
  const url = new URL(evt.request.url);

  if (evt.request.method === 'POST') {
    handleFileShare(evt);
  }
});
