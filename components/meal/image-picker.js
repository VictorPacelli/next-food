'use client'

import classes from './image-picker.module.css'

import { useRef, useState } from 'react'

import Image from 'next/image'

export default function ImagePicker({ name, label }) {
    const inputRef = useRef()
    const [imagePreview, setImagePreview] = useState()

    function handlePickImageOnClick() {
        inputRef.current.click()
    }

    function handleImagePreviewOnChange(e){
        const image = e.target.files[0]
        if(!image){
            setImagePreview(null)
            return
        }
        const fileReader = new FileReader()

        fileReader.onload = () => {
            setImagePreview(fileReader.result)
        }
        fileReader.readAsDataURL(image)
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {
                        imagePreview ? 
                        <Image src={imagePreview} alt='selected image by user' fill/>
                        :
                        <p>No image selected yet</p>
                    }
                    
                </div>
                <input type="file" name={name} id={name} className={classes.input} accept='image/png, image/jpeg' ref={inputRef} onChange={handleImagePreviewOnChange} required/>
                <button type='button' onClick={handlePickImageOnClick} className={classes.button}>Pick an image</button>
            </div>
        </div>
    )
}