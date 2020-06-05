import { Fragment } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
import { getPost } from "../../config/api";
import { Container, Box, Typography, CssBaseline } from "@material-ui/core";
import Layout from "../../components/Layout";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Post = ({ post }) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Fragment>
      <Head>
  <title>قهوة عبدالعزيز | {post.title}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Layout>
        <Box py={5}>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            {post.title}
          </Typography>
          {documentToReactComponents(post.body)}
        </Box>
      </Layout>
      {/* <Footer title="My Blog" description="Hi there, this is my blog!" /> */}
    </Fragment>
  );
};

Post.getInitialProps = async ({ query }) => {
  const post = await getPost(query.pid);
  return { post };
};

export default Post;
