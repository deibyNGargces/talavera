import React, { useState } from 'react';

const mediaItems = [
  { type: 'image', src: 'src/assets/images/Yeguada/Multimedia/Caballos%201.jpg', id: 0 },
  { type: 'image', src: 'src/assets/images/Yeguada/Multimedia/Caballos%202.png', id: 1 },
  { type: 'image', src: 'src/assets/images/Yeguada/Multimedia/Caballos%203.jpg', id: 2 },
  { type: 'image', src: 'src/assets/images/Yeguada/Multimedia/Caballos%204.jpg', id: 3 },
  { type: 'video', src: 'src/assets/images/Yeguada/Multimedia/Yeguada.mp4', 
    thumbnail: 'src/assets/images/Yeguada/Multimedia/thmnl.png', id: 4 },
    { type: 'image', src: 'src/assets/images/Yeguada/Multimedia/Caballos%206.png', id: 5 },
    { type: 'image', src: 'src/assets/images/Yeguada/Multimedia/Caballos%208.png', id: 6 },
    { type: 'image', src: 'src/assets/images/Yeguada/Multimedia/Caballos%207.png', id: 7 },
];

const Gallery = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(null);

  const openModal = (index) => {
    console.log(index)
    setCurrentMediaIndex(index);
    document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
  };

  const closeModal = () => {
    setCurrentMediaIndex(null);
    document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
  };

  const changeMedia = (step) => {
    setCurrentMediaIndex((prevIndex) => {
      let newIndex = prevIndex + step;
      if (newIndex < 0) {
        newIndex = mediaItems.length - 1;
      } else if (newIndex >= mediaItems.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-5">
      <div class="col-span-2 md:col-span-4 px-4 mb-8 flex flex-col items-center justify-center">
      <h2 class="text-xl  font-bold uppercase tracking-widest text-gray-800">
        CONOCE NUESTRA 
      </h2>
      <h1 class="text-4xl 2xl:text-7xl font-extrabold text-gray-900">Yeguada</h1>
    </div>
      {Array.from({ length: 4 }, (_, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {mediaItems
            .filter((_, index) => index % 4 === colIndex % 4)
            .map((item, index) => (
              <div
                key={index}
                className="relative cursor-pointer overflow-hidden flex items-center justify-center"
                onClick={() => openModal(item.id)}
              >
                {item.type === 'video' ? (
                  <>
                    <img
                      src={item.thumbnail}
                      alt="Video Thumbnail"
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl text-yellow-500 hover:text-yellow-600">
                      ▷
                    </span>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt="Image"
                    className="h-full max-w-full rounded-lg object-cover object-center"
                  />
                )}
              </div>
            ))}
        </div>
      ))}

      {currentMediaIndex !== null && (
        <div
          id="mediaModal"
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
        >
          <div id="modalContent" className="max-w-4xl max-h-4xl flex justify-center items-center">
            {mediaItems[currentMediaIndex].type === 'video' ? (
              <video
                src={mediaItems[currentMediaIndex].src}
                controls
                autoPlay
                className="max-w-full max-h-full object-contain"
              ></video>
            ) : (
              <img
                src={mediaItems[currentMediaIndex].src}
                alt="Modal Content"
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
          <span
            className="absolute top-5 right-5 text-4xl text-white cursor-pointer z-50"
            onClick={closeModal}
          >
            &times;
          </span>
          <span
            className="absolute top-1/2 left-5 transform -translate-y-1/2 text-5xl text-white cursor-pointer z-50"
            onClick={() => changeMedia(-1)}
          >
            &#10094;
          </span>
          <span
            className="absolute top-1/2 right-5 transform -translate-y-1/2 text-5xl text-white cursor-pointer z-50"
            onClick={() => changeMedia(1)}
          >
            &#10095;
          </span>
          <span
            className="absolute bottom-5 right-1/2 transform translate-x-1/2 text-2xl bg-white text-black px-4 py-1 rounded-full cursor-pointer z-50"
            onClick={closeModal}
          >
            Cerrar
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;