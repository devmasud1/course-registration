const CourseCart = ({ selectedCourse }) => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <p className="px-8 pt-8 text-xl font-bold text-blue-500">
          Credit Hour Remaining 20 hr
        </p>
        <hr className="w-3/4 mx-auto my-4" />
        <h2 className="px-8 mb-4 text-xl font-bold ">Course Name</h2>
        <div className="card-body pt-0">
          {selectedCourse.map((course, idx) => (
            <p key={course.id}>
              {idx + 1} <span>{course.name}</span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseCart;
