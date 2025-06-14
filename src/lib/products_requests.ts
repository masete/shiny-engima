// export async function getApiResponse(sub_url: string, options = {}) {
//   try {
//     const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${sub_url}`;
//     console.log("Fetching URL:", url); // Log the URL to check if it's correct

//     const res = await fetch(url, options);
//     if (!res.ok) {
//       throw new Error(`Failed to fetch: ${res.statusText}`);
//     }

//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.error("Error fetching data:", err);
//     return Promise.reject(err);
//   }
// }

export const getApiResponse = async (endpoint: string, options: RequestInit = {}) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) throw new Error("Base API URL not defined in environment variables");

  const res = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Accept: "application/json",
    },
    cache: "no-store", // avoid stale caching if needed
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch ${endpoint}: ${res.status} - ${errorText}`);
  }

  return await res.json();
};

