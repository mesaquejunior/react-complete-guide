import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;
    background-color: rgba(17, 17, 52, 0.3);
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
`

export const Field = styled.input`
    color: #111134;
    margin: 5px 0;
    border: 1px solid #111134;
    padding: 5px;
    height: 40px;

    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;

    &[type=number] {
    -moz-appearance: textfield;
    }
}
`

export const Label = styled.label`
    color: #111134;
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    font-weight: bold;
`

export const Button = styled.button`
    background-color: #111134;
    color: #fff;
    font-weight: bold;
    padding: 5px 10px;
    border: none;
    margin: 5px 0;
    width: 200px;
    height: 40px;
`