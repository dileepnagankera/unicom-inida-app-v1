import "../Styles/Conferences.css";
import { FaPen } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

const Conferences = () => {
  return (
    <section>
      <div className="upcomig">
        <p>
          <FaPen size={30} />
        </p>
        <h1>Upcoming Conferences</h1>
      </div>
      <div className="card-confarence">
        <div className="card-sss">
          <div className="card-item">
            <img src="./Images/photo-1.jpg" alt="" />
            <div className="card-content">
              <p>
                TESTEXPO, AGILE, DEVOPS & LOW CODE EXPO ......
                <a href="#">READ MORE</a>
              </p>
              <hr></hr>
              <p>Thu, 19 Oct 2023, London</p>
            </div>
            <div className="book">
              <FaRegKeyboard size={50} color="#46c5f0" />

              <button className="btm-key">
                BooK Now <FaGreaterThan />
              </button>
            </div>
          </div>
          <div className="card-item1">
            <img src="./Images/photo-2.jpg" alt="" />
            <div className="card-content">
              <p>
                KNOWLEDGE MANAGEMENT, INFORMATION AND DATA: CONVER ......
                <a href="#">READ MORE</a>
              </p>
              <hr></hr>
              <p>Thu, 19 Oct 2023, London</p>
            </div>
            <div className="book">
              <FaRegKeyboard size={50} color="#46c5f0" />

              <button className="btm-key">
                BooK Now <FaGreaterThan />
              </button>
            </div>
          </div>
          <div className="card-item2">
            <img src="./Images/photo-3.jpg" alt="" />
            <div className="card-content">
              <p>
                INDIA TESTING LEAGUE 2023 ......<br></br>
                <a href="#">READ MORE</a>
              </p>
              <hr></hr>
              <p>Thu, 23 Nov 2023, Bengaluru</p>
              <div className="book">
                <FaRegKeyboard size={50} color="#46c5f0" />

                <button className="btm-key">
                  BooK Now <FaGreaterThan />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-sss">
          <div className="card-item">
            <img src="./Images/photo-4.jpg" alt="" />
            <div className="card-content">
              <p>
                INDIA TESTING AWARDS 2023 ......<br></br>
                <a href="#">READ MORE</a>
              </p>
              <hr></hr>
              <p>Thu, 23 Nov 2023, Bengaluru</p>
            </div>
            <div className="book">
              <FaRegKeyboard size={50} color="#46c5f0" />

              <button className="btm-key">
                BooK Now <FaGreaterThan />
              </button>
            </div>
          </div>
          <div className="card-item1">
            <img src="./Images/photo-5.jpg" alt="" />
            <div className="card-content">
              <p>
                World Conference Next Generation Testing 2023 ......
                <a href="#">READ MORE</a>
              </p>
              <hr></hr>
              <p>Thu, 23 Nov 2023, Bengaluru</p>
            </div>
            <div className="book">
              <FaRegKeyboard size={50} color="#46c5f0" />

              <button className="btm-key">
                BooK Now <FaGreaterThan />
              </button>
            </div>
          </div>
          <div className="card-item2">
            <img src="./Images/photo-6.jpg" alt="" />
            <div className="card-content">
              <p>
                Crypto: Navigating the Regulatory Regime ......
                <a href="#">READ MORE</a>
              </p>
              <hr></hr>
              <p>Thu, 07 Dec 2023, Online</p>
              <div className="book">
                <FaRegKeyboard size={50} color="#46c5f0" />

                <button className="btm-key">
                  BooK Now <FaGreaterThan />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="past">
        <p>
          <FaPen size={30} />
        </p>
        <h1>Past Conferences</h1>
      </div>
      <div className="past-conference">
        <div className="first-past">
          <div className="past-item">
            <img src="./images/photo-7.jpg" alt="" />
            <p>
              KNOWLEDGE MANAGEMENT, INFORMATION AND DATA: CONVER ......{" "}
              <a href="#">READ MORE</a>
            </p>
            <hr></hr>
            <p>Mon, 25 Sep 2023, Online</p>
          </div>
          <div className="past-item1">
            <img src="./images/photo-8.jpg" alt="" />
            <p>
              Crypto: Navigating the Regulatory Regime ......
              <a href="#">READ MORE</a>
            </p>
            <hr></hr>
            <p>Thu, 21 Sep 2023, Online</p>
          </div>
          <div className="past-item2">
            <img src="./images/photo-9.jpg" alt="" />
            <p>
              Application of Generative AI, LLMs and NLP in Trad ......
              <a href="#">READ MORE</a>
            </p>
            <hr></hr>
            <p>Wed, 20 Sep 2023, Online</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conferences;
