if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => {
        console.log('service worker registered', reg)
        navigator.serviceWorker.onmessage = (evt) => {
            const file  = evt?.data?.file;
            alert(file);
            // const img = new Image();
            // const url = URL.createObjectURL(file);

            // img.src = url;

            // if (img?.src) {
            //     document.body.append(img);
            // }
        }
    })
    .catch(err => console.log('service worker not registered', err));
}

const url = new URL(window.location.href);

// Get the value of the 'title' query parameter
const title = url.searchParams.get('title');
// Check if 'title' exists and display it
const ele = document.getElementById('txt');
ele.innerText = title;
if (title) {
  console.log("Value of 'title' query parameter:", title);
} else {
  console.log("'title' query parameter not found in the URL.");
}