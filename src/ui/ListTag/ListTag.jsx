import { Button } from "@mui/material";

const ListTag = ({ data }) => {
  return (
    <Button variant="text" className="w-full">
      {data}
    </Button>
  );
};

export default ListTag;
