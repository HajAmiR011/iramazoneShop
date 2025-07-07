import { useNavigate } from "react-router";
import { AiOutlineStop } from "react-icons/ai";

const UpdateBlogs = () => {
  const navigate = useNavigate();
    setTimeout(() => {
      navigate("/blogs")
    }, 3000);
  return (
    <div className="gap-2 w-screen h-screen flex justify-center items-center flex-col sm:flex-row">
      <AiOutlineStop size={44} color="red" />
      <h1 className="text-white sm:text-4xl text-3xl">
        Just admin can edit blogs
      </h1>
    </div>
  );
};

export default UpdateBlogs;
