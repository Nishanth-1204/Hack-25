import { useEffect, useState } from "react";
import { api } from "../../../../utils/api";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await api.get("/users/registration").then((res) => {
        setData(res.data.data);
      });
    };

    fetchData();
  }, []);

  console.log(data);
  data.forEach((user: any) => {
    console.log(user);
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((user: any) => (
        <div>
          <h1>Team Name: {user.teamName}</h1>
          <h1>UID: {user.uid}</h1>
          <h1>
            Abstract:{" "}
            <a
              href={`http://localhost:8000/pdf/users/${user.abstract}`}
              target="_blank"
            >
              PDF Files
            </a>
          </h1>
          {user.teamMembers.map((member: any) => (
            <div>
              <h1>Name: {member.name}</h1>
              <h1>email: {member.email}</h1>
              <h1>Phone Number: {member.phoneNumber}</h1>
              <h1>Year Of Study: {member.yearOfStudy}</h1>
              <h1>Department: {member.department}</h1>
              <h1>College: {member.college}</h1>
              <h1>Attendance: {member.attendance ? "Present" : "Absent"}</h1>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
