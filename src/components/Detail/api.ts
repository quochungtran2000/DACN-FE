import axios from "axios";


export interface DetailItemType {
  id: number;
  title: string;
  content: string;
  image_url: string;
  slug: string;
  author: {
    id: number;
    fullname: string;
    username: string;
    email: string;
    phone: string;
    create_date: string;
    update_date: string;
  };
  create_date: string;
  update_date: string;
}

interface DetailRespon {
    data: DetailItemType;
}

export const getDetailItem = (id: number): Promise<DetailRespon> => {
  return axios.get(`http://localhost:3000/api/v1/post/${id}`);
};
