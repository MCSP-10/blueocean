import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import { ApplicationsBoard } from 'Applications';
import { ApplicationsProvider } from 'Applications';

describe('ApplicationsBoard Component', () => {
    
    render(
        <ApplicationsProvider>
            <ApplicationsBoard />
        </ApplicationsProvider>
    );

    it('Displays column titles', () => {
        const titles = screen.getByTestId('app-column-title');

        // console.log(titles.textContent);
        
        expect(titles).toBeInTheDocument();
        expect(titles.textContent).toBe('InterestedApplyingInterviewingOfferedRejected');
    });
    
});