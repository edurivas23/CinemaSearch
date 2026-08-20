import { createBrowserRouter } from "react-router"
import { RootLayout } from "../layouts/RootLayout"
import { MoviePages } from "../pages/MoviePages"
import { Hero } from "../layouts/Hero"
import { AboutMovie } from "../pages/AboutMovie"
import { redirect } from "react-router"
import { Page404 } from "../pages/Page404"
import { Search } from "../pages/Search"
import { Header } from "../layouts/Header"
import { HeaderMovie } from "../layouts/HeaderMovie"
import { SearchHeader } from "../layouts/SearchHeader"


export const index = (createBrowserRouter([


  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        loader: () => redirect("/upcoming"),
        element:
          <>
            <Header />
            <Hero />
            <MoviePages />
          </>
      },

      {
        path: "/:category",
        element:
          <>
            <Header />
            <Hero />
            <MoviePages />
          </>
      },
      {

        path: `/movie/:id`,
        element:
          <>
            <HeaderMovie />
            <AboutMovie />
          </>
      },
      {
        path: '/search',

        element:
          <>
            <SearchHeader />
            <Search />
          </>
      },
      {
        path: '/404',

        element: <>

          <Page404 />
        </>
      },
      {
        path: "*",
        loader: () => redirect("/404")
      }
    ]
  }
]))

