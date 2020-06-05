import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardContent, CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';
import Link from './Link';
const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  a:{
    textDecoration: 'none'
  }
});

function PostCard({ body, date, summary, title, slug }) {
  const classes = useStyles();
    return (


<Grid item  xs={12}>
        
<Card className={classes.card}>
  
    <CardContent  className={classes.cardDetails} >
    <Link href="/blog/[pid]" as={`/blog/${slug}`}>
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
    )
  }
  
  export default PostCard