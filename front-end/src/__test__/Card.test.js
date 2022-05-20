import React from 'react';
import { Card } from 'Applications';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import { ApplicationsProvider } from 'Applications';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



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
})

