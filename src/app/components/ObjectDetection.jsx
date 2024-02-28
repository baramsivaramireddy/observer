"use client"
import { useState } from 'react';

const ObjectDetectionComponent = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const sendImageToApi = async (imageFile) => {
    setLoading(true);

    try {
   

      const response = await fetch(
        'https://api-inference.huggingface.co/models/facebook/detr-resnet-50',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer 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',
          },
          body: imageFile
        }
      );

      const jsonResponse = await response.json();
      console.log(jsonResponse)
      setApiResponse(jsonResponse);
      return jsonResponse;
    } finally {
      setLoading(false);
    }
  };

  const loadImage = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const imageFile = document.querySelector('#imageFileInput').files[0];
  
    const apiResponse = await sendImageToApi(imageFile);
    const img = await loadImage(imageFile);
    setImage(img);
    draw(img, apiResponse);
  };

  const draw = (image, apiResponse) => {
    const canvas = document.getElementById('resultCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to image size

    // Draw the image on the canvas
    ctx.drawImage(image, 0, 0, canvas.width,canvas.height);

    // Draw rectangles based on the API response
    apiResponse.forEach((object) => {
      const { xmin, ymin, xmax, ymax } = object.box;

      const boxColor = getRandomColor();
      const personColor = getRandomColor()
      ctx.fillStyle = boxColor;
      ctx.beginPath();
      ctx.rect(xmin, ymin, xmax - xmin, ymax - ymin);

      ctx.fillText(object.label, xmin, ymin + 10);

      ctx.lineWidth = 2;
      ctx.strokeStyle = personColor;
      ctx.stroke();
    });


  };

  return (
    <div id="tryitout" className='h-[100vh] flex flex-col md:flex-row bg-blue-100 '>
 
      
      <div className=' md:w-1/2   h-full  flex-col gap-5 flex  justify-center items-center border-2'>

      <p className=' text-2xl'> Choose an image to detect objects in it</p>
      <form onSubmit={handleFormSubmit} className='shadow-md bg-white p-5  rounded-md flex flex-col gap-5'>
        <input type="file" id="imageFileInput" required />
        <button type="submit" className='bg-green-400 hover:bg-green-600 text-white  rounded-full py-2 px-4'>Find Objects</button>
      </form>
      </div>


     <div className='md:w-1/2 h-full bg-blue-200 flex flex-col justify-center items-center p-5 '>
     <p className='text-2xl font-semibold capitalize'> see the results here</p>
     {loading&&  <Loading />}
    
    <canvas id="resultCanvas" className='h-1/2 w-full' >

     
    </canvas>


    <div className='w-full overflow-y-auto p-6'>

      <ul>

      {
      apiResponse.map((o,index) =>(<li key={index}>{o.label} </li>))
  
    }
      </ul>
  

    </div>
     </div>
    </div>
  );
};


const Loading = () =>{

  return (<div className='animate-pulse bg-slate-200  h-1/2 w-full flex justify-center items-center'>
    <p className='text-white'> Loading...</p>
  </div>)
}
export default ObjectDetectionComponent;
