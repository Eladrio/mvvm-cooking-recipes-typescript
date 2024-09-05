import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from "react-router-dom";
// component
import NavbarComponent from "../navbarComponent";

describe("Tests Navbar Component", () => {
  it("mounts the component", () => {
    render(
      <BrowserRouter>
        <NavbarComponent/>
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it("click on Search tab", () => {
    render(
      <BrowserRouter>
        <NavbarComponent/>
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    
    const searchLink = screen.getByText('Search');
    fireEvent.click(searchLink);

    // eslint-disable-next-line testing-library/no-node-access
    expect(searchLink.closest('li')).toHaveClass('active');
  });
  it("click on Create tab", () => {
    render(
      <BrowserRouter>
        <NavbarComponent/>
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    
    const createLink = screen.getByText('Create');

    fireEvent.click(createLink);

    // eslint-disable-next-line testing-library/no-node-access
    expect(createLink.closest('li')).toHaveClass('active');
  });
  it("click on Your recipes tab", () => {
    render(
      <BrowserRouter>
        <NavbarComponent/>
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    
    const yourRecipesLink = screen.getByText('Your recipes');

    fireEvent.click(yourRecipesLink);

    // eslint-disable-next-line testing-library/no-node-access
    expect(yourRecipesLink.closest('li')).toHaveClass('active');
  });
});
