import Layout from '../../components/layout';
import { useMutation, useQuery } from '@apollo/client';
import { CreatePostDocument, FindManyPostsDocument } from '../../graphql/generated/graphql';
import { useRouter } from 'next/router'
import {
  Grid,
} from '@mui/material';
import NewPostsForm, {NewPostFormData} from '../../components/posts/new-post-form';

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
          <NewPostsForm onSubmit={onSubmit}/>
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
