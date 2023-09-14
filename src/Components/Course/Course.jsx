const Course = ({ course }) => {
const {img, name, description, price, credit} = course;

  console.log(course);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-8 pt-5">
          <img
            src={img}
            alt="Shoes"
            className="w-full h-[150px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-between items-center my-5">
            <p>$ Price : {price}</p>
            <p>Credit : {credit}hr</p>
          </div>
          
            <button className="btn bg-blue-600 text-white hover:text-black">Select</button>
         
        </div>
      </div>
    </div>
  );
};

export default Course;
