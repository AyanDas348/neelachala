import HomePage from "../components/home";
import getAllProjects from "./api/getAllProjects";
import getFooterData from "./api/getFooterData";
import getHomePageData from "./api/getHomePageData";

export default function Home({ projects, data, footerData }) {
  return <HomePage projects={projects} data={data} footerData={footerData} />;
}


// getServersideProps
export const getStaticProps = async () => {
  const [projects, data, footerData] = await Promise.all([getAllProjects(), getHomePageData(), getFooterData()])
  return {
    props: {
      projects,
      data,
      footerData
    },
    revalidate: 60 * 15,
  };
}