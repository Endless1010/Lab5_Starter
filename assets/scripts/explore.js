// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textarea = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('#explore img');

  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  talkButton.addEventListener('click', () => {
    const text = textarea.value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoice = speechSynthesis.getVoices().find(
      (v) => v.name === voiceSelect.value
    );
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face open';
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    speechSynthesis.speak(utterance);
  });
}
