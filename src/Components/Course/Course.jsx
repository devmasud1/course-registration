const Course = ({ course, handleAddCourse }) => {
  const { img, name, description, price, credit } = course;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-8 pt-8">
        <img src={img} alt={name} className="w-full h-[200px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="flex justify-between items-center my-5">
          <p>$ Price : {price}</p>
          <p>Credit : {credit}hr</p>
        </div>

        <button
          onClick={() => handleAddCourse(course)}
          className="btn bg-blue-600 text-white hover:text-black"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Course;
