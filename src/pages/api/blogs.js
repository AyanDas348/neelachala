
// This function is used to get all blogs from the CMS
export default async function getAllBlogs() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/blogs?populate=*`, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
            },
        });
        ('response', response)
        if (response.status) {
            const data = await response.json();
            return data;
        }
    }
    catch (error) {
        console.log(error);
        return []
    }
}