import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './Components/Layout/AppLayout';
import { Search } from './Pages/Search';

import { Help } from './Pages/Help/Help';
import { Cart } from './Pages/Cart';
import { Home } from './Pages/Home/Home';
import { PureVeg } from './Pages/Home/CarouselOne/pureVeg/PureVeg/';
import { Paratha } from './Pages/Home/CarouselOne/Paratha/Paratha/';
import { Chinese } from './Pages/Home/CarouselOne/Chinese';
import { Tea } from './Pages/Home/CarouselOne/Tea';
import { Coffee } from './Pages/Home/CarouselOne/Coffee';
import { NorthIndian } from './Pages/Home/CarouselOne/NorthIndian';
import { Biryani } from './Pages/Home/CarouselOne/Biryani';
import { Khichdi } from './Pages/Home/CarouselOne/Khichdi';
import { Cakes } from './Pages/Home/CarouselOne/Cakes';
import { Desserts } from './Pages/Home/CarouselOne/Desserts';
import { Rasgulla } from './Pages/Home/CarouselOne/Rasgulla';
import { GulabJamun } from './Pages/Home/CarouselOne/GulabJamun';
import { CholeBhature } from './Pages/Home/CarouselOne/CholeBhature';
import { SouthIndian } from './Pages/Home/CarouselOne/SouthIndian';
import { Noodles } from './Pages/Home/CarouselOne/Noodles';
import { AdilHotel } from './Pages/Home/ResWithOnlineFood/Adil Hotel/AdilHotel';


import { Explogin } from './Pages/loginForm/Explogin';
import { Login } from './Pages/loginForm/Login';
import { ParathaMenu } from './Pages/Home/CarouselOne/paratha/ParathaMenu';
import { PureVegMenu } from './Pages/Home/CarouselOne/pureVeg/PureVegMenu';
import { Restaurants } from './Pages/Home/BestPlaceEat/Restaurants';







function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Login/>,
    // },
    {
      path: "/",
      element: <AppLayout />,
      children: [
        // {
        //   path: "/",
        //   element: <H />,
        // },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Search",
          element: <Search />,
        },
        {
          path: "/Help",
          element: <Help />,
        },

        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/Cart",
          element: <Cart />,
        },
        {
          path: "/PureVeg",
          element: <PureVeg />,
        },
        {
          path: "/Paratha",
          element: <Paratha />,
        },
        {
          path: "/Chinese",
          element: <Chinese />,
        },
        {
          path: "/Tea",
          element: <Tea />,
        },
        {
          path: "/Coffee",
          element: <Coffee />,
        },
        {
          path: "/NorthIndian",
          element: <NorthIndian />,
        },
        {
          path: "/Biryani",
          element: <Biryani />,
        },
        {
          path: "/Khichdi",
          element: <Khichdi />,
        },
        {
          path: "/Cakes",
          element: <Cakes />,
        },
        {
          path: "/Desserts",
          element: <Desserts />,
        },
        {
          path: "/Rasgulla",
          element: <Rasgulla />,
        },
        {
          path: "/GulabJamun",
          element: <GulabJamun />,
        },
        {
          path: "/CholeBhature",
          element: <CholeBhature />,
        },
        {
          path: "/SouthIndian",
          element: <SouthIndian />,
        },
        {
          path: "/Noodles",
          element: <Noodles />,
        },
        {
          path: "/AdilHotel",
          element: <AdilHotel />,
        },
        {
          path: "/ParathaMenu",
          element: <ParathaMenu />,
        },
        {
          path: "/PureVegMenu",
          element: <PureVegMenu/>,
        },
        {
          path: "/Restaurants",
          element: <Restaurants/>,
        },

      ]
    }

  ]);
  return <RouterProvider router={router} />

};
export default App;
