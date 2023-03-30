import { useState } from "react";
import "./newUser.css";

export default function NewUser() {
  const [data, setData] = useState({});

  const handleChange = (type, event) => {
    const _data = { ...data };
    const target = event.target;
    if (target.type === "checkbox") _data[type] = target.name;
    else _data[type] = target.value;

    setData(_data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim;
    if (!re.test(data.phoneNo)) {
      alert("enter valid phone number");
      setData((prev) => ({ ...prev, phoneNo: "" }));
    }

    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!reg.test(data.email)) {
      alert("enter valid email");
      setData((prev) => ({ ...prev, email: "" }));
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/postAdmin", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            onChange={(e) => handleChange("username", e)}
            type="text"
            placeholder="Udara7"
            value={data.username}
          />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            onChange={(e) => handleChange("name", e)}
            type="text"
            placeholder="Udara Dilaksha"
            value={data.name}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            onChange={(e) => handleChange("email", e)}
            type="email"
            placeholder="Udaradilaksha@gmail.com"
            value={data.email}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            onChange={(e) => handleChange("password", e)}
            type="password"
            placeholder="password"
            value={data.password}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            onChange={(e) => handleChange("phoneNo", e)}
            type="tel"
            placeholder="+94 77 297 5936"
            value={data.phoneNo}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            onChange={(e) => handleChange("address", e)}
            type="text"
            placeholder="No. 231/12 Colombo / Srilanka"
            value={data.address}
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              onChange={(e) => handleChange("gender", e)}
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={data.gender === "male"}
            />
            <label for="male">Male</label>
            <input
              onChange={(e) => handleChange("gender", e)}
              type="radio"
              checked={data.gender === "female"}
              name="gender"
              id="female"
              value="female"
            />
            <label for="female">Female</label>
          </div>
        </div>
        <button className="newUserButton" onClick={handleSubmit}>
          {" "}
          Create
        </button>
      </form>
    </div>
  );
}
