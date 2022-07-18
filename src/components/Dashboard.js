import axios from "axios";
import React, { useEffect, useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((res) => setData(res.data));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Dashboard</h2>
          <div className="dash-container">
            {data.map((item) => (
              <div key={item.id} className="dash-item">
                <img
                  src="https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png"
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <p>{item.id}</p>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
