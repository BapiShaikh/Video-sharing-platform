import React, {  useState } from "react";
import "./Upload.css";
// import { useNavigate } from 'react-router-dom';

const Upload = ({ setOpen }) => {
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  

  return (
    <div id="container">
      <div id="wrapper">
        <h2>Upload a New Video</h2>
        <div id="close" onClick={() => setOpen(false)}>
          close
        </div>
      </div>
      <div id="video-input">
        <label>Video: </label>
        {videoPerc > 0 ? (
          "Uploading:" + videoPerc + "%"
        ) : (
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo()}
          />
        )}
      </div>
      <h2>Details</h2>
      <textarea
        name="tittle"
        id="tittle-textarea"
        rows={1}
        placeholder="Title"
      ></textarea>
      <textarea
        name="desc"
        id="desc-textarea"
        rows={6}
        placeholder="Description"
      ></textarea>
      <div className="main-div">
        <div className="div-container" id="first-div">
          <label htmlFor="">Category</label>
          <br />
          <select name="category" id="Catergory">
            <option>Category</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Movie">Movie</option>
          </select>
        </div>
        <div className="div-container">
          <label htmlFor="">Visibility</label>
          <br />
          <select name="visibility" id="Public">
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
      </div>
      <div id="img-input">
        <label>Thumbnail Image: </label>
        {imgPerc > 0 ? (
          "Uploading:" + imgPerc + "%"
        ) : (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImg()}
          />
        )}
      </div>
      <button id="button-save">
        Save
      </button>
    </div>
  );
};
export default Upload;