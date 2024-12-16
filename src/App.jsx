import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState([]);
  const [uploadFile, setUploadFile] = useState(null);
  const [url, setUrl] = useState("");
  const [choice, setChoice] = useState("");
  const [about, setAbout] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      phone,
      gender,
      subject,
      uploadFile,
      url,
      choice,
      about
    );
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setGender("");
    setSubject([]);
    setUploadFile(null);
    setUrl("");
    setChoice("");
    setAbout("");
  };

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSubject((prevSubjects) =>
      prevSubjects.includes(value)
        ? prevSubjects.filter((sub) => sub !== value)
        : [...prevSubjects, value]
    );
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setUploadFile(file);
    console.log(typeof file);
  };
  return (
    <>
      <div className="card w-full h-full flex justify-center ">
        <form
          className="p-5 w-2/4 bg-slate-100 my-5 rounded-md shadow-2xl text-center"
          onSubmit={submit}
        >
          <h1 className="text-lime-500 font-bold text-2xl">Form In React</h1>
          <fieldset>
            <div className="py-2">
              <label
                htmlFor="first name"
                className="block w-full text-left text-base font-medium text-lime-600 py-1"
              >
                First Name*{" "}
              </label>
              <input
                type="text"
                className="block w-full rounded py-1 px-2 border-2 border-slate-500 focus:outline-none focus:border-slate-700"
                placeholder="enter your name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                // required
              />
            </div>
            <div className="py-2">
              <label
                htmlFor="last name"
                className="block w-full text-left text-base font-medium text-lime-600 py-2"
              >
                Last Name*{" "}
              </label>
              <input
                type="text"
                className="block w-full rounded py-1 px-2 border-2 border-slate-500 focus:outline-none focus:border-slate-700"
                placeholder="enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                // required
              />
            </div>
            <div className="py-2">
              <label
                htmlFor="email"
                className="block w-full text-left text-base font-medium text-lime-600 py-2"
              >
                Enter Email*{" "}
              </label>

              <input
                type="text"
                className="block w-full rounded py-1 px-2 border-2 border-slate-500 focus:outline-none focus:border-slate-700"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
            </div>
            <div className="py-2">
              <label
                htmlFor="contact"
                className="block w-full text-left text-base font-medium text-lime-600 py-2"
              >
                Contect*{" "}
              </label>
              <input
                type="tel"
                className="block w-full rounded py-1 px-2 border-2 border-slate-500 focus:outline-none focus:border-slate-700"
                placeholder="enter your contact"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                // required
              />
            </div>
          </fieldset>
          <label
            htmlFor="Gander"
            className=" block w-full text-left text-base font-medium text-lime-600 pt-2"
          >
            Gender*
          </label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            className="inline w-1/12"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male"> male</label>

          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            className="inline w-1/12"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>

          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            className="inline w-1/12"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="other">Other</label>
          <label
            htmlFor="your best subject"
            className="block text-left w-full py-2 text-base font-medium text-lime-600 "
          >
            Your Best Subjects
          </label>
          <input
            type="checkbox"
            name="subject"
            value="english"
            id="english"
            checked={subject.includes("english")}
            onClick={handleSubjectChange}
            className="inline w-1/12"
          />
          <label htmlFor="English">English</label>
          <input
            type="checkbox"
            name="subject"
            value="physics"
            id="physics"
            checked={subject.includes("physics")}
            onClick={handleSubjectChange}
            className="inline w-1/12"
          />
          <label htmlFor="Physics">Physics</label>
          <input
            type="checkbox"
            name="subject"
            value="math"
            id="math"
            checked={subject.includes("math")}
            onChange={(e) => setSubject(e.target.value)}
            className="inline w-1/12"
          />
          <label htmlFor="Math">Math</label>
          <div className=" pb-5">
            <label
              htmlFor="Resume"
              className="block text-left w-full py-2 text-base font-medium text-lime-600 "
            >
              Upload Your Resume*
            </label>
            <input
              type="file"
              id="Resume"
              name="Resume"
              accept="image/jpeg, image/png"
              onChange={handleFile}
              //   required
              className="   border-slate-500 w-full py-2 px-2  border-2 rounded-md"
            />
          </div>
          <label
            htmlFor="URL"
            className="block w-full text-left py-2 text-base font-medium text-lime-600"
          >
            Enter URL*
          </label>
          <input
            type="text"
            id="URL"
            value={url}
            // required
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL ..."
            className="block w-full rounded py-1 px-2 border-2 border-slate-500 focus:outline-none focus:border-slate-700"
          />
          <label
            htmlFor="select choice"
            className="w-ull block text-left py-2 text-base font-medium text-lime-600"
          >
            Select Your Choice
          </label>
          <select
            name="select"
            id="select"
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
            className="w-full py-2 rounded-md border-2 border-slate-500 focus:outline-none hover:border-slate-700"
          >
            <option value="" disabled>
              Select Your Ans...
            </option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">Javascript</option>
            </optgroup>
            <hr />
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
            </optgroup>
            <hr />
            <optgroup label="DataBase">
              <option value="7">MongoDB</option>
              <option value="8">mySQL</option>
            </optgroup>
          </select>

          <label
            htmlFor="about"
            className="w-ull block text-left py-2 text-base font-medium text-lime-600"
          >
            About
          </label>
          <textarea
            name="about"
            id="about"
            cols="10"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full rounded-md border-2 border-slate-500 focus:outline-none focus:border-slate-700"
            placeholder="About your self..."
          ></textarea>

          <div className=" flex justify-around pt-2">
            <button
              className=" py-3 px-10 text-2xl rounded-lg text-white bg-sky-600 hover:bg-sky-700 "
              onClick={resetForm}
            >
              Reset
            </button>
            <button
              className=" py-3 px-10 text-2xl rounded-lg text-white bg-sky-500 hover:bg-sky-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
