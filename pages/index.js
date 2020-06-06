import Head from "next/head";
// API
import { getPosts } from "../config/api";
// Components
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({});

export default function Index({ posts }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Layout home>
        <Box py={5}>
          <Grid container spacing={4}>
            {posts.length > 0
              ? posts.map((p) => (
                  <PostCard
                    title={p.fields.title}
                    summary={p.fields.summary}
                    date={p.fields.date}
                    body={p.fields.body}
                    slug={p.fields.slug}
                    key={p.sys.id}
                  />
                ))
              : null}
          </Grid>
        </Box>
      </Layout>
    </React.Fragment>
  );
}

Index.getInitialProps = async () => {
  let posts = await getPosts();
  return { posts };
};
