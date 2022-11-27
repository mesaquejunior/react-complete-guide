import styled from "styled-components";

export const ModalBackground = styled.div`
    display: ${({isValid}) => isValid === true ? 'none' : 'block'};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(17, 17, 52);
    background-color: rgba(17, 17, 52, 0.8);
`

export const ModalContent = styled.div`
    background-color: #fefefe;
    margin: -15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
    border-radius: 0 0 5px 5px;
`

export const ModalHeader = styled.div`
    padding: 5px 16px;
    margin: 15% auto;
    background-color: #111134;
    width: 40%;
    color: white;
    border-radius: 5px 5px 0 0;
`

export const Close = styled.span`
    position: relative;
    margin-top: -5px;
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: white;
    }
`

export const ModalText = styled.p`
    color: #111134;
    padding: 20px 0;
`