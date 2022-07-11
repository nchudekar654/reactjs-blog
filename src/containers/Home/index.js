import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Layout from '../../components/Layout';

const Home  = props => {
    return (
        <div>
                <Layout>
                    <Sidebar style={{width: '70%'}}/>
                </Layout>
        </div>
    );
}

export default Home;