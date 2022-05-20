import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import { Column } from 'Applications';
import { ApplicationsProvider } from 'Applications';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const renderComponent = ({items, columns}) => {
    return render(
        <ApplicationsProvider>
            <DndProvider backend={HTML5Backend}>
                <Column items={items}/>
            </DndProvider>
        </ApplicationsProvider>
    )
}

describe('Column Component', () => {

    it('Column component renders with a card', () =>{
        const component = renderComponent({
            items: [{ 
                id: 18,
                logo: "https://logo.clearbit.com/Mapquest.com",
                company: "Mapquest",
                title: "Front End Developer"
            }]
        });
        
        const column = component.getByTestId("app-card");
        expect(column.textContent).toContain("MapquestFront End Developer");
    }); 
});