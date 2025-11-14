import { useNavigate, useParams } from "react-router-dom";
import CourseForm from "../components/CourseForm";

export const AddEditCourse = ({ addCourse, updateCourse, courses = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const existingCourse = courses.find((c) => c.id === Number(id));

  const handleSubmit = (data) => {
    if (existingCourse) {
      updateCourse({ ...existingCourse, ...data });
    } else {
      addCourse(data);
    }
    navigate("/");
  };

  return (
    <div className="page">
      <h2>{existingCourse ? "Edit Course" : "Add New Course"}</h2>
      <CourseForm onSubmit={handleSubmit} initialData={existingCourse} />
    </div>
  );
};
 
