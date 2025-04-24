import { getApiResponse } from "@/lib/products_requests"

import { Campuss, Skill, Industry} from '@/lib/types';

// Fetch all campusses
export const fetchCampusses = async (): Promise<Campuss[]> => {
  const data = await getApiResponse('/public/get-campuses');
  return data;
};

export const fetchSkills = async (): Promise<Skill[]> => {
    const data = await getApiResponse("/public/get-skills");
    return data;

};

export const fetchIndustry = async (): Promise<Industry[]> => {
    const data = await getApiResponse("/public/get-industries");
    return data
};