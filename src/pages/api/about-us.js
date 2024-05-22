// This function is used to get all projects from the CMS
export default async function getAboutUsPageData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}/about-us?populate[header_image][populate]=*&populate[features][populate]=*&populate[neelachala_team_members][populate]=*`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
        },
      }
    );
    if (response.status) {
      const data = await response.json();
      (data)
      return data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
