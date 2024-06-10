import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout chidren={<p>Home Page</p>} />} />
        <Route path="/search" element={<Layout chidren={<p>Search Page</p>} />}/>
        <Route path="/register" element={<Layout chidren={<Register />} />}/>
        <Route path="/sign-in" element={<Layout chidren={<SignIn />} />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App