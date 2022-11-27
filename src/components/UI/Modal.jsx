import React from 'react'
import { Close, ModalBackground, ModalContent, ModalHeader, ModalText } from './ModalComponents';

export const Modal = ({isValid, setIsValid, modalText}) => {
    const closeModalHandler = () => {
        setIsValid(true)
    }
  
    return (
    <ModalBackground isValid={isValid} onClick={closeModalHandler}>
        <ModalHeader>Invalid input<Close onClick={closeModalHandler}>&times;</Close></ModalHeader>
        <ModalContent>
            <ModalText>{modalText}</ModalText>
        </ModalContent>
    </ModalBackground>
  )
}
