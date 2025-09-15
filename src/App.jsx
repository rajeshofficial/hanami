import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import ServiceDetail from "./pages/ServiceDetail"
import ScrollToHashElement from "./ScrollToHashElement"

function App() {
  return (
    <Router>
      <Header />
        <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* individual service pages */}
       <Route
        path="/services/the-first-bloom"
        element={<ServiceDetail slug="the-first-bloom" />}
      />
      <Route
        path="/services/true-tones"
        element={<ServiceDetail slug="true-tones" />}
      />
      <Route
        path="/services/style-sculpt"
        element={<ServiceDetail slug="style-sculpt" />}
      />
      <Route
        path="/services/image-edit"
        element={<ServiceDetail slug="image-edit" />}
      />
      <Route
        path="/services/style-alchemy"
        element={<ServiceDetail slug="style-alchemy" />}
      />
      <Route
        path="/services/closet-curator"
        element={<ServiceDetail slug="closet-curator" />}
      />
      <Route
        path="/services/dining-etiquette"
        element={<ServiceDetail slug="dining-etiquette" />}
      />
      </Routes>
    </Router>
  )
}

export default App
