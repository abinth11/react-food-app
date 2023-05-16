import React, { useState, lazy, Suspense, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import About from './components/Offers';
import Contact from './components/Help';
import SignIn from './components/SignIn';
import ViewRestaurant from './components/ViewRestaurant';
import useFetchRestaurant from './Hooks/useFetchRestaurant';
export const MyContext = createContext()
import YouAreOffline from './components/offline/YouAreOffline';
import useIsOnline from './Hooks/useIsOnline';
const LazyCart = lazy(() => import('./components/Cart'))
const AppLayout = () => {
  const isOnline = useIsOnline()
  const [restaurantData, isLoading, isError, error] = useFetchRestaurant();
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")
  console.log(isError)
  return (
    <>   
      {
        !isOnline || isError ?
          <YouAreOffline />
          : <>
            <Header searchText={searchText}
              setSearchText={setSearchText}
              restaurant={filteredRestaurant}
              setRestaurant={setFilteredRestaurant}
              allRestaurant={restaurantData} />
            <MyContext.Provider value={{ restaurant: restaurantData, allRestaurants, isLoading }}>
              <Outlet />
            </MyContext.Provider>
            <Footer />
          </>
      }
    </>
  )
}

const AppRouter = createBrowserRouter([{
  path: '/',
  element: <AppLayout />,
  errorElement: <ErrorElement />,
  children: [
    {
      path: '/',
      element: <Body />
    },
    {
      path: '/offers',
      element: <About />
    },
    {
      path: '/help',
      element: <Contact />
    },
    {
      path: '/login',
      element: <SignIn />
    },
    {
      path: '/Cart',
      element: (<Suspense>
        <LazyCart />
      </Suspense>)
    },
    {
      path: '/view-restaurant/:resId',
      element: <ViewRestaurant />
    }
  ]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);
