import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";

const CourseList = ({ courses, deleteCourse }) => {
  return (
    <div className="course-list-container" style={{textAlign:"center"}}>
      <div className="course-list-header">
        <h1 >🎓 Course Builder Dashboard</h1>
     

      </div>

      {courses.length === 0 ? (
        <div className="empty-state" >
          <img
            style={{width:"300px",margin:"auto"}}
            src="https://cdn-icons-png.flaticon.com/512/4072/4072271.png"
            alt="no data"
          />
          <h3>No Courses Found</h3>
          <p>Create your first course to get started.</p>
          <Link to="/add" className="btn-primary">Create Course</Link>
        </div>
      ) : (
        <div className="grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} onDelete={deleteCourse} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
