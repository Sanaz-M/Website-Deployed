import SideBar from './sidebar/SideBar';
import { Container, Row, Col } from 'react-bootstrap';
import AdminNavBar from './navbar/AdminNavBar';
import './admin.css';
import AdminHome from './home/AdminHome';

const Admin = () => {
    return (
        <Container fluid id='admin-container'>
            <Row>
                <AdminNavBar />
            </Row>
            <Row id='admin-secondRow'>
                <Col sm={6} md={3} lg={2}>
                    <SideBar />
                </Col>
                <Col sm={6} md={9} lg={10} className='mainSec-home'>
                    <AdminHome />
                </Col>
            </Row>
        </Container>
    )
}

export default Admin;