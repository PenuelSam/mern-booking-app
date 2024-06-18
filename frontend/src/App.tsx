import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import AddHotel from "./pages/AddHotel"
import { useAppContext } from "./contexts/AppContexts"
import MyHotels from "./pages/MyHotels"
import EditHotel from "./pages/EditHotel"
import Search from "./pages/Search"

function App() {
  const {isLoggedIn} = useAppContext()
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout chidren={<p>Home Page</p>} />} />
        <Route path="/search" element={<Layout chidren={<Search />} />}/>
        <Route path="/register" element={<Layout chidren={<Register />} />}/>
        <Route path="/sign-in" element={<Layout chidren={<SignIn />} />}/>
        {isLoggedIn && (
        <>
          <Route path="/add-hotel" element={<Layout chidren={<AddHotel />} />}/>
          <Route path="/edit-hotel/:hotelId" element={<Layout chidren={<EditHotel />} />}/>
          <Route path="/my-hotels" element={<Layout chidren={<MyHotels />} />}/>
        </>
        )}
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App