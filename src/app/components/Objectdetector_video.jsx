"use client"
import { load } from '@tensorflow-models/coco-ssd'
import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import * as tf from "@tensorflow/tfjs"
import { renderDetectedObjects } from "@/utils/renderDetectedObjects"

const Objectdetector_video = () => {
    const webcamRef = useRef(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const runDetection = async () => {
            setLoading(true)
            const net = await load()
            setLoading(false)

            const interval = setInterval(() => {
                detectObjects(net)
            }, 1000)

            return () => clearInterval(interval)
        }

        runDetection()

    }, [])

    const detectObjects = async (net) => {
        const canvasRef = document.getElementById("canvas")
        if (canvasRef && webcamRef.current !== null && webcamRef.current.video?.readyState === 4) {
            canvasRef.width = webcamRef.current.video.videoWidth
            canvasRef.height = webcamRef.current.video.videoHeight

            const detectedObjects = await net.detect(webcamRef.current.video, undefined, 0.6)
            const ctx = canvasRef.getContext("2d")
            renderDetectedObjects(detectedObjects, ctx)
        }
    }

    const showVideo = () => {
        if (webcamRef.current !== null && webcamRef.current.video?.readyState === 4) {
            const videoWidth = webcamRef.current.video.videoWidth
            const videoHeight = webcamRef.current.video.videoHeight
            webcamRef.current.video.width = videoWidth
            webcamRef.current.video.height = videoHeight
        }
    }

    return (
        <div id="/Objectdetector_video h-[90vh]">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='relative flex justify-center items-center p-1.5'>
                    <Webcam
                        ref={webcamRef}
                        className='rounded-md w-full lg:h-[720px]'
                        muted
                    />
                    <canvas id='canvas' className='absolute top-0 left-0 w-full lg:h-[720px]' />
                </div>
            )}
        </div>
    )
}

export default Objectdetector_video
