import utilStyles from '../../styles/utils.module.css';
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import Layout from '../../components/layout';
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from '@apollo/client';
import { CreatePostDocument, FindManyPostsDocument } from '../../graphql/generated/graphql';
import { useRouter } from 'next/router'

export default function NewPosts() {
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
    <Layout home={false}> 
      <h2 className={utilStyles.headingLg}>New Posts</h2>
      <NewPostsForm onSubmit={onSubmit}/>
    </Layout>
  );
}

function NewPostsForm(props:{onSubmit: (formData:FormData)=>{}}) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: zodResolver(schema)});
  return (
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <input defaultValue="test" {...register("title", { required: true })} />
        {errors.title?.message && <span>{errors.title?.message.toString()}</span>}
        <br/>
        <input defaultValue="1" {...register("authorId", { required: true })} />
        {errors.authorId?.message && <span>{errors.authorId?.message.toString()}</span>}
        <br/>
        <input type="submit" />
      </form>
  );
}
const schema = zod.object({
  title: zod.string().min(1, { message: "Required" }),
  authorId: zod.string().min(1, { message: "Required" }),
});
type FormData = zod.infer<typeof schema>;


