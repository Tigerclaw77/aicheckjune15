import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const ContactLensCard = (props) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.contactlens.image}
                alt={props.contactlens.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.contactlens.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default ContactLensCard;