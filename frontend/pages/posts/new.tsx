import utilStyles from '../../styles/utils.module.css';
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import Layout from '../../components/layout';
import { useForm, Controller, useFormState } from "react-hook-form";
import { useMutation, useQuery } from '@apollo/client';
import { CreatePostDocument, FindManyPostsDocument } from '../../graphql/generated/graphql';
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

function Page() {
  const [ mutate, { data, loading, error }] = useMutation(CreatePostDocument);
  const { refetch } = useQuery(FindManyPostsDocument)
  const router = useRouter()
  if (loading) return 'mutation...';
  if (data) router.replace('/') 
  const onSubmit = async (formData:FormData) => {
     //@ts-ignore
     await mutate({ variables: formData});
     await refetch()
  }
  return (
    <>
      <Grid container spacing={3} >
        <Grid item md={12} xs={12} >
          <NewPostsForm onSubmit={onSubmit}/>
        </Grid>
      </Grid>
    </>
  );
}

function NewPostsForm(props:{onSubmit: (formData:FormData)=>{}}) {
  const { control, handleSubmit, watch, formState: { errors } } = useForm({defaultValues: {title: '', authorId: ''}, resolver: zodResolver(schema)});
  return (
    <Card>
      <CardHeader subheader="you can post it" title="New Posts" />
      <Divider />
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <CardContent>
          <Grid container spacing={3} >
            <Grid item md={6} xs={12} >
            <Controller name="title" control={control} render={({ field }) => (
              <TextField {...field} fullWidth helperText={errors?.title?.message.toString()} label="title" name="title" variant="outlined" error={!!errors.title} />
            )} />
            </Grid>
            <Grid item md={6} xs={12} >
              <Controller name="authorId" control={control} defaultValue="" render={({ field }) => (
                <TextField {...field} fullWidth helperText={errors?.authorId?.message.toString()} label="authorId" name="authorId" variant="outlined" error={!!errors.authorId} />
              )} />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }} >
          <Button color="primary" variant="contained" type="submit" > Create </Button>
        </Box>
      </form>
    </Card>
  );
}

const schema = zod.object({
  title: zod.string().min(1, { message: "Required" }),
  authorId: zod.string().min(1, { message: "Required" }),
});
type FormData = zod.infer<typeof schema>;


Page.getLayout = (page) => (
  <Layout home={false}>
    {page}
  </Layout>
);
export default Page;
