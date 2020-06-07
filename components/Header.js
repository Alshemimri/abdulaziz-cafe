// nextjs
import Link from "./Link";
// Material Ui
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import LocalCafeTwoToneIcon from "@material-ui/icons/LocalCafeTwoTone";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({});

const Header = ({ home }) => {
  const classes = useStyles();
  return (
    <Box component="header">
      <Box display="flex" justifyContent="flex-end">
        <Link href="//twitter.com/Alshemimri">
          <TwitterIcon style={{ color: "#00acee", marginLeft: "20" }} />
        </Link>
        <Link href="//www.linkedin.com/in/alshemimri/">
          <LinkedInIcon style={{ color: "#0e76a8" }} />
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
              <LocalCafeTwoToneIcon style={{ fontSize: 50 }} />
            </Box>
            <Typography variant="subtitle1" align="center">
              مدونة شخصية تهتم بريادة الأعمال، تطوير وإدارة المنتجات التقنية،
              وهندسة البرمجيات.
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box pt={3}>
          <Box display="flex" justifyContent="flex-start">
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
            <LocalCafeTwoToneIcon />
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
