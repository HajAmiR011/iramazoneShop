import { MdError } from "react-icons/md";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex items-center gap-2">
        <MdError size={44} color="red" />
        <h1 className="text-4xl text-white">404 Error</h1>
      </div>
    </div>
  );
};

export default Error;
