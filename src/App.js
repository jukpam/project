import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./componetns/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import Books from "./pages/books/Books";
import Test from "./pages/test/Test";
import Store from "./pages/store/Store";
import NotFound from "./componetns/notFound/NotFound";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/courses" element={<Courses />}/>
                    <Route path="/books" element={<Books />}/>
                    <Route path="/test" element={<Test />}/>
                    <Route path="/store" element={<Store />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
