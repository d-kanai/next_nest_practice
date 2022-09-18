import Layout from '../../components/layout';
import { useMutation, useQuery } from '@apollo/client';
import { CreatePostDocument, FindManyPostsDocument } from '../../graphql/generated/graphql';
import { useRouter } from 'next/router'
import { Grid, Card, CardHeader, Divider } from '@mui/material';
import NewPostForm, {NewPostFormData} from '../../components/posts/new-post-form';

function Page() {
  const [ mutate, { data, loading, error }] = useMutation(CreatePostDocument);
  const { refetch } = useQuery(FindManyPostsDocument)
  const router = useRouter()
  if (loading) return 'mutation...';
  if (data) router.replace('/') 
  const onSubmit = async (formData:NewPostFormData) => {
     //@ts-ignore
     await mutate({ variables: formData});
     await refetch()
  }
  return (
    <>
      <Grid container spacing={3} >
        <Grid item md={10} xs={12} >
        <Card>
          <CardHeader subheader="you can post it" title="New Posts" />
          <Divider />
          <NewPostForm onSubmit={onSubmit}/>
        </Card>
        </Grid>
      </Grid>
    </>
  );
}


Page.getLayout = (page) => (
  <Layout home={false}>
    {page}
  </Layout>
);
export default Page;
