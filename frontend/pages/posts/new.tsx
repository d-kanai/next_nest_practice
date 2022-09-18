import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import Layout from '../../components/layout';
import { useForm, Control, Controller } from "react-hook-form";
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
  //TODO: it need put defaultValue for controlled form? SEE console error
  const { control, handleSubmit } = useForm<FormData>({resolver: zodResolver(schema)});
  return (
    <Card>
      <CardHeader subheader="you can post it" title="New Posts" />
      <Divider />
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <CardContent>
          <Grid container spacing={3} >
            <Grid item md={6} xs={12} >
              <BaseTextField name="title" control={control} />
            </Grid>
            <Grid item md={6} xs={12} >
              <BaseTextField name="authorId" control={control} />
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

function BaseTextField(props:{name: string, control: Control<any, any>}) {
  return (
    <Controller name={props.name} control={props.control} render={({ field, formState }) => (
      <TextField {...field} fullWidth
       helperText={formState.errors[props.name]?.message?.toString()} 
       label={props.name} name={props.name}
       variant="outlined"
       error={!!formState.errors[props.name]}
      />
    )} />
  )
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
