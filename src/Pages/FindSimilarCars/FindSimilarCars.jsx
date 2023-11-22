import React, { useState } from "react";

function FindSimilarCars() {
  const [predictionResult, setPredictionResult] = useState(null);

  const predictCarModel = async (e) => {
    e.preventDefault();

    const inputElement = document.getElementById('imageUpload');
    const file = inputElement.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('carImage', file);

      try {
        const response = await fetch('https://carrecognition-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/689834ad-aad7-4a05-8e70-ecbda0b5c8ca/classify/iterations/Iteration2/image', {
          method: 'POST',
          headers: {
            "Prediction-key": "3c96e89a04f340bbbe3b8afb6028349d"
          },
          body: formData,
        });

        if (response.ok) {
          await response.json()
          .then((data) => {
            setPredictionResult(data.predictions);
          })
        //   setPredictionResult(result);
        } else {
          console.error('Error predicting car model:', response.statusText);
        }
      } catch (error) {
        console.error('Error predicting car model:', error.message);
      }
    }
  }

  const displayPredictionResult = () => {
    if (predictionResult && predictionResult.length > 0) {
        console.log(predictionResult)
        const highestProbabilityTag = predictionResult.reduce((prev, current) => {
            return prev.probability > current.probability ? prev : current;
        })
      return <p>Prediction Result: {JSON.stringify(highestProbabilityTag.tagName)}</p>;
    }
    return null;
 };

  return (
    <div>
      <h1>Find Similar Cars</h1>
      <form onSubmit={predictCarModel} encType="multipart/form-data">
        <label htmlFor="imageUpload">Upload a car image:</label>
        <input type="file" id="imageUpload" accept="image/*" name="carImage" />
        <button type="submit">Predict</button>
      </form>
      {displayPredictionResult()}
    </div>
  );
}

export default FindSimilarCars;