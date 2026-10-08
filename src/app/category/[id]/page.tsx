import { notFound } from 'next/navigation';
import Newscard from '@/components/Newscard';
import React from 'react';

const CategoryNews = async({params}) => {
  const{id}=  await params;
 const res= await fetch(`https://news-api-v2.vercel.app/api/category/${id}`);
 const data = await res.json();
 const categorynews = data.data;

 if(!categorynews){
  notFound()
 }
  return (
    <div>
      <h1 className='text-2xl font-bold border-b-2 border-red-500'>{data.title}</h1>
  
    <div className="grid grid-cols-3 mt-3 gap-10"> 
      {
      categorynews.map(news=><Newscard key={news.id} news={news}></Newscard>
      )
    }
  </div>
    </div>
  );
};

export default CategoryNews;