import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

// import prismadb from '@/lib/prismadb'
// import serverAuth from '@/lib/serverAuth'

// export default async function handler(req: NextApiRequest, res: NextApiResponse){
//   if(req.method != 'GET'){
//     return res.status(405).end();
//   }
//   try {
//     await serverAuth(req)
//     const articles =await prismadb.movie.findmany()

//     return res.status(200).json(articles)
//   } catch(error){
//       console.log(error)
//       return res.status(400).end();
//   }
// }

import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

async function fetchAndStoreArticles() {
  try {
    // Fetch articles from the API
    const response = await axios.get('https://api.example.com/articles');
    const articles = response.data;

    // Store articles in the database
    for (const article of articles) {
      await prisma.article.upsert({
        where: { id: article.id }, // Assuming the API provides a unique ID for each article
        update: {
          title: article.title,
          content: article.content,
          author: article.author,
          // Include other fields as needed
        },
        create: {
          id: article.id,
          title: article.title,
          content: article.content,
          author: article.author,
          // Include other fields as needed
        },
      });
    }

    console.log('Articles fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching and storing articles:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the function to fetch and store articles
fetchAndStoreArticles();
