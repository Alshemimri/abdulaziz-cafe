import { useEffect, useState } from 'react'
import Head from 'next/head'
import PostCard from '../components/PostCard'
import {getPosts} from '../config/api'

import {
  Container,
  Typography,
  Box,
  Grid,
  CssBaseline
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Layout from '../components/Layout';

const useStyles = makeStyles({
  container: {
    minHeight: '80vh'
  }
});

export default function Index({posts}) {
  const classes = useStyles();


  

  return (
    <React.Fragment>
      <CssBaseline />
      <Layout home>
     
      <Container maxWidth="lg" className={classes.container} >
        <Box py={5}>
        <Grid container spacing={4}>

        {posts.length > 0
        ? posts.map(p => (
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
      </Container>
      </Layout>
      {/* <Footer title="My Blog" description="Hi there, this is my blog!" /> */}
    </React.Fragment>
  )
}

Index.getInitialProps = async () => {
  const posts = await getPosts()
return { posts }
};
