function handleFileShare(evt) {
    evt.responseWith(Response.redirect("/?share-target"))

    evt.waitUntil(async function() {
        const data = await evt.request.formData();
        const client = await self.clients.get(evt.resultingClientId);
        const file = data.get('file');

        client.postMessage({ file });
    })
}

self.addEventListener('install', evt => {
  console.log('service worker installed');
});

self.addEventListener('fetch', evt => {
  const url = new URL(evt.request.url);

  if (url.origin === location.origin && url.searchParams.has("share-target") && evt.request.method === 'POST') {
    handleFileShare(evt);
  }
});
