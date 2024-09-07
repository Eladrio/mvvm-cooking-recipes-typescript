export const SEARCH_ROUTE = 'SEARCH_ROUTE';
export const CREATE_ROUTE = 'CREATE_ROUTE';
export const CREATED_RECIPES_ROUTE = 'CREATED_RECIPES_ROUTE';
export const HOME_ROUTE = 'HOME_ROUTE';

export type RoutesType = 'SEARCH_ROUTE' | 'CREATE_ROUTE' | 'CREATED_RECIPES_ROUTE' | 'HOME_ROUTE';

export const ROUTES = {
    [HOME_ROUTE]: '/',
    [SEARCH_ROUTE]: '/search',
    [CREATE_ROUTE]: '/create',
    [CREATED_RECIPES_ROUTE]: '/created-recipes'
}