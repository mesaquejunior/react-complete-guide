import styled from "styled-components";

export const ListUsers = styled.ul`
    display: flex;
    flex-direction: column;
    width: 600px;
    background-color: rgba(17, 17, 52, 0.3);
    padding: 20px;
    border-radius: 5px;
    list-style-type: none;
`

export const UlUser = styled.li`
    color: #111134;
    border: 1px solid #111134;
    background-color: white;
    padding: 10px;
    cursor: pointer;
    height: 40px;
    

    &:not(:first-child) {
        margin-top: 5px;
    }
`