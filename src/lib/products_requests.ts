export async function getApiResponse(sub_url: string, options = {}) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${sub_url}`;
    console.log("Fetching URL:", url); // Log the URL to check if it's correct

    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return Promise.reject(err);
  }
}


