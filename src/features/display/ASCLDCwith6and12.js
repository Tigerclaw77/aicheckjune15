import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import ModalContent from './ModalContent';

const AnimatedShopContactLensDisplayCard = ({ item, prices }) => {
  const { nameID, image, brand, manuf, name, description, toric, multifocal, color, multBC } = item;
  const [toggle, setToggle] = useState(false);
  const [imagePath, setImagePath] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
    config: { duration: 500 },
  });

  useEffect(() => {
    setToggle(true);

    // Dynamically import the image based on the variables
    const importImage = async () => {
      try {
        const imageModule = await import(
          `../../assets/CLimages/${manuf.replace(/[\s+]/g, '')}/${brand.replace(/[\s]/g, '')}/${image}.png`
        );
        setImagePath(imageModule.default);
      } catch (error) {
        console.error(`Failed to import image: ${error}`);
      }
    };

    importImage();
  }, [brand, manuf, image]);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  console.log('Prices:', prices);
  console.log('First Price:', prices[0]);

  let sixMonthPrice;
  let annualPrice;

  const { schedule, boxID, MSRP } = prices[0] || {};

  switch (schedule) {
    case 'DD':
      console.log('Schedule: DD');
      console.log('boxID:', boxID);
      if (boxID === '90P') {
        sixMonthPrice = Math.ceil(2 * MSRP);
      } else if (boxID === '30P') {
        sixMonthPrice = Math.ceil(6 * MSRP);
      }
      break;
  
    case '2W':
      console.log('Schedule: 2W');
      console.log('boxID:', boxID);
      if (boxID === '06P') {
        sixMonthPrice = Math.ceil(2 * MSRP);
      } else if (boxID === '12P') {
        sixMonthPrice = Math.ceil(MSRP);
      } else if (boxID === '24P' || boxID === '25P') {
        sixMonthPrice = Math.ceil(MSRP / 2);
      }
      break;
  
    case '1M':
      console.log('Schedule: 1M');
      console.log('boxID:', boxID);
      if (boxID === '06P') {
        sixMonthPrice = Math.ceil(MSRP);
      } else if (boxID === '12P') {
        sixMonthPrice = Math.ceil(MSRP / 2);
      }
      break;
  
    default:
      break;
  }
  
  
  

  annualPrice = Math.ceil(2 * sixMonthPrice);

  return (
    <animated.div style={animatedStyle} key={nameID}>
      {toggle && (
        <>
          <Card
            className="clCard"
            style={{
              border: '5px outset lightblue',
              height: '350px',
              cursor: 'pointer',
            }}
            onClick={handleModalOpen}
          >
            {imagePath && (
              <CardImg
                src={imagePath}
                alt={`${manuf}/${brand}/${image}`}
                style={{
                  padding: '10px',
                  maxHeight: '150px',
                  height: '100%',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            )}
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardText className="price-card">
                6 Months: <span className="price">$</span>
                <span className="price">{sixMonthPrice}</span> per eye
                <br />
                12 Months: <span className="price">$</span>
                <span className="price">{annualPrice}</span> per eye
              </CardText>
            </CardBody>
          </Card>
          <Modal isOpen={modalOpen} toggle={handleModalClose}>
            <ModalHeader toggle={handleModalClose}>{name}</ModalHeader>
            <ModalBody>
              <ModalContent
                imagePath={imagePath}
                name={name}
                manuf={manuf}
                sixMonthPrice={sixMonthPrice}
                annualPrice={annualPrice} // You can pass null or any default value for priceYear since it's not used in this context
                description={description}
                toric={toric}
                multifocal={multifocal}
                color={color}
                multBC={multBC}
              />
            </ModalBody>
          </Modal>
        </>
      )}
    </animated.div>
  );
};

export default AnimatedShopContactLensDisplayCard;
