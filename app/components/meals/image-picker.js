"use client"
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }){
  const [pickedImage, setPickedImage] = useState();   // need to be "use client"
  const imageInput = useRef();
  const handlePickClick = () => {
    imageInput.current.click();
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if(!file) return;

    const filereader = new FileReader();
    filereader.onload = () => {
      setPickedImage(filereader.result);
    };
    filereader.readAsDataURL(file);

  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>
        {label}
      </label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input 
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name} 
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  )
}