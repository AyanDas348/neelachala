import React from "react";
import MainLayout from "../../layouts/main";
import PostDetails from "../../components/Post-details";
import getAllBlogs from '../api/blogs'
import getFooterData from "../api/getFooterData"
import { useRouter } from "next/router";

const BlogDetails = ({ allBlogs, footerData }) => {
  const { data: blogs } = allBlogs;
  const router = useRouter()

  const blog = blogs?.find(blog => blog.attributes.slug === router.query.slug)

  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout
      data={footerData}
    >
      <PostDetails blog={blog} />
    </MainLayout>
  );
};

export default BlogDetails;


export const getStaticProps = async () => {
  const [allBlogs, footerData] = await Promise.all([getAllBlogs(), getFooterData()])

  return {
    props: {
      allBlogs,
      footerData
    },
    revalidate: 60 * 15,
  };
};

