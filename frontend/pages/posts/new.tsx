import utilStyles from '../../styles/utils.module.css';
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import Layout from '../../components/layout';
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { CreatePostDocument } from '../../graphql/generated/graphql';
import { useRouter } from 'next/router'

const schema = zod.object({
  title: zod.string().min(1, { message: "Required" }),
  authorId: zod.string().min(1, { message: "Required" }),
});

export default function Posts({ postData }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: zodResolver(schema)});
  const [ mutate, { data, loading, error }] = useMutation(CreatePostDocument);
  const router = useRouter()

  console.log(data,loading, error)
  if (loading) return 'mutation...';
  if (data) router.replace('/posts') 
  const onSubmit = (formData) => {
    mutate({ variables: formData });
  }
  return (
    <Layout home={false}> 
      <h2 className={utilStyles.headingLg}>New Posts</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("title", { required: true })} />
      {errors.title?.message && <span>{errors.title?.message.toString()}</span>}
      <br/>
      <input defaultValue="1" {...register("authorId", { required: true })} />
      {errors.authorId?.message && <span>{errors.authorId?.message.toString()}</span>}
      <br/>
      <input type="submit" />
    </form>
    </Layout>
  );
}