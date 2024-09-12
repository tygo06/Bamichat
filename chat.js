const firebaseConfig = {
  apiKey: "AIzaSyB6URdyAWqjfdNXNV80Y4fPOdmkIu0vXDo",
  authDomain: "bamischijf-aa0b3.firebaseapp.com",
  projectId: "bamischijf-aa0b3",
  storageBucket: "bamischijf-aa0b3.appspot.com",
  messagingSenderId: "215325015609",
  appId: "1:215325015609:web:3aab4ccc37546a75fb57e8",
  measurementId: "G-HRFTH7GBE8"
};

// Initialiseer Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatBox = document.getElementById('chat-box');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        database.ref('messages').push().set({
            message: message
        });
        messageInput.value = '';
    }
});

database.ref('messages').on('child_added', (snapshot) => {
    const message = snapshot.val().message;
    const div = document.createElement('div');
    div.textContent = message;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
});