import axios from "axios"

export interface CardItemType{
    id:number;
    title:string;
    content:string;
    image_url:string;
    slug:string;
    author:{
        id:number;
        fullname:string;
        username:string;
        email:string;
        phone:string;
        create_date:string;
        update_date:string;
    }
    create_date:string;
    update_date:string;
}

interface CardRespon{
    total:number;
    data:{
        data: CardItemType[]
    }
}

export const getListCard = (): Promise<CardRespon> =>{
    return axios.get('http://localhost:3000/api/v1/post');
}