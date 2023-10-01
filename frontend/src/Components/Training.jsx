import "../Styles/Training.css";
import { FaSearchDollar } from "react-icons/fa";

const Training = () => {
  return (
    <section>
      <div className="Training">
        <h1>Training</h1>
      </div>
      <div className="training-par">
        <p>
          UNICOM provides public, online and bespoke training in different topic
          areas including Agile, Testing and DevOps, Data Science, Quantitative
          Finance and Programme and Project Management. It includes accredited,
          certification courses and workshops.
        </p>
        <p>
          Training is available as (i) public scheduled courses (ii) in-house,
          (iii) in multiple geographies [UK; Europe; South Africa; Australasia;
          India; SE-Asia] and (iv) online.
        </p>
      </div>
      <div className="training-box">
        <div className="training-box1">
          <h1>Training</h1>
        </div>
        <div className="training-box2">
          <h1>Faculty</h1>
        </div>
      </div>
      <div className="training-icon">
        <div className="training-icon1">
          <FaSearchDollar className="ffff" />
          <h1>Refine by category</h1>
        </div>
        <div className="training-icon2">
          <input type="name"></input>
        </div>
      </div>
      <div className="ddddd">
        <h1>Course title</h1>
        <h1>Category</h1>
        <h1>Delivery format</h1>
        <h1>Learn more</h1>
      </div>
      <div className="training-adds">
        <p className="sad">Certificate</p>
        <p className="sad1">Quantitative Finance</p>
        <div className="dddddddd">
          <img src="./Images/image-1.png" alt="" />
          <img src="./Images/image-1.png" alt="" />
          <img src="./Images/image-1.png" alt="" />
        </div>
        <p className="sad2">More info & dates</p>
      </div>
    </section>
  );
};

export default Training;
