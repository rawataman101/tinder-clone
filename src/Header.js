import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";
import { Link, useNavigate as useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history(backButton)}>
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111653.png"
          alt="logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
