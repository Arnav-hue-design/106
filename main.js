const video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(stream => {
    video.srcObject = stream;
    video.play();
    video.width = 640;
    video.height = 480;
    video.style.display = 'block';
  });
  const video = document.querySelector('video');

  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(stream => {
      video.srcObject = stream;
      video.play();
    });
    const canvas = document.querySelector('canvas');
    const video = document.querySelector('video');
    const ctx = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const imgDataUrl = canvas.toDataURL('image/png');
    console.log(imgDataUrl);
<head>
  <script src="webcam.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.3.0/dist/tf.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/knn-classifier@2.0.2/dist/knn-classifier.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.1.0/dist/body-pix.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/facemesh@0.0.1/dist/facemesh.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/ml5@0.7.2/dist/ml5.min.js"></script>
</head>
console.log(ml5.version);
const classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/123456789/model.json', () => console.log('Model loaded'));
      