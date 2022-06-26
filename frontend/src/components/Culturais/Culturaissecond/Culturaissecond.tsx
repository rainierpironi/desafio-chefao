import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import "../../Culturais/Culturaissecond/Culturaissecond.css"

function Culturaissecond() {
    return (
        <Fragment>

        <div className='containerSecond'>

            <div className='borderPlan'></div>
            <div className='aereasPlan'>Expressões</div>
            <div className='scrollPaln'>

                <Accordion >
                    <div className='adjustPlan'>
                        
                            <Accordion.Item eventKey="0">
                        
                        <div className='sombra'>
                            <Accordion.Header>Norte</Accordion.Header>
                        </div>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
            </div>


            <div className='adjustPlan'>
                <Accordion.Item eventKey="1">
                    <div className='sombra'>
                        <Accordion.Header>Nordeste</Accordion.Header>
                    </div>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </div>


            <div className='adjustPlan'>
                <Accordion.Item eventKey="2">
                    <div className='sombra'>
                        <Accordion.Header>Centro-Oeste</Accordion.Header>
                    </div>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className='adjustPlan'>
                <Accordion.Item eventKey="3">
                    <div className='sombra'>
                        <Accordion.Header>Sudeste</Accordion.Header>
                    </div>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className='adjustPlan'>

                <Accordion.Item eventKey="4">
                    <div className='sombra'>
                        <Accordion.Header>Sul</Accordion.Header>
                    </div>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </div>
        </Accordion>
    </div>
        </div >

    </Fragment >
    )      

}

export default Culturaissecond