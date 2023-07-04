import { useState } from "react";
import "./faq.css";

export default function Faq() {
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

    const re = /^\s+$/;
    if (!re.test(data.answer)) {
      alert("You have Not entered an answer ");
      setData((prev) => ({ ...prev, answer: "" }));
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
    <div className="faq">
      <h1 className="faqTitle">Freaquently Ask Question</h1>
      <form className="faqForm">
        <div className="faqItem">
          <label>How does online laundry delivery work?</label>
          <input
            onChange={(e) => handleChange("answer1", e)}
            type="text"
            placeholder="Add answer"
            value={data.answer1}
          />
        </div>
        <button className="faqButton" onClick={handleSubmit}>
          {" "}
          Add
        </button>

        <div className="faqItem">
          <label>How long does it take for laundry to be cleaned and delivered?</label>
          <input
            onChange={(e) => handleChange("answer2", e)}
            type="text"
            placeholder="Add answer"
            value={data.answer2}
          />
        </div>
        <button className="faqButton" onClick={handleSubmit}>
          {" "}
           Add
        </button>

        <div className="faqItem">
          <label>What types of laundry can be sent for cleaning?</label>
          <input
            onChange={(e) => handleChange("answer3", e)}
            type="text"
            placeholder="Add answer"
            value={data.answer3}
          />
        </div>
        <button className="faqButton" onClick={handleSubmit}>
          {" "}
           Add
        </button>

        <div className="faqItem">
          <label>How long does it take for laundry to be cleaned and delivered?</label>
          <input
            onChange={(e) => handleChange("answer4", e)}
            type="text"
            placeholder="Add answer"
            value={data.answer4}
          />
        </div>
        <button className="faqButton" onClick={handleSubmit}>
          {" "}
           Add
        </button>

        <div className="faqItem">
          <label>Is the laundry cleaning done in-house or outsourced?</label>
          <input
            onChange={(e) => handleChange("answer5", e)}
            type="text"
            placeholder="Add answer"
            value={data.answer5}
          />
        </div>
        <button className="faqButton" onClick={handleSubmit}>
          {" "}
           Add
        </button>

        <div className="faqItem">
          <label>How can I schedule a pickup for my laundry?</label>
          <input
            onChange={(e) => handleChange("answer6", e)}
            type="text"
            placeholder="Add answer"
            value={data.answer6}
          />
        </div>
        <button className="faqButton" onClick={handleSubmit}>
          {" "}
           Add
        </button>

        <div className="faqItem">
          <label>What payment options are available for online laundry delivery?</label>
          <input
            onChange={(e) => handleChange("answer7", e)}
            type="text"
            placeholder="Add answer"
            value={data.answer7}
          />
        </div>
        <button className="faqButton" onClick={handleSubmit}>
          {" "}
           Add
        </button>

        <div className="faqItem">
          <label>What happens if there is a problem with my laundry order?</label>
          <input
            onChange={(e) => handleChange("answer8", e)}
            type="text"
            placeholder="Add answer"
            value={data.answer8}
          />
        </div>
        <button className="faqButton" onClick={handleSubmit}>
          {" "}
           Add
        </button>

        <div className="faqItem">
          <label>How can I track the status of my laundry delivery?</label>
          <input
            onChange={(e) => handleChange("answer9", e)}
            type="text"
            placeholder="Add answer"
            value={data.answer9}
          />
        </div>
        <button className="faqButton" onClick={handleSubmit}>
          {" "}
           Add
        </button>

        <div className="faqItem">
          <label>Is there a minimum order amount for laundry delivery?</label>
          <input
            onChange={(e) => handleChange("answer10", e)}
            type="text"
            placeholder="Add answer"
            value={data.answer10}
          />
        </div>
        <button className="faqButton" onClick={handleSubmit}>
          {" "}
           Add
        </button>



      </form>
    </div>
  );
}
