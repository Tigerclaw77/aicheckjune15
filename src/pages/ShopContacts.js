import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ShopContactLensDisplay from '../features/display/ShopContactLensDisplay';

const ShopContacts = () => {
    return (
        <Container>
            <SubHeader current='Shop' />
            <ShopContactLensDisplay />            
        </Container>
    );
};

export default ShopContacts;