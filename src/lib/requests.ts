export async function getApiResponse(sub_url: string) {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}${sub_url}`;
  
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      };
  
      const res = await fetch(url, options);
      const data = res.ok ? await res.json() : Promise.reject(res);
  
      return data;
  
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }

  export async function getNewsApiResponse(sub_url: string) {
    try {
      const url = `${process.env.NEXT_PUBLIC_NEWS_API_URL}${sub_url}`;
  
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
        },
      };
  
      const res = await fetch(url, options);
      const data = res.ok ? await res.json() : Promise.reject(res);
  
      return data;
  
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }

  export async function getJobsApiResponse(sub_url: string) {
    try {
      const url = `${process.env.NEXT_PUBLIC_JOBS_API_URL}${sub_url}`;
  
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      };
  
      const res = await fetch(url, options);
      const data = res.ok ? await res.json() : Promise.reject(res);
  
      return data;
  
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }