import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({error}) => {
  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="text-2xl text-center w-full text-red-500">
        Something went wrong: {error.message}
      </div>
    </div>
  );
};

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Paste/>
    </div>
    },
    {
      path:"/pastes/:id",
      element: (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="w-full h-full flex flex-col">
            <Navbar/>
            <ViewPaste/>
          </div>
        </ErrorBoundary>
      )
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
