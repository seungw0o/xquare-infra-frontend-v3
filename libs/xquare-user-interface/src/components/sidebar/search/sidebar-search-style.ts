import styled from "@emotion/styled";

export const SideBarDiv = styled.div`
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
`;

export const SideBarSearch = styled.section`
    align-items: center;
    align-self: stretch;
    display: flex;
    height: 40px;
`;

export const SideBarSearchInput = styled.input`
    background: transparent;
    border: none;
    border-bottom: 1px solid ${props => props.theme.color.text.none.purple.dark};
    color: ${props => props.theme.color.text.none.white};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.32px;
    line-height: 140%;
    padding: 12px 0;
    transition: border-bottom 0.1s linear;
    width: 100%;

    &::placeholder {
        color: ${props => props.theme.color.text.none.white};
        opacity: 0.6;
    }

    &:focus {
        outline: none;
    }

    &:hover {
        border-bottom: 1px solid ${props => props.theme.color.text.none.white};
        color: ${props => props.theme.color.text.none.white};
    }
`;