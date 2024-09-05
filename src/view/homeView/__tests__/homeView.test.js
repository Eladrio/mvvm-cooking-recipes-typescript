import { fireEvent, render, screen } from "@testing-library/react";
// component
import HomeView from "../homeView";

import { SEARCH_ROUTE, CREATE_ROUTE } from '../../../constants/routes';

// custom hook component uses
import * as useHomeViewController from "../../../viewController/useHomeViewController";
jest.mock("../../../viewController/useHomeViewController");
const mockedHook = useHomeViewController;

// viewControllerHook mock
const mocksViewControllerHook = ({ mockedOnClick = () => {} }) => {
  mockedHook.default.mockImplementation(() => {
    const onRedirectionClick = (value) => {
        mockedOnClick(value);
    };
    return {
        handleRedirect: onRedirectionClick,
    };
  });
};

describe("Tests HomeView", () => {
  it("mounts the view with a title and two options", () => {
    //mocks ViewController hook
    mocksViewControllerHook({});

    render(<HomeView />);

    expect(screen.getByText("Homepage of Recipes App")).toBeInTheDocument();
    expect(screen.getByText("Create recipe")).toBeInTheDocument();
    expect(screen.getByText("Search recipe")).toBeInTheDocument();
  });

  it("Should call handleRedirect with the correct parameter on a click of the create recipe option", () => {
    //mocks ViewController hook
    const onClickMock = jest.fn();
    mocksViewControllerHook({
      mockedOnClick: onClickMock,
    });

    render(<HomeView />);

    const optionElement = screen.getByText('Create recipe');

    fireEvent.click(optionElement);

    expect(onClickMock).toHaveBeenCalledWith(CREATE_ROUTE);
  });

  it("Should call handleRedirect with the correct parameter on a click of the search recipe option", () => {
    //mocks ViewController hook
    const onClickMock = jest.fn();
    mocksViewControllerHook({
      mockedOnClick: onClickMock,
    });

    render(<HomeView />);

    const optionElement = screen.getByText('Search recipe');

    fireEvent.click(optionElement);

    expect(onClickMock).toHaveBeenCalledWith(SEARCH_ROUTE);
  });
});
