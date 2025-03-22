const configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
let peerConnection;
let dataChannel;

// Signaling server simulation (replace with actual WebSocket server)
const signalingServer = {
    send: (data) => {
        console.log('Signaling Server Send:', data);
        // Simulate receiving the message on the other peer
        setTimeout(() => signalingServer.receive(data), 100);
    },
    receive: (data) => {
        console.log('Signaling Server Receive:', data);
        handleSignalingData(data);
    }
};

// Handle signaling data (SDP and ICE candidates)
function handleSignalingData(data) {
    if (data.type === 'offer') {
        createAnswer(data);
    } else if (data.type === 'answer') {
        peerConnection.setRemoteDescription(new RTCSessionDescription(data));
    } else if (data.candidate) {
        peerConnection.addIceCandidate(new RTCIceCandidate(data));
    }
}

// Create peer connection and data channel
async function createPeerConnection() {
    peerConnection = new RTCPeerConnection(configuration);

    // Handle ICE candidates
    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            signalingServer.send({ candidate: event.candidate });
        }
    };

    // Create data channel
    dataChannel = peerConnection.createDataChannel('fileTransfer');
    dataChannel.onopen = () => {
        document.getElementById('status').innerText = 'Data channel opened!';
    };
    dataChannel.onmessage = (event) => {
        document.getElementById('status').innerText = 'File received!';
        const file = new Blob([event.data], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'received_file';
        a.click();
    };
}

// Create offer
async function createOffer() {
    await createPeerConnection();
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    signalingServer.send(offer);
}

// Create answer
async function createAnswer(offer) {
    await createPeerConnection();
    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    signalingServer.send(answer);
}

// Send file over data channel
document.getElementById('sendFile').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            dataChannel.send(event.target.result);
            document.getElementById('status').innerText = 'File sent!';
        };
        reader.readAsArrayBuffer(file);
    }
});

// Start the connection
createOffer();