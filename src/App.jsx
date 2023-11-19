import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { SignIn, SignUp } from "./pages"
import Dashboard from "./pages/dashboard/Dashboard"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
