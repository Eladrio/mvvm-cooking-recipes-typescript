import { renderHook, act } from "@testing-library/react";
// unit
import useHomeViewController from "../useHomeViewController";

import { ROUTES } from "../../constants/routes";

// Mocking the useNavigate hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));

describe("Tests useHomeViewController", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    })
  it("calls navigate when handleRedirect gets called", () => {
    const navigateMock = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValueOnce(navigateMock);

    const { result } = renderHook(useHomeViewController);

    const destination = "SEARCH_ROUTE";
    act(() => result.current.handleRedirect(destination));

    expect(navigateMock).toHaveBeenCalledWith(ROUTES[destination]);
  });
});
