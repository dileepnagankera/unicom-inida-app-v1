import "../Styles/Conferences.css";

import { useState,useEffect } from "react";

const Conferences = () => {
  const [Product, setProduct] = useState([]);
  const url = "http://localhost:5000/api/v1/conferences/";
  const getConferences = async () => {
    const data = await fetch(url);
    const result = await data.json();
    setProduct(result);
  };

  useEffect(() => {
    getConferences();
  }, []);

  
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
const currentDate = `${dd}-${mm}-${yyyy}`;
const getUpcomingConference = async (pdata) => {
   const currentDate = new Date();
 const result = pdata?.data?.map((itemup) => {
   const conferenceDate = new Date(itemup.conferenceDate); // Convert itemup.conferenceDate to a Date object
   return currentDate >= conferenceDate;
 });

 return result;
};
// const getPastConference = (Product) => {
//    return Product.data.map((item) => currentDate <= item.conferenceDate);
// };

//const pastConference = getPastConference(Product);
const upcomingConference = getUpcomingConference(Product);
console.log(upcomingConference, "upcomingConference");

  return (
    <>
      <section>
        <div className="card-container1">
          <div className="row">
            <h1>Upcoming Conferences</h1> 
            {Product?.data?.map((item) => (
              <>
                  
                <div className=" col-md-4">
                  <img src={item.image} alt="" />
                  <div className="card-content">
                    <p>
                      {item.conferenceName}
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </p>
                    <hr></hr>
                    <p>
                      {item.conferenceDate}, {item.location}
                    </p>
                  </div>
                 
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Conferences;
