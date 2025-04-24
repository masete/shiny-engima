// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a261298d82msh656c03b0aff8f0ep1f999bjsn371a7ae67120',
// 		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

import { CarProps, FilterProps } from "../lib/types";

export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'a261298d82msh656c03b0aff8f0ep1f999bjsn371a7ae67120',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers
    });

    const result = await response.json()
    return result;
}

export async function fetchProducts() {
    const headers = {
        'x-rapidapi-key': 'a261298d82msh656c03b0aff8f0ep1f999bjsn371a7ae67120',
       
        'x-rapidapi-host': 'real-time-flipkart-api.p.rapidapi.com'
    }
    const response = await fetch('https://fakestoreapi.com/products')
    // const response = await fetch('https://real-time-flipkart-api.p.rapidapi.com/products-by-category?category_id=tyy%2C4io&page=1&sort_by=popularity',{
    //     headers:headers
    // });

    const result = await response.json()
    return result.slice(0, 4);
}


export async function fetchJobs() {
    const headers = {
        'x-rapidapi-key': 'a261298d82msh656c03b0aff8f0ep1f999bjsn371a7ae67120',
       
        'x-rapidapi-host': 'real-time-flipkart-api.p.rapidapi.com'
    }
    const response = await fetch('https://glassdoor-jobs-scraper-api.p.rapidapi.com/api/job/wait')
    // const response = await fetch('https://real-time-flipkart-api.p.rapidapi.com/products-by-category?category_id=tyy%2C4io&page=1&sort_by=popularity',{
    //     headers:headers
    // });

    const result = await response.json()
    console.log(result)
    return result.slice(0, 4);
}








   // 'x-rapidapi-key': 'a261298d82msh656c03b0aff8f0ep1f999bjsn371a7ae67120',

