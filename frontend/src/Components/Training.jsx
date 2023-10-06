
import "../Styles/Training.css";
import { FaSearchDollar } from "react-icons/fa";

const Training = () => {

  const trainingList = [
    {
      courseTitle:
        "Certificate in Sentiment Analysis and Alternative Data for Finance (CSAF)",
      category: "Quantitative Finance",
      deliveryFormat: "online physical",
      learnMore: "More info & dates",
    },
    {
      courseTitle: "Certified Professional Agile Testing",
      category: "Agile",
      deliveryFormat: "online physical",
      learnMore: "More info & dates",
    },
    {
      courseTitle: "Certified Scrum Master",
      category: "Agile",
      deliveryFormat: "online physical",
      learnMore: "More info & dates",
    },
    {
      courseTitle: "Certified Scrum Product Owner Certification",
      category: "Agile",
      deliveryFormat: "online physical",
      learnMore: "More info & dates",
    },
    {
      courseTitle: "Cloud Computing with AWS Level 2",
      category: "Could",
      deliveryFormat: "online physical",
      learnMore: "More info & dates",
    },
    {
      courseTitle: "Deep Learning Recent Advances and Applications",
      category: "Al & Ml",
      deliveryFormat: "online physical",
      learnMore: "More info & dates",
    },
    {
      courseTitle: "DevOps Technical Training",
      category: "DevOps",
      deliveryFormat: "online physical",
      learnMore: "More info & dates",
    },
  ];

 

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
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Category</th>
              <th>Delivery format</th>
              <th>Learn More</th>
            </tr>
          </thead>
          <br></br>
          <tbody className="course">
            {trainingList.map((item) => (
              <tr>
                <td>
                  <div className="box-1">{item.courseTitle}</div><hr></hr>
                </td>
                <td>
                  <div className="box-1">{item.category}</div>
                </td>
                <td>
                  <div className="box-1">{item.deliveryFormat}</div>
                </td>
                <td>
                  <div className="box-1">
                    <a href="#">{item.learnMore}</a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Training;
