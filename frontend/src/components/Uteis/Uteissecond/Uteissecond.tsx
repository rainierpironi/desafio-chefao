import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import "../Uteissecond/Uteissecond.css"

function Uteissecond() {
    return (
        <Fragment>
            <div className='containerUtilSecond'>
                <div className='tituloUtilSecond'>
                    <p>Delegacias da Mulher</p>
                </div>
                <div className='dropUtilSecond'>
                    <Accordion >
                        <div className='adjustUtilSecond'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Delegacias da Mulher do Norte</Accordion.Header>
                                <Accordion.Body>
                                    <b>ACRE </b> (68) 3221-0404 / 3221- 4799 / Deam.sepc@gmail.com <b>AMAZONAS </b> (97) 3471-2757 / dip.sgc@outlook.com
                                   <b>AMAPÁ </b> (96) 2101-2751 <b>PARÁ </b> (83) 3531-7022 / cristianapires@hotmail.com <b>RONDÔNIA </b> (69)3536-8425 / ddm.ariquemes@pc.ro.gov.br <b>RORAIMA </b> (95)991445614 <b>TOCANTINS </b> (63)3464-2536 / drpc.guarai@hotmail.com
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustUtilSecond'>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Delegacias da Mulher do Nordeste</Accordion.Header>
                                <Accordion.Body>
                                    <b>ALAGOAS </b> (82) 3315-4976 / Deam.sepc@gmail.com <b>BAHIA </b> (73)3214-7822 / dip.sgc@outlook.com <b>CEARÁ </b> (96) 2101-2751 <b>MARANHÃO </b> (99)3621-1025 / maciagard@bol.com.br <b>PARAÍBA </b> (83) 3531-7022 / cristianapires@hotmail.com <b>PERNAMBUCO </b> (81)3524-1630 / 14delmulher@policiacivil.pe.gov.br <b>PIAUÍ </b> (86)3222-2323 / deamcentro.te@pc.pi.gov.br <b>RIO GRANDE DO NORTE </b> (84)3644-6425 / dulcineiacosta@rn.gov.br <b>SERGIPE </b> (79)3431-8513 / dagv.itabaiana@pc.se.gov.br
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustUtilSecond'>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Delegacias da Mulher do Centro-Oeste</Accordion.Header>
                                <Accordion.Body>
                                    <b>DISTRITO FEDERAL </b> (61)3207-8763 / dp38_saa@pcdf.df.gov.br <b>GOIÁS </b> (62)3201-2642 / deam-jatai@policiacivil.go.gov.br <b>MATO GROSSO </b>
                                    (65)3901-5326 / dmulhercda@policiacivil.gov.br <b>MATO GROSSO DO SUL </b>(67) 3241-1172
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustUtilSecond'>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Delegacias da Mulher do Sudeste</Accordion.Header>
                                <Accordion.Body>
                                    <b>ESPÍRITO SANTO </b> (27)3264-2537 / mara.costa@pc.es.gov.br <b>MINAS GERAIS </b> (31)3769-1227 / mulheres.lafaiete@pc.mg.gov.br <b>SÃO PAULO </b>
                                    (11)4138-3409 / tserra.ddm@policiacivil.sp.gov.br <b>RIO DE JANEIRO </b> (21)3771-1135 / mariaaparecidamallete@pcivil.rj.gov
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustUtilSecond'>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Delegacias da Mulher do Sul</Accordion.Header>
                                <Accordion.Body>
                                    <b>PARANÁ </b> (41)3698-9072 / dpalmirantetamandare@pc.pr.gov.br <b>SANTA CATARINA </b> (47)3533-1468 / dpcamiituporanga@pc.sc.gov.br
                                    <b> RIO GRANDE DO SUL </b> (53)3225-6888 / pelotas-dm@pc.rs.gov.br
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </Accordion>
                </div>
            </div>
        </Fragment >
    )
}

export default Uteissecond