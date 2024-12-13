import { useEffect, useRef, useState } from "react";
import "./App.css";
import baseAxios from "axios";
import UseMemoRevision from "./indesx";
import JoditEditor from "jodit-react";


function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isvisible: true,
    mode: "",
    favCar: "",
  });
  const [finalData, setFinalData] = useState([]);

  function changeHandler(event) {
    const { name, value, checked } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: name === "isvisible" ? checked : value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("finally print form data", formData);
    setFinalData(formData);
    console.log("ye raha most final data", finalData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isvisible: true,
      mode: "",
      favCar: "",
    });
  }
  console.log(formData);
  useEffect(() => {
    setFormData(Datas);
  }, []);
  const Datas = {
    firstName: "Nitish",
    lastName: "Kumar",
    email: "Nitish@gmail.com",
    comments: "No Comment",
    isvisible: true,
    mode: "online",
    favCar: "car 2",
  };


  const editor = useRef(null); // Reference to the editor
  const [content, setContent] = useState(""); // State to hold editor content

  // Editor configuration

  const config = {
    readonly: false, // Enable editing
    height: 500,
    toolbarSticky: false, // Toolbar stays in place
    toolbarButtonSize: "middle", // Button size in toolbar
    uploader: {
      insertImageAsBase64URI: true, // Allow uploading images as Base64 (no backend needed)
    },
    buttons: [
      "source", // HTML source code view
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "eraser", // Remove formatting
      "|",
      "superscript", // Superscript text
      "subscript", // Subscript text
      "|",
      "ul", // Unordered list
      "ol", // Ordered list
      "outdent", // Outdent
      "indent", // Indent
      "|",
      "font", // Font family
      "fontsize", // Font size
      "brush", // Text color
      "paragraph", // Paragraph formatting
      "|",
      "image", // Insert image
      "video", // Insert video
      "table", // Insert table
      "link", // Insert hyperlink
      "|",
      "align", // Text alignment
      "undo", // Undo action
      "redo", // Redo action
      "copyformat", // Copy formatting
      "cut", // Cut
      "copy", // Copy
      "paste", // Paste
      "|",
      "fullsize", // Fullscreen mode
      "preview", // Preview
      "print", // Print content
    ],
    font: {
      defaultFont: "Arial",
      list: [
        "Arial",
        "Verdana",
        "Georgia",
        "Roboto",
        "Open Sans",
        "Times New Roman",
        "Courier New",
        "Tahoma",
        "Comic Sans MS",
        "Impact",
      ],
    },
    fontsize: [10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 48, 72], // Font sizes
    showCharsCounter: true, // Display character count
    showWordsCounter: true, // Display word count
    showXPathInStatusbar: false, // Hide XPath in the status bar
  };

  const saveContent = () => {
    console.log("Saved Content:", content); // Display saved content in the console
  };


  return (
    // <UseMemoRevision/>
    // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    //   <form
    //     onSubmit={submitHandler}
    //     className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md space-y-6"
    //   >
    //     <h2 className="text-2xl font-bold text-center text-gray-700">
    //       Contact Us
    //     </h2>

    //     {/* first Name */}
    //     <div>
    //       <input
    //         required={true}
    //         type="text"
    //         placeholder="First Name"
    //         onChange={changeHandler}
    //         name="firstName"
    //         value={formData.firstName}
    //         className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
    //       />
    //     </div>

    //     {/* last Name */}
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="Last Name"
    //         onChange={changeHandler}
    //         name="lastName"
    //         value={formData.lastName}
    //         className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
    //       />
    //     </div>

    //     {/* Email */}
    //     <div>
    //       <input
    //         type="email"
    //         placeholder="Enter your email"
    //         onChange={changeHandler}
    //         name="email"
    //         value={formData.email}
    //         className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
    //       />
    //     </div>

    //     {/* Comments */}
    //     <div>
    //       <textarea
    //         placeholder="Enter your comments"
    //         onChange={changeHandler}
    //         name="comments"
    //         value={formData.comments}
    //         className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
    //       ></textarea>
    //     </div>

    //     {/* Checkbox */}
    //     <div className="flex items-center space-x-2">
    //       <input
    //         type="checkbox"
    //         name="isvisible"
    //         id="isVisible"
    //         defaultChecked={formData.isvisible}
    //         onChange={changeHandler}
    //         className="h-5 w-5 text-blue-500"
    //       />
    //       <label htmlFor="isVisible" className="text-gray-600">
    //         I am visible?
    //       </label>
    //     </div>

    //     {/* Radio  */}
    //     <div className="flex space-x-4">
    //       <div className="flex items-center space-x-2">
    //         <input
    //           type="radio"
    //           onChange={changeHandler}
    //           name="mode"
    //           value="online-Mode"
    //           id="online-Mode"
    //           className="h-5 w-5"
    //         />
    //         <label htmlFor="online-Mode" className="text-gray-600">
    //           Online
    //         </label>
    //       </div>

    //       <div className="flex items-center space-x-2">
    //         <input
    //           type="radio"
    //           onChange={changeHandler}
    //           name="mode"
    //           value="Offline-Mode"
    //           id="Offline-Mode"
    //           checked={formData.mode === "Offline-Mode"}
    //           className="h-5 w-5"
    //         />
    //         <label htmlFor="Offline-Mode" className="text-gray-600">
    //           Offline
    //         </label>
    //       </div>
    //     </div>

    //     {/* select*/}
    //     <div>
    //       <label htmlFor="favCar" className="text-gray-600 block mb-2">
    //         Select your favorite car
    //       </label>
    //       <select
    //         onChange={changeHandler}
    //         name="favCar"
    //         id="favCar"
    //         className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
    //       >
    //         <option value="car1">Car 1</option>
    //         <option value="car2">Car 2</option>
    //         <option value="car3">Car 3</option>
    //         <option value="car4">Car 4</option>
    //         <option value="car5">Car 5</option>
    //       </select>
    //     </div>

    //     {/* Button */}
    //     <div>
    //       <button
    //         type="submit"
    //         className="w-full bg-blue-500 text-white font-bold p-3 rounded-lg hover:bg-blue-600 transition duration-300"
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>






    <div className="editor-container w-[80%] mx-auto">
      <h2 className="text-lg font-bold mb-4">Jodit Rich Text Editor</h2>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)} // Save content when the editor loses focus
        onChange={(newContent) => {}}
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={saveContent}
      >
        Save Content
      </button>
    </div>


  );
}

export default App;
