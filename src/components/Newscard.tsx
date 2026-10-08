import Image from "next/image";
import Link from "next/link";
interface News{
  id: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
};

const Newscard = ({ news} : { news: News }) => {
  return (
  <Link href={`/news/${news.id}`}>
    <div className="card bg-base-100 w-full h-full shadow-sm ">
      <figure>
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          width={300}
          height={300}
        />
      </figure>

      <div className="card-body">
        <p className="text-red-500 font-semibold">
          {news.category}
        </p>

        <h2 className="card-title">
          {news.title}
        </h2>

        <p>{news.description}</p>

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  </Link>
  );
};

export default Newscard;