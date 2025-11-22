import { useState } from "react";
import { uploadImage, retrieveImage } from "../sdk/musicShopSDK";
import "./MusicShopUI.css";

export const MusicShopUI = () => {
  const [claimId, setClaimId] = useState("");
  const [file, setFile] = useState(null);
  const [retrievedImage, setRetrievedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file || !claimId) {
      alert("Please select a file and enter Claim ID");
      return;
    }
    setLoading(true);
    try {
      const response = await uploadImage(claimId, file);
      alert(`Upload successful: ${response.message}`);
    } catch (error) {
      console.error("Upload error:", error);
      alert(`Upload failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRetrieve = async () => {
    if (!claimId) {
      alert("Please enter Claim ID");
      return;
    }
    setLoading(true);
    setRetrievedImage(null);
    try {
      console.log("Attempting to retrieve image for claim ID:", claimId);
      const imageData = await retrieveImage(claimId);
      console.log("Image data retrieved successfully");
      setRetrievedImage(imageData);
    } catch (error) {
      console.error("Retrieve error:", error);
      alert(`Retrieve failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="music-shop-container">
      <h2 className="music-shop-title">Music Shop Demo</h2>

      <div className="form-group">
        <label className="form-label">Claim ID:</label>
        <input
          type="text"
          placeholder="Enter Claim ID"
          value={claimId}
          onChange={(e) => setClaimId(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Select Image:</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-input"
        />
      </div>

      <div className="button-group">
        <button onClick={handleUpload} className="btn btn-upload" disabled={loading}>
          {loading ? "Uploading..." : "Upload Image"}
        </button>
        <button onClick={handleRetrieve} className="btn btn-retrieve" disabled={loading}>
          {loading ? "Retrieving..." : "Retrieve Image"}
        </button>
      </div>

      {loading && (
        <div style={{ textAlign: "center", color: "#667eea", fontWeight: "bold" }}>
          Loading...
        </div>
      )}

      {retrievedImage && !loading && (
        <div className="image-result">
          <h3 className="image-result-title">Retrieved Image:</h3>
          <img
            src={retrievedImage}
            alt="Retrieved"
            className="retrieved-image"
          />
        </div>
      )}

      {/* {retrievedImage && !loading && (
        <div className="image-result">
          <h3 className="image-result-title">Retrieved Image:</h3>
          <img
            src={`data:image/jpeg;base64,${retrievedImage}`}
            alt="Retrieved"
            className="retrieved-image"
          />
        </div>
      )} */}
    </div>
  );
};