import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./componetns/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import Books from "./pages/books/Books";
import Test from "./pages/test/Test";
import Store from "./pages/store/Store";
import NotFound from "./componetns/notFound/NotFound";
import Flashcard from "./pages/flashcard/Flashcard";
import Basic from "./pages/basic/Basic";
import Intermediate from "./pages/intermediate/Intermediate";
import Advanced from "./pages/advanced/Advanced";

import Footer from "./componetns/footer/Footer";

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
                    <Route path="/courses/flashcard" element={<Flashcard />}/>
                    <Route path="/courses/basic" element={<Basic />}/>
                    <Route path="/courses/intermediate" element={<Intermediate />}/>
                    <Route path="/courses/advanced" element={<Advanced />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
