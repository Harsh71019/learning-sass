import React, { useState, useContext } from 'react'
import Header from "../components/Header"
import Modal from "../components/Modal"
import ModalContext from '../context/ModalContext'
const Home = () => {
    const { state: ss, dispatch, openModel } = useContext(ModalContext)
    console.log(ss)
    const [state] = useState({
        heading: 'We are travelling geeks',
        paragraph: 'Come with us as we show take you to a journey of a lifetime which you will never forget!'
    })


    return (
        <>
            <Header heading={state.heading} paragraph={state.paragraph}><button onClick={openModel} className="btn-default">Come Join</button> </Header>
            <Modal />
        </>
    )
}

export default Home
