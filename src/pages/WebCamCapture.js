import React, { useState, useEffect } from "react";
import PostureDetect from "./PostureDetect";

function WebCamCapture() {
  const [intervalId, setIntervalId] = useState(null);
  const [video, setVideo] = useState(null);
  const [captureChecked, setCaptureChecked] = useState(false);
  const [backValue, setBackValue] = useState(50);

  let [currentImage, setCurrentImage] = useState("");

  const handleBackSliderChange = (event) => {
    setBackValue(event.target.value);
  }

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
            currentImage = canvas.toDataURL("image/png");
            // console.log(typeof onImageCapture);
            let image = new Image();
            image.src = currentImage;
            setCurrentImage(image);

          }, 30000); // capture an image every 5 seconds
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
  }, [captureChecked]);

  return (
    <div>
      <PostureDetect currentImage={currentImage} />
      <div className="preference-item">
        <img
          src="/images/back.svg"
          alt="Posture icon"
          className="preference-icon"
        />
        <h2>Posture Reminders</h2>
        <input
          type="range"
          min="1"
          max="100"
          value={backValue}
          className="slider"
          onChange={handleBackSliderChange}
        />
        <span className="slider-value">{backValue}</span>
        <label className="toggle-switch">
          <input
            id="capture-checkbox"
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
