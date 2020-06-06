import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import Link from "./Link";

const useStyles = makeStyles({
  a: {
    color: "#0d47a1"
  },
});

function PostCard({ date, summary, title, slug }) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Card >
        <CardContent >
          <Link href="/blog/[pid]" as={`/blog/${slug}`} className={classes.a} underline='none'>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
          </Link>

          <Typography variant="subtitle1">
            {summary}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {date}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PostCard;
