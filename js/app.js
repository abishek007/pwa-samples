if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => {
      console.log("service worker registered", reg);
      navigator.serviceWorker.onmessage = (evt) => {
        const file = evt?.data?.text;
        const url = window.URL.createObjectURL(file);
        const ele = document.getElementById("txt");
        ele.innerText = url || "Some";

        const imgElement = document.createElement("img");
        imgElement.src = url;
        if (imgElement && imgElement.src) {
          ele.appendChild(imgElement);
        }
        // alert(file);
        // const img = new Image();
        // const url = URL.createObjectURL(file);
        // img.src = url;
        // if (img?.src) {
        //     document.body.append(img);
        // }
      };
    })
    .catch((err) => console.log("service worker not registered", err));
}

const url = new URL(window.location.href);

// Get the value of the 'title' query parameter
const title = url.searchParams.get("title") || "";
// Check if 'title' exists and display it
const ele = document.getElementById("txt");
const imgElement = document.createElement("img");
ele.innerText = title || "Happy";
// const img = new Image();
// const url = URL.createObjectURL(title);

/*
if (title && title[0]) {
  ele.innerText = 'two'
  const temp = URL.createObjectURL(title);
  if (temp) {
    ele.innerText = temp;
  }
  // imgElement.src = URL.createObjectURL(title[0]);
  if (imgElement && imgElement.src) {
    ele.appendChild(imgElement);
  }
}
*/

if (title) {
  console.log("Value of 'title' query parameter:", title);
} else {
  console.log("'title' query parameter not found in the URL.");
}

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const snapButton = document.getElementById("snap");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (stream) {
    video.srcObject = stream;
    video.play();
  })
  .catch(function (error) {
    console.error("Error accessing the camera: ", error);
  });

snapButton.addEventListener("click", function () {
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  /*
  canvas.toBlob(function(blob) {
    const formData = new FormData();
    formData.append('photo', blob, 'photo.png');

    fetch('https://your-backend-api.com/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, 'image/png');
  */
});
