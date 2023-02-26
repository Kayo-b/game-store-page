import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
import userEvent from "@testing-library/user-event";
import mockFetch from './mocks/mockFetch'
import App from './App';
import Nav from './Nav';
import Shop from './Shop';
import { ItemsList } from './Shop';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
let windowFetchSpy;
beforeEach(() => {
  windowFetchSpy = jest.spyOn(window, 'fetch').mockImplementation(mockFetch)

});

afterEach(() => {
  jest.restoreAllMocks();
})


describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    const appHeader = screen.getByRole("heading");
    expect(appHeader.textContent).toMatch(/Hello App/i);
  });
});

describe("Nav component", () => {
  it("renders  nav title, About and Shop", () => {
    render(<Nav/>, {wrapper:BrowserRouter});
    const navHeader = screen.getByRole("heading");
    const listItems = screen.getAllByRole("listitem")

    expect(navHeader.textContent).toMatch(/nav/i);
    expect(listItems[0].textContent).toMatch(/about/i);
    expect(listItems[1].textContent).toMatch(/shop/i);
    // expect(shop.textContent).toMatch(/shop/i);
  });
  
});

describe("Shop component", () => {
  

    it("renders correct link", () => {
      const { container } = render(<Shop />)
      expect(container).toMatchSnapshot();
    });

    it("fetch was called", async () => {
        render(<Shop />);
        
        // const {getByRole} = render(<Shop />)
        // expect(getByRole("heading").textContent).toMatch(/header test/i)
        expect(windowFetchSpy).toHaveBeenCalled();
        
        
        // const gameShark = screen.getByText(/info/i)
        // expect(gameShark).toBeInTheDocument()
        // userEvent.click(gameShark)
    })


    // it("renders game name", async () => {
    //   render(<Shop />);
    // //   render(<ItemsList/>)
    // //   function sleep(period) {
    // //     return new Promise (resolve => setTimeout(resolve, period))
    // // }
    // // await act(async() => {
    // //     await sleep(2000)
    // // })
    // // await new Promise(process.nextTick);
    //   const title = screen.getByText(/teste/i)
    //   expect(title).toBeInTheDocument()
    // })

    test('should get nationalities for a name', async() => {
      render(<BrowserRouter><Shop /></BrowserRouter>);
    
      //simulate filling up the textbox
      // const personNameInput = screen.getByRole('textbox');
      // fireEvent.change(personNameInput, {target: {value: 'hn'}})
      // expect(personNameInput.value).toBe('hn');
    
      // //click the button
      //  const getNationalitiesBtn = screen.getByRole('button', { name: 'Get gud' });
      //  expect(getNationalitiesBtn).not.toBeDisabled();
      //  userEvent.click(getNationalitiesBtn);
    
       //verify percent and flag images are displayed
  
       expect(await screen.findByText('4 deals found')).toBeVisible();
       
    
       expect(windowFetchSpy).toHaveBeenCalled();
       expect(windowFetchSpy).toHaveBeenCalledWith('https://www.cheapshark.com/api/1.0/deals?storeID=1');
       expect(screen.getAllByText('Sid Meiers Civilization VI')[0]).toBeVisible();
       expect(screen.getAllByText('2 Sid Meiers Civilization VI')[1]).toBeVisible();
      //  expect(screen.getByText('IE - 4.21%')).toBeVisible();
      
       const flagImages = screen.getAllByRole('img');
       expect(flagImages).toHaveLength(4);
      //  expect(flagImages[0]).toHaveAccessibleName('US flag');
      //  expect(flagImages[1]).toHaveAccessibleName('IM flag');
      //  expect(flagImages[2]).toHaveAccessibleName('IE flag');
    });
  }


  
  );