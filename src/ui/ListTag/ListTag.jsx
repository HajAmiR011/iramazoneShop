import { Button } from "@mui/material";

const ListTag = ({ data }) => {
  return (
    <Button variant="text" component={"a"}>
      {data}
    </Button>
  );
};

export default ListTag;
