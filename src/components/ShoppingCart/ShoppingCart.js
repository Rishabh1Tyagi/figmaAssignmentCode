import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
//import all images
import WatchImage from "../../asset/images/watch.jpg";
import YogaMat from "../../asset/images/yoga-mat.jpg";
import AnchorBracelet from "../../asset/images/anchor-bracelets.jpg";
// search bar
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const ShoppingCart = () => {
  const [itemCount, setItemCount] = React.useState(1);
  const [itemCount1, setItemCount1] = React.useState(1);
  const [itemCount2, setItemCount2] = React.useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={itemCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>ShoppingCart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      {/* main div start here */}
      <div>
        <Card sx={{ display: "flex" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "100vw" }}
          >
            {/* search bar start here */}
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      color="inherit"
                    >
                      <Badge color="error" badgeContent={itemCount}>
                        <ShoppingCartIcon />{" "}
                      </Badge>
                    </IconButton>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Box>
                  <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <IconButton
                      size="large"
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                  </Box>
                </Toolbar>
              </AppBar>
              {renderMobileMenu}
              {renderMenu}
            </Box>
            {/* search bar ends here */}

            {/* fisrt card start here */}
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={WatchImage}
                alt="Watch Image"
              />
              <CardActions>
                <Button
                  onClick={() => {
                    setItemCount(Math.max(itemCount - 1, 0));
                  }}
                >
                  {" "}
                  <RemoveCircleIcon fontSize="small" />
                </Button>
                <Button
                  onClick={() => {
                    setItemCount(itemCount + 1);
                  }}
                >
                  <span style={{ marginRight: "30px" }}>{itemCount}</span>
                  <AddCircleIcon fontSize="small" />
                </Button>
              </CardActions>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Querty Watch Leather strap
                </Typography>
                <Typography variant="h5" color="text.secondary" component="div">
                  ₹12000
                </Typography>
                <Typography variant="h6" color="text.secondary" component="div">
                  color:<span style={{ fontSize: "16px" }}>Brown</span>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <span style={{ color: "green" }}>In Stock</span>
                </Typography>
                <CardActions>
                  <Button variant="outlined" size="small" style={{ borderRadius:"20px" }}>
                    Delete
                  </Button>
                  <Button variant="contained" size="small" style={{ borderRadius:"20px" }}>
                    See More Like this
                  </Button>
                </CardActions>
              </CardContent>
            </Box>
            {/* second box start here */}
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <CardMedia
                component="img"
                sx={{ width: 151, height: 180 }}
                image={YogaMat}
                alt="Yoga Mat Image"
              />
              <CardActions>
                <Button
                  onClick={() => {
                    setItemCount1(Math.max(itemCount1 - 1, 0));
                  }}
                >
                  {" "}
                  <RemoveCircleIcon fontSize="small" />
                </Button>
                <Button
                  onClick={() => {
                    setItemCount1(itemCount1 + 1);
                  }}
                >
                  <span style={{ marginRight: "30px" }}>{itemCount1}</span>
                  <AddCircleIcon fontSize="small" />
                </Button>
              </CardActions>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Yoga Mat with flowers
                </Typography>
                <Typography variant="h5" color="text.secondary" component="div">
                  ₹1000
                </Typography>
                <Typography variant="h6" color="text.secondary" component="div">
                  color:<span style={{ fontSize: "16px" }}>Blue</span>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <span style={{ color: "green" }}>In Stock</span>
                </Typography>
                <CardActions>
                  <Button variant="outlined" size="small" style={{ borderRadius:"20px" }}>
                    Delete
                  </Button>
                  <Button variant="contained" size="small" style={{ borderRadius:"20px" }}>
                    See More Like this
                  </Button>
                </CardActions>
              </CardContent>
            </Box>
            {/* third card start here */}
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <CardMedia
                component="img"
                sx={{ width: 151, height: 200 }}
                image={AnchorBracelet}
                alt="Anchor Bracelet Image"
              />
              <CardActions>
                <Button
                  onClick={() => {
                    setItemCount2(Math.max(itemCount2 - 1, 0));
                  }}
                >
                  {" "}
                  <RemoveCircleIcon fontSize="small" />
                </Button>
                <Button
                  onClick={() => {
                    setItemCount2(itemCount2 + 1);
                  }}
                >
                  <span style={{ marginRight: "30px" }}>{itemCount2}</span>
                  <AddCircleIcon fontSize="small" />
                </Button>
              </CardActions>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Anchor Bracelet Lorem ipsum
                </Typography>
                <Typography variant="h5" color="text.secondary" component="div">
                  ₹500
                </Typography>
                <Typography variant="h6" color="text.secondary" component="div">
                  color:<span style={{ fontSize: "16px" }}>Gold</span>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <span style={{ color: "green" }}>In Stock</span>
                </Typography>
                <CardActions>
                  <Button variant="outlined" size="small" style={{ borderRadius:"20px" }}>
                    Delete
                  </Button>
                  <Button variant="contained" size="small" style={{ borderRadius:"20px" }}>
                    See More Like this
                  </Button>
                </CardActions>
              </CardContent>
            </Box>
            <Button>SubTotal: ₹13500</Button>
            <Button
              variant="contained"
              style={{ 
                  width: "30%", 
                  marginLeft: "auto", 
                  marginRight: "auto", 
                  marginBottom:"20px", 
                  borderRadius:"20px" 
                  }}
            >
              Proceed to buy (3 items)
            </Button>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default ShoppingCart;
