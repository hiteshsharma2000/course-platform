import { Link } from "react-router-dom";

const CourseCard = ({ course, onDelete }) => {
  return (
    <div className="card">
      <img
        src={course.cover || "https://via.placeholder.com/200"}
        alt="cover"
      />
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <p><b>Chapters:</b> {course.chapters?.length || 0}</p>

      <div className="actions">
        <Link to={`/course/${course.id}`}>View</Link>
        <Link to={`/edit/${course.id}`}>Edit</Link>
        <button onClick={() => onDelete(course.id)}>Delete</button>
      </div>
    </div>
  );
};

export default CourseCard;
