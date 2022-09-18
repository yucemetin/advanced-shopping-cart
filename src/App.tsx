import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Navbar from "./components/Navbar"
import NotFound from "./pages/NotFound"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { FilterProvider } from "./context/FilterContext"

function App() {

  return (
    <ShoppingCartProvider>
      <FilterProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </FilterProvider>
    </ShoppingCartProvider>

  )
}

export default App
