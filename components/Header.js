import { Box, Divider } from "@material-ui/core";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineCoffee } from "react-icons/ai";
import Link from "./Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  ul: {
    listStyleType: "none",
  },
  li: {
    display: "inline-block",
    padding: 5,
  },
}));

const Header = ({ home }) => {
  const darkMode = true;
  const classes = useStyles();
  return (
    <Box component="header">
      <Box display="flex" justifyContent="flex-end" mt={1}>
        <Link href="//twitter.com/Alshemimri">

          <FaTwitter size="1.5em" color='#00acee' style={{marginLeft: '15'}}/>
          </Link>
          <Link href="//www.linkedin.com/in/alshemimri/" >
          <FaLinkedin size="1.5em" color='#0e76a8' style={{marginRight: '15'}}/> 
          </Link>
     
        {/* <IconButton
          aria-label="dark mode"
          onClick={() => setDarkMode((prevState) => !prevState)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </IconButton>

        <Link href="/" mx={1}>
          الصفحة الرئيسية
        </Link> */}
      </Box>

      {home ? (
        <Box pt={3}>
          <Box>
          <Box display="flex" justifyContent="center">
            <Box ml={3}>
              <Typography variant="h3" component="h1" gutterBottom>
                <Link
                  style={{
                    boxShadow: `none`,
                    color: `inherit`,
                    textDecoration: "none",
                  }}
                  href="/"
                >
                  قهوة عبدالعزيز
                </Link>
              </Typography>
            </Box>
            <AiOutlineCoffee size="3rem" />
          </Box>
          <Typography variant="subtitle1" align="center">
            مدونة شخصية تهتم بريادة الأعمال، تطوير وإدارة المنتجات التقنية،
            وهندسة البرمجيات.
          </Typography>
        </Box>
        </Box>
      ) : (
        <Box pt={3}  >
          <Box display="flex" justifyContent="flex-start" >
            <Box ml={3}>
              <Typography variant="h5" component="h2" gutterBottom>
                <Link
                  style={{
                    boxShadow: `none`,
                    color: `inherit`,
                    textDecoration: "none",
                  }}
                  href="/"
                >
                  قهوة عبدالعزيز
                </Link>
              </Typography>
            </Box>
            <AiOutlineCoffee size="2em" />
          </Box>
          <Typography variant="subtitle2" align="right">
            مدونة شخصية تهتم بريادة الأعمال، تطوير وإدارة المنتجات التقنية،
            وهندسة البرمجيات.
          </Typography>
        </Box>
      )}
      <Divider />
    </Box>
  );
};

export default Header;
