import { render, container, screen, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import { Column } from 'Applications';
import { ApplicationsProvider } from 'Applications';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const items = [{
    0: [{
        comments: [],
        company: "Mapquest",
        deadline: "2022-05-24T00:00:00.000Z",
        description: "Do we really want this job?",
        id: 18,
        location: "orlando",
        logo: "https://logo.clearbit.com/Mapquest.com",
        note: "apply at some point",
        salary: 60000,
        status: "Applying",
        title: "Front End Developer",
        updates: [],
        url:"https://www.linkedin.com/jobs/"
    }],
    1: [{
        comments: [{
            application_id: 4,
            body: "Some sort of text about the application",
            comment_id: 3,
            timestamp: null,
            user_id: 3
        }, {
            application_id: 4,
            body: "Some sort of text about the application",
            comment_id: 4,
            timestamp: null,
            user_id: 4,
        }],
        company: "Google",
        deadline: "2022-05-24T00:00:00.000Z",
        description: "A job at a place",
        id: 4,
        location: "colorado springs",
        logo: "https://logo.clearbit.com/Google.com",
        note: "apply soon",
        salary: 125000,
        status: "Offered",
        title: "Software Developer",
        updates: [{
            application_id: 4,
            body: "S these are updates about stuff",
            timestamp: null,
            update_id: 3
        }, {
            application_id: 4,
            body: "S these are updates about stuff",
            timestamp: null,
            update_id: 4
        }],
        url: "https://www.linkedin.com/jobs/"
    }]
}];


describe('Column Component', () => {

    it('Mocks job card component in react', () =>{
        // const column = screen.getByTestId('app-column');
        const { container } = render(
            <ApplicationsProvider>
                <DndProvider backend={HTML5Backend}>
                    <Column items={items}/>
                </DndProvider>
            </ApplicationsProvider>
        );
    
        console.log(container.outerHTML);
        // screen.debug();
        // expect(column).toBeInTheDocument()
        // expect(column.textContent).toBe('Show menu');
        expect(container).toContain(`
        <div>
            <div class=\"column\">
                <h2 class=\"columnTitle\"></h2>
                <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width="0" viewBox="0 0 16 16" color="#3c5a68" class="addAppButton" style="color: rgb(60, 90, 104);" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                </svg>
                <div class="component" style="opacity: 1;" draggable="true">
                    <img class="logo">
                    <h3 class="companyName"></h3>
                    <h3 class="subText"></h3>
                </div>
            </div>
        </div>`);
    });
    
});