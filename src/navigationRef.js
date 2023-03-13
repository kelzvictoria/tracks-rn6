//import { NavigationActions } from 'react-navigation'

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

let navigator = createNavigationContainerRef();

export const setNavigator = (nav) => {
    navigator = nav;
}

export const navigate = (routeName, params) => {
    if (navigator.isReady()){
        navigator.navigate(routeName, params)
    }
   /* navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )*/
}