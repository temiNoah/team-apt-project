import React, { useState } from 'react'
import {
    Col, Container, Row, Progress, Nav,
    NavItem, NavLink, TabContent, TabPane
} from 'reactstrap'
import classnames from 'classnames';

import './content.scss'
function Content() {
    const [activeTab, setActiveTab] = useState('1')
    const sample = [
        {
            name: "Stripe",
            type: "Business",
            amount: "$1,233.00",
            date: "Wed,16 Feb, 18:11",
            logo: ''
        },
        {
            name: "Dropbox",
            type: "Equipment",
            amount: "$2000.00",
            date: "Tue, 16 Feb, 20:00",
            logo: <i className="ri-dropbox-fill" style={{ color: '#fff' }}></i>
        },
        {
            name: "Zendesk",
            type: "Marketing",
            amount: "$1200.00",
            date: "Tue, 16 Feb, 20:00",
            logo: ''
        },
        {
            name: "Spotify",
            type: "Entertainment",
            amount: "-$19.00",
            date: "Tue, 16 Feb, 20:00",
            logo: <i className="ri-spotify-fill" style={{ color: '#fff' }}></i>
        },

    ]

    const sample2 = [
        {
            name: "Stripe",
            amount: "$3,514",
            progress: '70',
            color: 'rgba(185,171,247,1)'
        },
        {
            name: "Crypto Academy",
            amount: "$1,017",
            progress: '20',
            color: 'rgba(147,229,250,1)'
        },
        {
            name: "Wire Return",
            amount: "$318",
            progress: "6",
            color: 'rgba(246,184,212,1)'
        }
    ]
    const [data, setData] = useState(sample)

    const toggle = (tab: string) => {
        // alert(tab)
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }
    return (
        <Container style={{ position: 'relative', top: 200, display: 'flex', flexDirection: 'row', gap: 50, width: '100%', marginBottom: '40px', fontFamily: 'Roboto', fontSize: '14px' }}>
            <div className='left-section' >
                <Row >
                    <Col >
                        <i className="ri-cross-fill"></i>
                        <span>Recent Transaction </span><span style={{ fontWeight: "300", fontSize: '12px' }}>Last 5 Activity</span>
                    </Col>
                    <Col style={{ textAlign: 'end' }}>
                        <span style={{ color: 'rgba(94,46,244,1)', fontSize: '12px', cursor: 'pointer' }}>See All</span>
                    </Col>
                </Row>
                <Row>
                    <span style={{ border: '1px solid rgba(0,0,0,0.1)', width: '100%' }}></span>
                </Row>

                {
                    data.map(eachTrxn => (
                        <div style={{ margin: '30px' }}>
                            <Row>
                                <Col style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                    <div style={{ width: '30px', height: '30px', backgroundColor: '#000', textAlign: 'center', paddingTop: '3px' }}>{eachTrxn.logo}</div>
                                    <div>
                                        <div><span>{eachTrxn.name}</span></div>
                                        <div style={{ fontSize: '12px', fontWeight: "200" }}>{eachTrxn.date}</div>
                                    </div>
                                </Col>
                                <Col>
                                    <span>{eachTrxn.type}</span>
                                </Col>
                                <Col>
                                    <span>{eachTrxn.amount}</span>
                                </Col>
                            </Row>
                            <Row>

                                <span style={{ border: '1px solid rgba(0,0,0,0.1)', width: '100%' }}></span>

                            </Row>
                        </div>
                    ))

                }
            </div>
            <div className='right-section'>
                <Row>
                    <Col>
                        <i className="ri-asterisk"></i>
                        <span>Cash Flow </span><span style={{ fontWeight: "300", fontSize: '12px' }}>Last 30 days</span>
                    </Col>
                    <Col style={{ textAlign: 'end' }}>
                        <span style={{ color: 'rgba(94,46,244,1)', fontSize: '12px', cursor: 'pointer' }}>See All</span>
                    </Col>
                </Row>
                {/* <Row>
                    <span style={{ border: '1px solid rgba(0,0,0,0.1)', width: '100%' }}></span>
                </Row> */}
                <div>
                    <Nav tabs className="custom-tab">
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}
                                style={{
                                    display: 'flex', flex: 1, flexDirection: 'row', gap: 20,
                                    border: '0px 0px 1px  0px',
                                    width: '300px'
                                }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', textAlign: 'center' }}
                                    className={`money-icon-container ${activeTab === '1' ? 'active-money-icon' : ''}`}>
                                    <i className="ri-download-2-fill" style={{ color: '#fff' }}> </i>
                                </div>
                                <div>
                                    <div>MONEY IN</div>
                                    <div><span>$5,083</span></div>
                                </div>
                            </NavLink>

                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2') }}
                                style={{
                                    display: 'flex', flex: 1, flexDirection: 'row', gap: 20,
                                    border: '0px 0px 1px  0px',
                                    width: '300px'
                                }} >
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', textAlign: 'center' }}
                                    className={`money-icon-container ${activeTab === '2' ? 'active-money-icon' : ''}`}>
                                    <i className="ri-upload-2-fill" style={{ color: '#fff' }}></i>
                                </div>
                                <div>
                                    <div>MONEY OUT</div>
                                    <div><span>$1,623</span></div>
                                </div>
                            </NavLink>

                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">

                            {
                                sample2.map((eachCashFlow, index) => (
                                    <div style={{ margin: '30px' }}>
                                        <Row>
                                            <Col style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: `${eachCashFlow.color}`, textAlign: 'center' }}>
                                                    <i className="ri-arrow-drop-down-fill" style={{ color: '#fff', }}></i>
                                                </div>
                                                <div>
                                                    <div><span>{eachCashFlow.name}</span></div>
                                                    <div style={{ fontSize: '12px', fontWeight: "200" }}>%{eachCashFlow.progress}</div>
                                                </div>
                                            </Col>
                                            <Col>
                                                <span>{eachCashFlow.amount}</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Progress value={eachCashFlow.progress} style={{ height: 5, color: `${eachCashFlow.color}` }} className={`${'progressbar' + (index + 1)}`} />
                                        </Row>
                                    </div>
                                ))
                            }
                        </TabPane>
                        <TabPane tabId="2">
                            hbjbk
                        </TabPane>
                    </TabContent>

                </div>
            </div>
        </Container>
    )
}

export default Content