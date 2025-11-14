import { useParams, Link } from "react-router-dom";

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course)
    return (
      <div className="not-found">
        <h2>❌ Course Not Found</h2>
        <p>The course you’re looking for doesn’t exist.</p>
        <Link to="/" className="btn-primary">← Back to Courses</Link>
      </div>
    );

  return (
    <div className="course-detail">
      <div className="detail-card">
        <img
          src={course.cover || "https://via.placeholder.com/600x300"}
          alt="course cover"
          className="detail-img"
        />
        <div className="detail-content">
          <h1>{course.name}</h1>
          <p className="detail-desc">{course.description}</p>
          <p className="detail-meta">📘 Chapters: {course.chapters?.length || 0}</p>
          <Link to="/" className="btn-primary">← Back to Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
