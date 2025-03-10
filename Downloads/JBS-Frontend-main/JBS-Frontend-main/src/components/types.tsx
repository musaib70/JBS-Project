export interface Blog {
    _id: string;
    title: string;
    image: string;
    createdAt: string;
    category_id: string;
    meta_description?: string;
    description?: string;
    post_categories: {
      _id: string;
      name: string;
    };
    tags?: string[];
  }

  export interface News {
    _id: string;
    title: string;
    image: string;
    createdAt: string;
    category_id: string;
    meta_description?: string;
    description?: string;
    post_categories: {
      _id: string;
      name: string;
    };
    tags?: string[];
  }
  
  export interface CaseStudy {
    _id: string;
    title: string;
    image: string;
    createdAt: string;
    category_id: string;
    meta_description?: string;
    description?: string;
    post_categories: {
      _id: string;
      name: string;
    };
    tags?: string[];
  }