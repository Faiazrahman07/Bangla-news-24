import Image from 'next/image';
import Link from 'next/link';
  export interface INews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;

}


const MainNews = ({data}:{data:INews[]}) => {
  const [firstnews,...othernews]=data;
  return (
    <div className='flex gap-4'>
   <Link href={`/news/${firstnews.id}`}>
    
    <div className="card bg-base-100 w-92 shadow-sm mb-3">
  <figure>
    <Image
      src={firstnews.imageUrl} alt='/'   width={600}
  height={400}/>
  </figure>
  <div className="card-body">
    <p className='text-red-500 font-semibold'>{firstnews.category}</p>
    <h2 className="card-title">{firstnews.title}</h2>
    <p>{firstnews.description}</p>
  
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</Link>

<div className="grid gap-2 h-120 ">
  {othernews.slice(0, 4).map(on => (
    <Link href={`/news/${on.id}`} key={on.id}>
      <div className="card bg-base-100 border border-gray-300 py-1 px-3 w-90">
        <p className="text-red-500 font-semibold">
          {on.category}
        </p>

        <div>{on.title}</div>
      </div>
    </Link>
  ))}
</div>
    </div>
  );
};

export default MainNews;