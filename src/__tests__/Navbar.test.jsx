import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar'
import { Provider } from 'react-redux';



test('test 1 ', () => {
    <Provider>
        render(<Navbar />)
    </Provider>

    const head = screen.queryByLabelText('web-name');

    if (head) {
        expect(head).toBeInTheDocument("Present in the document");
    }
    else {
        expect(head).not.toBeInTheDocument("Not present in the document");
    }
});

test('test 2 ', () => {
    <Provider>
        render(<Navbar />)
    </Provider>
    const hedName = screen.queryByLabelText("store-name");
    if (hedName) {
        expect(hedName).toBeInTheDocument();
    }
    else {
        expect(hedName).not.toBeInTheDocument("Not present in the document");
    }
});

test('test 3 ', () => {
    <Provider>
        render(<Navbar />)
    </Provider>
    const hedName = screen.queryByLabelText("product-page");
    if (hedName) {
        expect(hedName).toBeInTheDocument();
    }
    else {
        expect(hedName).not.toBeInTheDocument("Not present in the document");
    }
});

test('render the all products ', () => {
    <Provider>
        render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
        );
    </Provider>


    const linkElement = screen.queryByTestId('product-page');
    if (linkElement) {
        expect(linkElement).toBeInTheDocument();
    }
    else {

        expect(linkElement).not.toBeInTheDocument();
    }
});

test('expected router is clicked on linkk ', async () => {
    <Provider>
        render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
        );
    </Provider>

    const linkElement = screen.queryByTestId('product-page');
    await waitFor(() => {
        expect(linkElement).toBeInTheDocument();
    });
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe('/');
})