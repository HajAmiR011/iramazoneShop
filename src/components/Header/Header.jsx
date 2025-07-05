import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { IoSearchOutline } from "react-icons/io5";
import TemporaryDrawer from "../Drawer/Drawer";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header({ submit, setter }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const Reset = () => {
    setter((prevState) => ({ all: prevState.all, filtered: [] }));
    reset();
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "1600px",
        marginX: "auto",
        position: "sticky",
        top: "0",
        zIndex: "10",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            IRAMAZONE
          </Typography>
          <form
            autoComplete={"off"}
            onSubmit={submit ? handleSubmit(submit) : null}
          >
            <Search>
              <SearchIconWrapper>
                <IoSearchOutline size={20} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={errors.search ? "Search…" : "Search…"}
                inputProps={{ "aria-label": "search" }}
                {...register("search", { required: true })}
                className="relative"
              />
              <div
                className="w-fit absolute right-2 top-[50%] -translate-y-1/2 cursor-pointer"
                onClick={setter ? Reset : null}
              >
                <IoMdClose size={18} />
              </div>
            </Search>
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
