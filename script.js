const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt user to select media stream, pass to video element, then play

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.onplay()
        }
    } catch (error){
        // Catch error here
        console.log("You got an error:", error)
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false
})

// On Load
selectMediaStream()