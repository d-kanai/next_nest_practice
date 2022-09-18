import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useForm} from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from '@mui/material';
import BaseTextField from "../../components/atoms/base_text_field";

export default function NewPostsForm(props:{onSubmit: (formData:NewPostFormData)=>{}}) {
    //TODO: it need put defaultValue for controlled form? SEE console error
    const { control, handleSubmit } = useForm<NewPostFormData>({resolver: zodResolver(schema)});
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
  
  const schema = zod.object({
    title: zod.string().min(1, { message: "Required" }),
    authorId: zod.string().min(1, { message: "Required" }),
  });

  export type NewPostFormData = zod.infer<typeof schema>;
  