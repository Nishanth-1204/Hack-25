import React, { useState } from "react";
import "./Registration.css";
import { api } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

interface Member {
  name: string;
  email: string;
  college: string;
  phoneNumber: number;
  yearOfStudy: string;
  department: string;
}

const Register: React.FC = () => {
  const [teamName, setTeamName] = useState<string>("");
  const [numMembers, setNumMembers] = useState<number>(0);
  const [members, setMembers] = useState<Member[]>([]);
  const [ideaFile, setIdeaFile] = useState<File | null>(null);

  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIdeaFile(e.target.files[0]);
    }
  };

  const handleNumMembersChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setNumMembers(value);
    setMembers(
      Array(value).fill({
        name: "",
        email: "",
        college: "",
        phoneNumber: "",
        yearOfStudy: "",
        department: "",
      })
    );
  };

  const handleMemberChange = (
    index: number,
    field: keyof Member,
    value: string | number
  ) => {
    const updatedMembers = [...members];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [field]: field === "phoneNumber" ? Number(value) || "" : value,
    };
    setMembers(updatedMembers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || members.length === 0 || !ideaFile) {
      alert("Please fill in all the fields.");
    }

    const form = new FormData();
    form.append("teamName", teamName);
    if (ideaFile) form.append("abstract", ideaFile);
    form.append("teamMembers", JSON.stringify(members));
    if (localStorage.getItem("registered") !== "true") {
      const form = new FormData();
      form.append("teamName", teamName);
      form.append("abstract", ideaFile!);
      form.append("teamMembers", JSON.stringify(members));

      try {
        await api
          .post("/users/registration", form, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then(() => {
            localStorage.setItem("registered", "true");
            navigate("/");
            alert("Registration successful");
          });
      } catch (error: any) {
        console.log(error);
      }
    } else {
      alert("You have already registered!");
    }
  };

  return (
    <div className="register-container">
      <div className="register-registration-container">
        <p className="register-h1">Registration</p>
        <form>
          <div className="register-form-group">
            <label htmlFor="teamName" className="register-label">
              Team Name:
            </label>
            <input
              type="text"
              id="teamName"
              className="register-input"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>

          <div className="register-form-group">
            <label htmlFor="ideaFile" className="register-label">
              Abstract (PDF):
            </label>
            <input
              type="file"
              id="ideaFile"
              className="register-input-file"
              accept="application/pdf"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="register-form-group">
            <label htmlFor="numMembers" className="register-label">
              Number of Members:
            </label>
            <select
              id="numMembers"
              className="register-select"
              value={numMembers}
              onChange={handleNumMembersChange}
              required
            >
              <option value="">Select</option>
              {[3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div id="register-membersContainer">
            {members.map((member, index) => (
              <div key={index} className="register-member-fields">
                <h3>Member {index + 1}</h3>
                {[
                  "name",
                  "email",
                  "phoneNumber",
                  "yearOfStudy",
                  "department",
                  "college",
                ].map((field) => (
                  <div className="register-form-group" key={field}>
                    <label
                      htmlFor={`${field}${index}`}
                      className="register-label"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                    </label>
                    {field === "yearOfStudy" ? (
                      <select
                        id={`${field}${index}`}
                        className="register-select"
                        value={member[field as keyof Member]}
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            field as keyof Member,
                            e.target.value
                          )
                        }
                        required
                      >
                        <option value="">Select</option>
                        {["1st Year", "2nd Year", "3rd Year", "4th Year"].map(
                          (year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          )
                        )}
                      </select>
                    ) : (
                      <input
                        type={field === "phoneNumber" ? "" : "text"}
                        id={`${field}${index}`}
                        className="register-input"
                        value={member[field as keyof Member]}
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            field as keyof Member,
                            field === "phoneNumber"
                              ? Number(e.target.value) || 0
                              : e.target.value
                          )
                        }
                        required
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="register-button"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
