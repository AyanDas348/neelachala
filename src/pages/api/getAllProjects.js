
// This function is used to get all projects from the CMS
export default async function getAllProjects() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/projects?populate[custom_amenity][populate]=*&populate[qr][populate]=*&populate[main_photo][populate]=*&populate[photos][populate]=*`, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
            },
        });
        if (response.status) {
            const data = await response.json();
            console.log(data)
            return data;
        }
    }
    catch (error) {
        console.log(error);
        return []
    }
}