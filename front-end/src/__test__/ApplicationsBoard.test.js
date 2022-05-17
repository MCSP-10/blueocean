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

    it('Displays columns titles', () => {
        const titles = screen.getByTestId('app-column');
        expect(titles).toBeInTheDocument();
        expect(titles.textContent).toBe('InterestedApplyingInterviewingOfferedRejected');
    });
    
});