import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <footer className='site-footer' style={{ position: 'fixed', bottom: '0', width: '100%' }}>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Navigation</h5>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                            <a
                                className='btn btn-social-icon btn-instagram'
                                href='http://instagram.com/'
                            >
                                <i className='fa fa-instagram' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-facebook'
                                href='http://www.facebook.com/'
                            >
                                <i className='fa fa-facebook' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-twitter'
                                href='http://twitter.com/'
                            >
                                <i className='fa fa-twitter' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-google'
                                href='http://youtube.com/'
                            >
                                <i className='fa fa-youtube' />
                            </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+55514071234'
                        >
                            <i className='fa fa-phone' /> 1-407-555-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:contact@honestlenses.com'
                        >
                            <i className='fa fa-envelope-o' /> contact@honestlenses.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;