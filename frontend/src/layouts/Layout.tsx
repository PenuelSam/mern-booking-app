import Footer from "../components/Footer"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import Hero from "./Hero"

interface Props {
    chidren: React.ReactNode; 
}

const Layout = ({chidren}: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <div className="container mx-auto">
          <SearchBar />
        </div>
        <div className="container mx-auto py-10 flex-1">
            {chidren}
        </div>
        <Footer/>
    </div>
  )
}


export default Layout