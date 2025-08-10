import Aurora from "./Aurora";

import Button from "@mui/material/Button";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex justify-center items-center ">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} />
      </div>

      <div className="absolute flex flex-col justify-end items-center h-100">
        <p className="text-white text-3xl font-bold mt-4 mb-2">
          Menna Abdelfattah Kamel
        </p>
        <p
          className="text-gray-200 text-xl mb-5 font-extralight"
          style={{
            textShadow: "0 1 10px #a855f7, 0 0 30px #a855f7, 0 0 30px #a855f7",
          }}
        >
          Frontend Developer
        </p>
        <div className="m-2">
          {" "}
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              width: {
                // mobile

                md: 200, // desktop
              },
            }}
            component="a"
            href="tel:01144482557" // call link
          >
            <IoCall className="text-purple-300 mr-5 " size={20} />
            <label className="text-xl font-light text-purple-300 hover:cursor-pointer capitalize  hover:text-purple-200">
              phone
            </label>
          </Button>{" "}
        </div>
        <div className="m-2">
          {" "}
          <Button
            variant="outlined"
            color="secondary"
            component="a"
            href="mailto:mennaabdelfattahhh@gmail.com"
            sx={{
              width: {
                // mobile

                md: 200, // desktop
              },
            }}
          >
            <MdEmail className="text-purple-300 mr-5 " size={23} />
            <label className="text-xl font-light text-purple-300 hover:cursor-pointer capitalize hover:text-purple-200 ">
              Email
            </label>
          </Button>{" "}
        </div>
        <div className="m-2">
          {" "}
          <Button
            variant="outlined"
            color="secondary"
            component="a"
            href="https://github.com/Mennaa6"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: {
                // mobile

                md: 200, // desktop
              },
            }}
          >
            <FaGithub className="text-purple-300 mr-5 " size={20} />
            <label className="text-xl font-light text-purple-300 hover:cursor-pointer capitalize hover:text-purple-200 ">
              GitHub
            </label>
          </Button>
        </div>
        <div className="m-2">
          {" "}
          <Button
            variant="outlined"
            color="secondary"
            component="a"
            href="https://www.linkedin.com/in/menna-abdelfattahh/"
            sx={{
              width: {
                md: 200, // desktop
              },
            }}
          >
            <FaLinkedin className="text-purple-300 mr-5 " size={20} />
            <label className="text-xl font-light text-purple-300 hover:cursor-pointer capitalize hover:text-purple-200 ">
              LinkedIn
            </label>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default App;
