import { MdError } from "react-icons/md";

const Error = () => {
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
