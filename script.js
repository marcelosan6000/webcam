document.getElementById('startButton').addEventListener('click', async () => {
    const video = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
        } catch (error) {
            console.error('Error accessing the camera: ', error);
        }
    } else {
        alert('Tu navegador no soporta acceso a la cámara.');
    }
});
