import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseList from "./pages/CourseList";
import {AddEditCourse} from "./pages/AddEditCourse";
import CourseDetail from "./pages/CourseDetail";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  const [courses, setCourses] = useState(() => {
    const stored = localStorage.getItem("courses");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const addCourse = (course) =>
    setCourses([...courses, { ...course, id: Date.now(), chapters: [] }]);

  const updateCourse = (updated) =>
    setCourses(courses.map((c) => (c.id === updated.id ? updated : c)));

  const deleteCourse = (id) =>
    setCourses(courses.filter((c) => c.id !== id));

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route
          path="/"
          element={<CourseList courses={courses} deleteCourse={deleteCourse} />}
        />
        <Route path="/add" element={<AddEditCourse addCourse={addCourse} />} />
        <Route
          path="/edit/:id"
          element={<AddEditCourse courses={courses} updateCourse={updateCourse} />}
        />
        <Route path="/course/:id" element={<CourseDetail courses={courses} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
