"use client"
import { load } from '@tensorflow-models/coco-ssd'
import React, { useEffect,useRef, useState } from 'react'
import Webcam from 'react-webcam'
import * as tf from "@tensorflow/tfjs"
import {renderDetectedObjects} from "./renderDetectedObjects"


let interval
const Objectdetector_video = () => {
    const webcamref = useRef(null)
    const [loading,setloading] = useState(false)

    async function capture(){
        setloading(true)
        const net=await load()
        setloading(false)

       interval= setInterval(() => {
            runObjectDetection(net)
        }, 10);
    }


    async function runObjectDetection(net){
    const canvasref = document.getElementById("canvas")
        if(
            canvasref&&
            webcamref.current!==null && 
            webcamref.current.video?.readyState === 4
        ){
            canvasref.width = webcamref.current.video.videoWidth
            canvasref.height = webcamref.current.video.videoHeight

            // detect objects
            const detectobjects = await net.detect(webcamref.current.video,
            undefined,
            0.6)
            console.log(detectobjects)

            const cxt = canvasref.getContext("2d")
            renderDetectedObjects(detectobjects,cxt)

        }
    }

    const showvideo=()=>{
        if(webcamref.current !==null && webcamref.current.video?.readyState===4){
            const  videowidth = webcamref.current.video.videoWidth
            const  videoheight = webcamref.current.video.videoHeight

            webcamref.current.video.width=videowidth
            webcamref.current.video.height=videoheight
        }
    }
    useEffect(()=>{
        capture()
        showvideo()

    },[])
  return (
    <div id="/Objectdetector_video">
        {
            loading ? (
                <div>Loading...</div>
        )
        :
        (<div className='relative flex justify-center items-center p-1.5'>
            <Webcam
            ref={webcamref} className='rounded-md w-full lg:h-[720px]' muted/>

            <canvas id='canvas'
            className='absolute top-0 left-0 w-full lg:h-[720px]'/>

        </div>)}

    </div>
  )
}

export default Objectdetector_video
