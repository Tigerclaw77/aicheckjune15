import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
// import Card from 'react-bootstrap/Card';

const AnimatedHomeDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={animatedStyle} className='card-container'>
            <Card className='clCard'>
                <CardImg src={image} alt={name} />
                <CardBody >
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedHomeDisplayCard;