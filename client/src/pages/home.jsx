import { Header, Footer, Main } from "../components/index";

const home = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default home;

// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [qrContent, setQRContent] = useState("");
//   const [imageDescription, setImageDescription] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

//   const generateImage = async () => {
//     try {
//       const response = await fetch(
//         `/api/generate?qr_content=${qrContent}&image_description=${imageDescription}`
//       );
//       const data = await response.json();
//       setImageUrl(data.image_url);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       {/* Header */}
//       <header className="flex justify-between">
//         <h2 className="text-2xl font-semibold ml-5">xQRCode</h2>
//         <button className="mr-20">
//           <Link to="/signup">Signup</Link>
//         </button>
//       </header>

//       {/* main Content */}
//       <div className="flex flex-col  items-center">
//         <div className="flex flex-col">
//           <label htmlFor="qrContent">Url:</label>
//           <input
//             className="p-2 border border-gray-300 rounded"
//             type="text"
//             id="qrContent"
//             value={qrContent}
//             onChange={(e) => setQRContent(e.target.value)}
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="imageDescription">Image Description:</label>
//           <input
//             className="p-2 border border-gray-300 rounded"
//             type="text"
//             id="imageDescription"
//             value={imageDescription}
//             onChange={(e) => setImageDescription(e.target.value)}
//           />
//         </div>
//         <div className="mt-2">
//           <button
//             className="bg-gray-500 px-4 py-2 rounded"
//             onClick={generateImage}
//           >
//             Generate Image
//           </button>
//         </div>
//       </div>
//       <div className="items-center">
//         {imageUrl && (
//           <img
//             className="generated-image"
//             src={imageUrl}
//             alt="Generated Image"
//           />
//         )}
//       </div>

//       {/* Footer */}
//     </>
//   );
// };

// export default Home;
