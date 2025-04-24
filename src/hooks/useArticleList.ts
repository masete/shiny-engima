// import useSWR from 'swr';
// import fetcher from '@/lib/fetcher';

// const useArticleList = () =>{
//     const { data, error} = useSWR('https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2024-07-10&' +
//           'sortBy=popularity&' +
//           'apiKey=c89e26b8963c4767aafb712670643641', fetcher, {
//             revalidateIfStale: false,
//             revalidateOnFocus: false,
//             revalidateOnReconnect: false
//     });
//     return{
//         data,
//         error,
        
//     }
// };

// export default useArticleList


// import useSWR from 'swr';
// import fetcher from '../../../lib/fetcher';

// const useArticleList = () => {
    // const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    // const { data, error } = useSWR('https://newsapi.org/v2/everything?q=Apple&from=2024-07-10&sortBy=popularity&apiKey=c89e26b8963c4767aafb712670643641', fetcher);
    // const { data, error } = useSWR('https://newsapi.org/v2/everything?q=Apple&from=2024-07-10&sortBy=popularity&apiKey=c89e26b8963c4767aafb712670643641',fetcher);

//   return {
//     articles: data?.articles,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

// export default useArticleList;
