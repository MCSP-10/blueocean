import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'Applications';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import { ApplicationsProvider } from 'Applications';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



//MOCKED RENDER
const renderComponent = ({items}) => {

    return render(
        <ApplicationsProvider>
            <DndProvider backend={HTML5Backend}>
                <Card items={items}/>
            </DndProvider>
        </ApplicationsProvider>
    )
}


describe("Card component", () =>{
    let showModal = false;

    it("Should render a Mapquest job card", () =>{
        
        const component = renderComponent({
            items: { 
                id: 18,
                logo: "https://logo.clearbit.com/Mapquest.com",
                name: "Mapquest",
                subText: "Front End Developer"
            }
        });

        const card = component.getByTestId("app-card");
        expect(card).toBeTruthy();
        expect(card).toMatchSnapshot();
    })

    it("Should open modal app details card", () =>{
        
        ReactDOM.createPortal = jest.fn(() => {
            return (<div data-testid="app-modal">Modal Open</div>);
        });

        const component = renderComponent({
            items: { 
                id: 18,
                logo: "https://logo.clearbit.com/Mapquest.com",
                name: "Mapquest",
                subText: "Front End Developer"
            }
        });
        
        const card = component.getByTestId("app-card");
        expect(fireEvent.click(card)).toBe(true);

        const modal = component.getByTestId("app-modal");
        expect(modal.textContent).toContain("Modal Open");
        // screen.debug();

    })
})

