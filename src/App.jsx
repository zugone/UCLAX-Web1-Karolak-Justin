import { Routes, Route } from "react-router-dom";

/* Pages: Layout ---------------------------*/
import PagesLayout from "./Common/PagesLayout/PagesLayout";

/* Pages: Primary  ---------------------------*/
import PrimaryLayout from "./Pages/Primary/PrimaryLayout";
import Home from "./Pages/Primary/Home/Home";
import Staff from "./Pages/Primary/Staff/Staff";
import Contact from "./Pages/Primary/Contact/Contact";

/* CourseWork ---------------------------*/
import CourseWorkLayout from "./Pages/Coursework/CourseWorkLayout";
import SunAndMoon from "./Pages/Coursework/SunAndMoon/SunAndMoon";
import Essays from "./Pages/Coursework/Essays/Essays";
import Responsive from "./Pages/Coursework/Responsive";


const App = () => {
  return (
    <Routes>
        <Route element= { <PagesLayout/> }>
            <Route element= { <PrimaryLayout/> } path="">
                <Route element={<Home />} path='' />
                <Route element={<Staff />} path='staff' />
                <Route element={<Contact />} path='contact' />
            </Route>

            <Route element= { <CourseWorkLayout/> }path="course-work">
                <Route element={<Essays />} path='' />
                <Route element={<SunAndMoon />} path='sun-and-moon' />
                <Route element={<Responsive />} path='responsive' />
            </Route>
        </Route>
    </Routes>
  );
};

export default App;
