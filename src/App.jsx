import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import MapView from "./pages/MapView"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MapView />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
