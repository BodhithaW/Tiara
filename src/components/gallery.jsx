// import { Image } from "./image";
// import React from "react";

// export const Gallery = (props) => {
//   return (
//     <div id="gallery" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <br /> <br /> <br />
//           <h2>Gallery</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//             dapibus leonec.
//           </p>
//         </div>
//         <div className="row">
//           <div className="portfolio-items">
//             {props.data
//               ? props.data.map((d, i) => (
//                   <div
//                     key={`${d.title}-${i}`}
//                     className="col-sm-6 col-md-4 col-lg-4"
//                   >
//                     <Image
//                       title={d.title}
//                       largeImage={d.largeImage}
//                       smallImage={d.smallImage}
//                     />
//                   </div>
//                 ))
//               : "Loading..."}
//           </div>
//           <br />
//           <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
//         </div>
//       </div>
//     </div>
//   );
// };
