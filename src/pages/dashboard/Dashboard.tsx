import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, CardHeader } from 'reactstrap';
import { motion } from 'framer-motion';
import Chart from '../../components/chart/Chart';
import './style.scss'
import Content from './components/content/content';

function Dashboard() {
    const [isAccVisible, setIsAccVisible] = useState(false);
    const [isTaxVisible, setIsTaxVisible] = useState(false);
    const [isSavingVisible, setIsSavingVisible] = useState(false);
    const [isChartVisible, setChartVisible] = useState(false)
    const data = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
    ];
    return (
        <div style={{ flex: 1, overflowY: 'scroll' }}>
            <Container className="p-0 dashboard">
                <Row style={{ position: 'relative', border: '0px solid #00ff00' }}>
                    <div style={{ border: '0px solid #fff' }}>
                        <div style={{ position: 'relative', border: '0px solid #ff0000', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex', flexDirection: 'column', top: '30%' }}>
                            <div style={{ display: 'flex', flex: 1, border: '0px solid green', width: '100%', paddingLeft: '14%' }}>
                                <span style={{ fontSize: 12, color: '#fff', border: '0px solid green' }}>Total Balance</span>
                            </div>
                            <div style={{ display: 'flex', flex: 1, border: '0px solid green', width: '100%', paddingLeft: '14%' }}>
                                <div style={{ display: 'flex', flex: 1, flexDirection: 'row', gap: 20 }}>
                                    <div style={{ justifyContent: 'center', alignItems: 'center', border: '0px solid #ff0000' }}>
                                        <span style={{ fontSize: 30, color: '#fff' }}>{"$36,254"}</span>
                                    </div>
                                    <div style={{ border: '0px solid green', paddingTop: 20, display: 'flex', flexDirection: 'row', gap: 20 }}>
                                        <div style={{
                                            borderTopLeftRadius: '30%', borderBottomLeftRadius: '30%', borderTopRightRadius: '30%', borderBottomRightRadius: '30%', aspectRatio: 20,
                                            width: "25px", height: "20px", backgroundColor: 'rgb(166,244,7)', textAlign: 'center'
                                        }}  >
                                            <span style={{}}> <i className="ri-arrow-right-up-line" style={{ color: '#000', fontSize: 10 }}></i></span>
                                        </div>
                                        <div ><span style={{ fontSize: 12, color: '#fff', fontFamily: 'Roboto sans-serif' }}>$328.32 Today,Feb 15</span></div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flex: 1, flexDirection: 'row', gap: 40 }}>
                                    <div><span style={{ fontSize: 12, color: '#fff' }}><i className="ri-eye-line"></i> </span><span style={{ fontFamily: 'Roboto, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>View Analysis</span></div>
                                    {/* <Button color="primary"><i className="ri-arrow-right-up-line" style={{ color: '#000' }}></i><span>Send Money</span></Button> */}
                                    <div style={{ backgroundColor: 'rgba(94,46,244,1)', width: '150px', height: '40px', textAlign: 'center', paddingTop: 10, paddingBottom: 10, borderRadius: 3 }}>
                                        <i className="ri-arrow-right-up-line" style={{ color: '#fff' }}></i>
                                        <span style={{ color: '#fff', fontSize: 12 }}>Send Money</span>
                                    </div>
                                    <div><i className="ri-add-line" style={{ fontSize: 12, color: '#fff' }} ></i><span style={{ fontFamily: 'Roboto sans-serif', color: '#fff' }}>Add Money</span></div>
                                    <div style={{ backgroundColor: 'rgba(21,26,46,1)', borderRadius: '45%', width: '20px', height: '20px', border: '0px solid #ccc', justifyContent: 'center', alignItems: 'center', paddingBottom: '10px' }}>
                                        <i className="ri-more-line" style={{ color: '#fff' }}></i>
                                    </div>
                                </div>

                            </div>
                            <div style={{ display: 'flex', flex: 1, border: '0px solid green', width: '100%', paddingLeft: '14%', gap: 20 }}>
                                <i className="ri-shining-line" style={{ color: '#fff' }}></i>
                                <span style={{ color: '#fff' }}>Overview</span>
                                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, marginTop: '5px' }}>{"Last 30 days"}</span>
                            </div>
                        </div>

                    </div>
                    <div style={{ border: '0px solid #fff' }}>
                        <div className="card-container" style={{ gap: 30 }}>


                            <motion.div
                                className="account_category_card"
                                onMouseEnter={() => setIsAccVisible(true)}
                                onMouseLeave={() => setIsAccVisible(false)}
                            >

                                <Card className="p-3 mb-5 bg-light rounded" style={{ height: '250px', display: 'flex', flex: 1 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', flex: 1, width: '100%' }}>
                                        <div style={{ flex: 1 }}>
                                            <CardHeader className='custom-card-header' >
                                                <div className='acct-card'>
                                                    {isAccVisible ? <i className="ri-user-line" color='rgb(94,45,244)'></i> : <i className="ri-user-fill" ></i>}
                                                </div>
                                            </CardHeader>
                                            <CardBody>



                                                <CardTitle tag="h6" style={{ display: 'flex', flexDirection: 'row', gap: 10, fontSize: 12, marginBottom: '30px' }}>
                                                    <div style={{ fontSize: 12 }}>{"Business Account"}</div>
                                                    <div style={{
                                                        borderTopLeftRadius: '30%', borderBottomLeftRadius: '30%', borderTopRightRadius: '30%', borderBottomRightRadius: '30%', aspectRatio: 20,
                                                        width: "25px", height: "20px", backgroundColor: 'rgb(166,244,7)', textAlign: 'center'
                                                    }}  >
                                                        <span style={{}}> <i className="ri-arrow-right-up-line" style={{ color: '#000', fontSize: 10 }}></i></span>
                                                    </div>
                                                    <div><span>12.3%</span></div>
                                                    {/* <div>{"Vs Last Week"}</div> */}


                                                </CardTitle>

                                                <CardText tag="h3">
                                                    <motion.div
                                                        className="acct-amount"
                                                        initial={{ opacity: 1 }}
                                                        animate={{ opacity: isAccVisible ? 0 : 1 }}
                                                        transition={{ duration: 0.8 }}
                                                    >
                                                        <div className=''>{"$33,842"}</div>
                                                    </motion.div>
                                                </CardText>


                                                <CardText >
                                                    <motion.div
                                                        className="view-acct-details"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: isAccVisible ? 1 : 0 }}
                                                        transition={{ duration: 0.8 }}
                                                    >

                                                        <div><span className='view-acct-details-box'>View Account Details</span></div>
                                                        <div className='acct-details-chart-icon'><i className="ri-line-chart-line" onClick={() => setChartVisible(prev => !prev)}></i></div>

                                                    </motion.div>
                                                </CardText>

                                            </CardBody>
                                        </div>
                                        {isChartVisible && (
                                            <motion.div
                                                className="chartContainer"
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                            >

                                                <Chart
                                                    title="Last 6 Months (Revenue)"
                                                    aspect={2 / 1}
                                                    data={data} />

                                            </motion.div>
                                        )
                                        }
                                    </div>

                                </Card>



                            </motion.div>


                            <motion.div
                                className="tax_category_card"
                                onMouseEnter={() => setIsTaxVisible(true)}
                                onMouseLeave={() => setIsTaxVisible(false)}
                            >
                                <Card className="p-3 mb-5 bg-light rounded " style={{ height: '250px' }}>

                                    <CardHeader className='custom-card-header'>
                                        <div className='acct-card'>
                                            <i className="ri-file-reduce-line" style={isTaxVisible ? { color: '#FFA500' } : { color: '#000' }}></i>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <CardTitle tag="h6" style={{ display: 'flex', flexDirection: 'row', gap: 10, fontSize: 12, marginBottom: '30px' }}>
                                            <div><span>{"Tax Reserve"}</span></div>
                                            <div style={{
                                                borderTopLeftRadius: '30%', borderBottomLeftRadius: '30%', borderTopRightRadius: '30%', borderBottomRightRadius: '30%', aspectRatio: 20,
                                                width: "25px", height: "20px", backgroundColor: 'rgb(255,0,0)', textAlign: 'center'
                                            }}>
                                                <span style={{}}>   <i className="ri-arrow-right-up-line" style={{ color: '#fff', fontSize: 10 }}></i></span>

                                            </div>
                                            <div><span>{"-2.1%"}</span></div>
                                        </CardTitle>

                                        <CardText tag="h3">
                                            <motion.div
                                                className="tax-amount"
                                                initial={{ opacity: 1 }}
                                                animate={{ opacity: isTaxVisible ? 0 : 1 }}
                                                transition={{ duration: 0.8 }}
                                            >
                                                <div className=''>{"$700.00"}</div>
                                            </motion.div>
                                        </CardText>
                                        <CardText >
                                            <motion.div
                                                className="view-tax-details"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isTaxVisible ? 1 : 0 }}
                                                transition={{ duration: 0.8 }}
                                            >

                                                <div><span className='view-tax-details-box'>Edit Tax Automation</span></div>
                                                <div className='tax-details-chart-icon'><i className="ri-line-chart-line"></i></div>

                                            </motion.div>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </motion.div>



                            <motion.div
                                className="savings_category_card"
                                onMouseEnter={() => setIsSavingVisible(true)}
                                onMouseLeave={() => setIsSavingVisible(false)}
                            >
                                <Card className="p-3 mb-5 bg-light rounded " style={{ height: '250px' }}>
                                    <CardHeader className='custom-card-header'>
                                        <div className='acct-card'>
                                            <i className="ri-stack-line" style={isSavingVisible ? { color: '#FFCCCC' } : { color: '#000' }}></i>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <CardTitle tag="h6" style={{ display: 'flex', flexDirection: 'row', gap: 10, fontSize: 12, marginBottom: '30px' }}>
                                            <div><span>{"Business Saving"}</span></div>
                                        </CardTitle>
                                        <CardText tag="h3">
                                            <motion.div
                                                className="savings-amount"
                                                initial={{ opacity: 1 }}
                                                animate={{ opacity: isSavingVisible ? 0 : 1 }}
                                                transition={{ duration: 0.8 }}
                                            >
                                                <div className=''>{"$1,623.00"}</div>
                                            </motion.div>
                                        </CardText>
                                        <CardText >
                                            <motion.div
                                                className="view-savings-details"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isSavingVisible ? 1 : 0 }}
                                                transition={{ duration: 0.8 }}
                                            >

                                                <div><span className='view-savings-details-box'>View Savings Details</span></div>
                                                <div className='savings-details-chart-icon'><i className="ri-line-chart-line"></i></div>

                                            </motion.div>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </Row>

                {/* <Row>
                <Content />
            </Row> */}
            </Container>
            <Content />
        </div>




    )
}

export default Dashboard