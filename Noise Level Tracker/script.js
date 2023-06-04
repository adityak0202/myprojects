const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const noiseLevelDisplay = document.getElementById('noise-level');

let mediaStream;
let audioContext;
let analyser;
let bufferLength;
let dataArray;

if ('AudioContext' in window || 'webkitAudioContext' in window) {
  audioContext = new (window.AudioContext || window.AudioContext)();
  analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);
} else {
  alert('Web Audio API is not supported in this browser.');
}

startButton.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaStream = stream;
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      updateNoiseLevel();
    })
    .catch(error => {
      console.error('Error accessing microphone:', error);
    });
});

stopButton.addEventListener('click', () => {
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
    mediaStream = null;
  }
});

function updateNoiseLevel() {
  const update = () => {
    analyser.getByteFrequencyData(dataArray);
    const average = getAverage(dataArray);

    noiseLevelDisplay.textContent = average + ' dB';

    requestAnimationFrame(update);
  };

  update();
}

function getAverage(array) {
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / array.length;
}
