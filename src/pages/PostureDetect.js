import React, { useRef, useState, useEffect, useCallback } from "react";
import * as tf from "@tensorflow/tfjs";
import WebCamCapture from "./WebCamCapture.js";

function PostureDetect({ currentImage }) {
  const [postureStatus, setPostureStatus] = useState(null);

  const detect = async (net, currentImage) => {
    const img = tf.browser.fromPixels(currentImage);
    const resized = tf.image.resizeBilinear(img, [640, 480]);
    const casted = resized.cast("int32");
    const expanded = casted.expandDims(0);
    const obj = await net.executeAsync(expanded);

    const boxes = await obj[3].array();
    const classes = await obj[5].array();
    const scores = await obj[1].array();

    tf.dispose(img);
    tf.dispose(resized);
    tf.dispose(casted);
    tf.dispose(expanded);
    tf.dispose(obj);

    // Determine posture status
    let status = null;
    if (scores[0][0] > 0.5) {
      status = "good";
    } else {
      status = "bad";
    }

    // Update posture status
    setPostureStatus(status);
  };

  const runCoco = useCallback(async () => {
    // Load network
    const net = await tf.loadGraphModel(
      "https://geekfixx-model1.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
    );

    // Loop and detect hands
    setInterval(() => {
      detect(net, currentImage);
    }, 16.7);
  }, [currentImage]);

  useEffect(() => {
    runCoco();
  }, [runCoco]);

  useEffect(() => {
    if (postureStatus) {
      alert(`Posture is ${postureStatus}`);
    }
  }, [postureStatus]);

  return <div className="PostureDetect"></div>;
}

export default PostureDetect;
