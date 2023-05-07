import React, { useState, useEffect } from "react";

function WebCamCapture(onImageCapture) {
  const [intervalId, setIntervalId] = useState(null);
  const [video, setVideo] = useState(null);
  const [captureChecked, setCaptureChecked] = useState(false);

  const handleCaptureCheckboxChange = (event) => {
    setCaptureChecked(event.target.checked);
  };

  useEffect(() => {
    let currentIntervalId;

    if (captureChecked) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          const currentVideo = document.createElement("video");
          currentVideo.srcObject = stream;
          currentVideo.play();
          setVideo(currentVideo);

          currentIntervalId = setInterval(() => {
            canvas.width = currentVideo.videoWidth;
            canvas.height = currentVideo.videoHeight;
            ctx.drawImage(currentVideo, 0, 0, canvas.width, canvas.height);
            const currentImage = canvas.toDataURL("image/png");
            console.log(onImageCapture);
            console.log(currentImage);
            onImageCapture = currentImage;
          }, 5000); // capture an image every 5 seconds
          setIntervalId(currentIntervalId);
        })
        .catch((err) => {
          console.error(`Error: ${err}`);
        });
    } else {
      clearInterval(intervalId);
      if (video) {
        video.pause();
        video.srcObject.getTracks().forEach((track) => track.stop());
      }
    }
  }, [captureChecked, onImageCapture]);

  return (
    <div>
      {/* <input
        id="capture-checkbox"  const [postureValue, setPostureValue] = useState(50);
  const handlePostureSliderChange = (event) => {
    setPostureValue(event.target.value);
  };
        type="checkbox"
        checked={captureChecked}
        onChange={handleCaptureCheckboxChange}
      />
      <label htmlFor="capture-checkbox">Capture images</label> */}

      <div className="preference-item">
        <img
          src="/images/back.svg"
          alt="Posture icon"
          class="preference-icon"
        />
        <h2>Posture Reminders</h2>

        <label className="toggle-switch">
          <input
            id="captu-checkbox"
            type="checkbox"
            checked={captureChecked}
            onChange={handleCaptureCheckboxChange}
          />
          <span className="slide round"></span>
        </label>
      </div>
    </div>
  );
}

export default WebCamCapture;
