import styled from 'styled-components';
const DropDownContainer = styled('div')``;

const DropDownHeader = styled('div')`
    padding: 0.2em 2em 0.2em 1em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    font-size: 1.3rem;
`;

const DropDownListContainer = styled('div')``;

const DropDownList = styled('ul')`
    margin: 0;
    padding-left: 1em;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    font-size: 1.3rem;
    font-weight: 500;
`;

const ListItem = styled('li')`
    list-style: none;
`;

export default function DropDown({ isOpen, toggling }) {
    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>Username</DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        <ListItem>Log Out</ListItem>
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}
