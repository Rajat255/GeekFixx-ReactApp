import React, { useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
function PostureDetect({ capturedImage, onPostureDetected }) {

  const runCoco = async () => {
    const net = await tf.loadGraphModel(
      "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/3"
    );

    setInterval(() => {
      detect(net, capturedImage);
    }, 1000);
  };

  const detect = async (net, capturedImage) => {
    if (capturedImage) {
      const img = tf.browser.fromPixels(capturedImage);
      const resized = tf.image.resizeBilinear(img, [224, 224]);
      const expanded = resized.expandDims(0).toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
      const predictions = await net.predict(expanded).array();

      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(expanded);

      const postureStatus = predictions[0] > 0 ? "Good" : "Bad";
      onPostureDetected(postureStatus);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return <div className="PostureDetect"></div>;
}

export default PostureDetect;
