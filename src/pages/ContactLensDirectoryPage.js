import { Container } from 'reactstrap';
import ContactLensesList from '../features/contactlenses/ContactLensesList';
import SubHeader from '../components/SubHeader';

const ContactLensDirectoryPage = () => {
    return (        
        <Container>
            <SubHeader current='Directory' />
            <ContactLensesList />
        </Container>
    );
};

export default ContactLensDirectoryPage;