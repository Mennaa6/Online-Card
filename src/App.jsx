import Aurora from "./Aurora";
import Avatar from "@mui/material/Avatar";
import PP from "./assets/image0.jpeg";
import Button from "@mui/material/Button";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex justify-center items-center ">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} />
      </div>

      <div className="absolute flex flex-col justify-center items-center h-100">
        <Avatar alt="Remy Sharp" src={PP} sx={{ width: 150, height: 150 }} />
        <p className="text-white text-3xl font-bold mt-4 mb-2">
          Menna Abdelfattah Kamel
        </p>
        <p
          className="text-gray-200 text-xl mb-5 font-extralight"
          style={{
            textShadow: "0 0 10px #a855f7, 0 0 30px #a855f7, 0 0 30px #a855f7",
          }}
        >
          Frontend Developer
        </p>
        <div className="m-2">
          {" "}
          <Button
            variant="outlined"
            color="secondary"
            sx={{ width: 250, height: 50 }}
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
            href="mailto:menna.a@euro-assist.com"
            sx={{ width: 250, height: 50 }}
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
            sx={{ width: 250, height: 50 }}
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
            sx={{ width: 250, height: 50 }}
          >
            <FaLinkedin className="text-purple-300 mr-5 " size={20} />
            <label className="text-xl font-light text-purple-300 hover:cursor-pointer capitalize hover:text-purple-200 ">
              LinkedIn
            </label>
          </Button>
        </div>
        <div className="m-2">
          {" "}
          <Button
            variant="outlined"
            color="secondary"
            sx={{ width: 250, height: 50 }}
            component="a"
            href="https://euro-assist.com/" // call link
          >
            <TbWorldWww className="text-purple-300 mr-5 " size={20} />
            <label className="text-xl font-light text-purple-300 hover:cursor-pointer capitalize  hover:text-purple-200">
              Website
            </label>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
export default App;
