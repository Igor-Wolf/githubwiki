import styled from "styled-components"

export const ButtonContainer = styled.button`

    background-color: 1px solid #fafafa;
    border: 1px solid #fafafa;
    border-radius: 20px;
    font-size: 1rem;
    

    height: 62px;
    width: 80%;

    margin: 20px;

    &:hover{

        background-color: #fafafa40;
        cursor: pointer;

    }

    @media screen and (min-width: 700px) {


    width: 500px;
    

    }




`