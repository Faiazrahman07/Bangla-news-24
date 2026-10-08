import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Notfound from '@/app/not-found';

const Newsdetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${id}`
  );

  const data = await res.json();
  const news = data.data;

  if(!news){
    Notfound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10">

  
      <h1 className="text-4xl font-bold mb-4">
        {news.title}
      </h1>


      <div className="text-sm text-gray-500 mb-6">
        <span>{news.source}</span>
      </div>

  
      <Image
        src={news.imageUrl}
        alt={news.title}
        width={600}
        height={600}
        className="w-full rounded-lg"
      />

      {/* Description */}
      <p className="text-xl font-medium mt-6 mb-8">
        {news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text}
      </p>


      <div className="space-y-6">
        {news.body.map((item, index) => {

     
          if (item.type === 'text') {
            return (
              <p key={index} className="text-lg leading-8">
                {item.text}
              </p>
            );
          }


          if (item.type === 'subheading') {
            return (
              <h2 key={index} className="text-2xl font-bold mt-8">
                {item.text}
              </h2>
            );
          }

         
          if (item.type === 'image') {
            return (
              <Image
                key={index}
                src={item.url}
                alt={item.altText || news.title}
                width={item.width}
                height={item.height}
                className="w-full rounded-lg"
              />
            );
          }

          return null;
        })}
      </div>

    </div>
  );
};

export default Newsdetails;