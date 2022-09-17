import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../libs/posts';
import {
  Container,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import {
Avatar,
Checkbox,
Table,
TableBody,
TableCell,
TableHead,
TablePagination,
TableRow,
} from '@mui/material';
import { useQuery } from '@apollo/client' 
import { FindManyPostsDocument } from '../graphql/generated/graphql';

const Page = () => {
  const { data, error, loading } = useQuery(FindManyPostsDocument)
  if (loading) return 'loading...'
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }} >
        <Container maxWidth={false}>
          <Box>
            <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', m: -1 }} >
              <Typography sx={{ m: 1 }} variant="h4" >Posts</Typography>
              <Box sx={{ m: 1 }}>
                <Button color="primary" variant="contained" href="/posts/new" > Add Posts </Button>
              </Box>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Box sx={{ maxWidth: 1200 }}>
                    <TextField fullWidth placeholder="Search customer" variant="outlined" />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Card>
              {/* <PerfectScrollbar> */}
                <Box sx={{}}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell padding="checkbox"> <Checkbox onChange={() => {}} /> </TableCell>
                        <TableCell> ID </TableCell>
                        <TableCell> Title </TableCell>
                        <TableCell> Votes </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.findManyPost.map((post) => (
                        <TableRow hover key={post.id} >
                          <TableCell padding="checkbox">
                            <Checkbox checked={false} onChange={() => {}} value="true" />
                          </TableCell>
                          <TableCell>{post.id}</TableCell>
                          <TableCell>
                            <Box sx={{ alignItems: 'center', display: 'flex' }} >
                              {/* <Avatar src={} sx={{ mr: 2 }} > </Avatar> */}
                              <Typography color="textPrimary" variant="body1" >{post.title}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell> {post.votes}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              {/* </PerfectScrollbar> */}
              <TablePagination component="div" count={1} onPageChange={() => {}} onRowsPerPageChange={() => {}} page={1} rowsPerPage={1} rowsPerPageOptions={[5, 10, 25]} />
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => (
  <Layout home>
    {page}
  </Layout>
);
export default Page;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}