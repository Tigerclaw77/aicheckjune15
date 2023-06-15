import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import HomeDisplay from '../features/display/HomeDisplay';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <HomeDisplay />            
        </Container>
    );
};

export default HomePage;