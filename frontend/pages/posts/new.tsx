import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { CreatePostDocument } from '../../graphql/generated/graphql';

export default function Posts({ postData }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [ mutate, { data, loading, error }] = useMutation(CreatePostDocument);
  console.log(data,loading, error)
  if (loading) return 'mutation...';
  const onSubmit = (formData) => {
    mutate({ variables: formData });
  }
  return (
    <Layout home={false}> 
      <h2 className={utilStyles.headingLg}>New Posts</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("title", { required: true })} />
      {errors.title && <span>This field is required</span>}
      <br/>
      <input defaultValue="1" {...register("authorId", { required: true })} />
      {errors.authorId && <span>This field is required</span>}
      <br/>
      <input type="submit" />
    </form>
    </Layout>
  );
}