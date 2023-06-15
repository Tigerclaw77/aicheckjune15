// import React from 'react';
// import { Card, CardImg, CardBody, CardText, Button } from 'reactstrap';

// const ModalCardContent = ({ imagePath, name, priceSix, priceYear, description, toggleSecondModal }) => {
//   return (
//     <Card>
//       {imagePath && (
//         <CardImg
//           src={imagePath}
//           alt={name}
//           style={{
//             padding: '10px',
//             maxHeight: '400px',
//             height: '100%',
//             width: 'auto',
//             objectFit: 'contain',
//           }}
//         />
//       )}
//       <CardBody>
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <div>
//             <CardText className="price-card">
//               6 Months: <span className="price">$</span>
//               <span className="price">{priceSix}</span> per eye
//               <br />
//               12 Months: <span className="price">$</span>
//               <span className="price">{priceYear}</span> per eye
//             </CardText>
//             <CardText>{description}</CardText>
//           </div>

//           <div>
//             <Button color="primary" onClick={toggleSecondModal}>
//               Choose your powers
//             </Button>
//           </div>
//         </div>
//       </CardBody>
//     </Card>
//   );
// };

// export default ModalCardContent;
