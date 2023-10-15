if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/serviceworker.js')
    .then(reg => {
        console.log('service worker registered', reg)
        navigator.serviceWorker.onmessage = (evt) => {
            const file  = evt.data.file;
            const img = new Image();
            const url = URL.createObjectURL(file);

            img.src = url;

            document.body.append(img);
        }
    })
    .catch(err => console.log('service worker not registered', err));
}