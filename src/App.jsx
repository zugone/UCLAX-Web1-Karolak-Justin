import { Routes, Route } from "react-router-dom";

/* Pages: Layout ---------------------------*/
import PagesLayout from "./Common/PagesLayout/PagesLayout";

/* Pages: Primary  ---------------------------*/
import PrimaryLayout from "./Pages/Primary/PrimaryLayout";
import Home from "./Pages/Primary/Home";
import Staff from "./Pages/Primary/Staff";
import Contact from "./Pages/Primary/Contact";

/* CourseWork ---------------------------*/
import CourseWorkLayout from "./Pages/Coursework/CourseWorkLayout";
import SunAndMoon from "./Pages/Coursework/SunAndMoon/SunAndMoon";
import Essays from "./Pages/Coursework/Essays";


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
            </Route>
        </Route>
    </Routes>
  );
};

export default App;
