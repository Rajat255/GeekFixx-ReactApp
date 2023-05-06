import React, { useState, useEffect } from "react";
import PostureDetect from "./PostureDetect";

function WebCamCapture() {
  const [intervalId, setIntervalId] = useState(null);
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);
  const [postureValue, setPostureValue] = useState(50);
  const [captureChecked, setCaptureChecked] = useState(false);

  const handlePostureSliderChange = (event) => {
    setPostureValue(event.target.value);
  };

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
            setImage(currentImage);
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
  }, [captureChecked]);

  return (
    <div className="preference-item">
      <img
        src="/images/back.svg"
        alt="Posture icon"
        className="preference-icon"
      />
      <h2>Posture Reminders</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={postureValue}
        className="slider"
        onChange={handlePostureSliderChange}
      />
      <span className="slider-value">{postureValue}</span>

      <label className="toggle-switch">
        <input
          type="checkbox"
          id="capture-checkbox"
          checked={captureChecked}
          onChange={handleCaptureCheckboxChange}
        />
        <span className="slide round"></span>
      </label>

      {image && <PostureDetect image={image} />}
    </div>
  );
}

export default WebCamCapture;
