import { useState, useEffect } from "react";

const CourseForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    cover: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.description) {
      alert("Please fill in required fields");
      return;
    }
    onSubmit(form);
  };

  return (
   <form className="course-form" onSubmit={handleSubmit}>
  <label>Course Name*</label>
  <input
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Enter course name"
  />

  <label>Description*</label>
  <textarea
    name="description"
    value={form.description}
    onChange={handleChange}
    placeholder="Enter course description"
  />

  <label>Cover Image URL</label>
  <input
    type="text"
    name="cover"
    value={form.cover}
    onChange={handleChange}
    placeholder="https://example.com/image.jpg"
  />

  <button type="submit" className="btn-primary">💾 Save Course</button>
</form>

  );
};

export default CourseForm;
