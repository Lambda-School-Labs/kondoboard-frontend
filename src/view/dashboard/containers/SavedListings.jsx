import React from 'react';
import { Layout, Row, Col } from 'antd';

import SavedJobList from '@dashboard/savedjobcomponents/SavedJobsList.jsx';
import DetailedJob from '@dashboard/detailedjob/DetailedJob.jsx';

const { Sider, Content } = Layout;

const SavedListings = () => {
    return(
        <div className='job-listings'>
            <Layout style={{height: '80vh', background: 'white'}}>
                <Content>
                    <Row>
                        <Col span={10}><SavedJobList /></Col>
                        <Col span={2}></Col>
                        <Col span={12}><DetailedJob /></Col>
                    </Row>
                </Content>
            </Layout>
        </div>
    )
}

export default SavedListings;