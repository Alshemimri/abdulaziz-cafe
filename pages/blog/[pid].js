// React
import { Fragment } from "react";
// nextjs
import Head from "next/head";
import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// API
import { getPost } from "../../config/api";
// Components
import Layout from "../../components/Layout";
// Material UI
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Post = ({ post }) => {
  // const router = useRouter();
  // const { pid } = router.query;
  return (
    <Fragment>
      <Head>
        <title>قهوة عبدالعزيز | {post.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout>
        <Box py={5}>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
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
