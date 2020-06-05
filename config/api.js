const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const fetchEntries = async () => {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
};

export const getPosts = async () => {
  let posts = await fetchEntries();
  return posts;
};

export const getPost = async (id) => {
  let posts = await fetchEntries();  
  const fetchEntry = async () => {
    let post = posts.find((p) => p.fields.slug == id)
    return post;
  }
  let post = await fetchEntry()
  
  post = post.fields

  return post;

};
