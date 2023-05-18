import React, { useState, lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/partials/Header';
import Body from './components/Body';
import Footer from './components/partials/Footer';
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import About from './components/Offers';
import Contact from './components/Help';
import SignIn from './components/SignIn';
import ViewRestaurant from './components/restaurant/ViewRestaurant';
import useFetchRestaurant from './Hooks/useFetchRestaurant';
import YouAreOffline from './components/offline/YouAreOffline';
import useIsOnline from './Hooks/useIsOnline';
import Instamart from './components/instamart/instamart';
import RestaurantContext from './components/contexts/restaurantContext';
const LazyCart = lazy(() => import('./components/Cart'))
const AppLayout = () => {
  const isOnline = useIsOnline()
  const [restaurantData, isLoading, isError, error] = useFetchRestaurant();
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")
  return (
    <>   
      {
        !isOnline || isError ?
          <YouAreOffline />
          :
          <div className='relative'>
          <Header searchText={searchText}
              setSearchText={setSearchText}
              restaurant={filteredRestaurant}
              setRestaurant={setFilteredRestaurant}
              allRestaurant={restaurantData} />
            <RestaurantContext.Provider value={{ restaurant: restaurantData, allRestaurants, isLoading }}>
              <Outlet />
            </RestaurantContext.Provider>
            <Footer />
          </div> 
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
      path: '/instamart',
      element:<Instamart/>
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
