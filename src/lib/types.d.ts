export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    name: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  export interface Genre {
    id: number;
    name: string;
    movies: Movie[];
  }
  
  export interface Video {
    type:
      | "Bloopers"
      | "Featurette"
      | "Behind the Scenes"
      | "Clip"
      | "Trailer"
      | "Teaser";
  }



  export interface Article {
    tag: string,
    slug: string,
    title: string,
    subtitle: string,
    excerpt: string,
    hex: string,
    image: string,
    lang: string,
    json: string,
  }

    export interface ArticleBo {
    slug: string;
    articles: Article[];
    title: string;
    articles: string;
    image: string;
  }

  import { MouseEventHandler } from "react";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}


export interface Category {
  title: ReactNode;
  id: number;
  category: string;
  products: Product[];
}


export interface Product {
  id: number;
  heading: string,
  name: string;
  details: string;
  price: number;
  date_posted: string;
  owner_id: number;
  available_date: string;
  status: string;
  image: string;
  product_service_category_id: number;
  image_link: string;
}

export interface Category {
  id:number;
  details: string;
  name: string;
  product: Product[];
}

export interface JobListing {
  heading: string;
  details: string;
  price: number;
  date_posted: string;
  owner_id: number;
  available_date: string;
  status: string;
  image: number;
  product_service_job_category_id: number;
  id: number;
  name: string | null;
  image_link: string;
}

export type JobCategory = {
  category_id: number;
  category: string;
  job_listing_list: Job[];
};


export interface Job {
  heading: string;
  name: string;
  available_date: string;
  id: number;
  status: string;
  company: string;
  level: string;
  location: string;
  price: string;
  details: string;
  applicants: string;
  image_link: string;
}

export interface Skill {
  id: number;
  name: string;
  type: number;
}

export interface Campuss {
  id: number;
  name: string;
  location: string;
  contact: string;
}

export interface Industry {
  id: number;
  name: string;
}

export interface FormData {
  password: string;
  surname?: string;
  f_name?: string;
  phone_number?: string;
  email: string;
  profesion: string;
  w_campus: string;
  cell_no: string;
  business_name: string;
  business_phone: string;
  business_email: string;
  business_location: string;
  industry: string;
  ursb_reg: string
  surname?: string;
  f_name?: string;
  phone_number?: string;
  email: string;
  password: string;
 
}
