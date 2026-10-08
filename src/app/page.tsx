import MainNews from "@/components/MainNews";
import Mostread from "@/components/Mostread";
import Newscard from "@/components/Newscard";

interface News {
  id: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
};

interface Section{
  id: string;
  title: string;
  articles: News[];
};

const homelink = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  const result = await res.json();

  const section :Section[]= result.data;

  const firstnews = section[0].articles;
  const othernews = section.slice(1);

  return {
    firstnews,
    othernews,
  };
};

export default async function Home() {
  const data = await homelink();

  return (
    <div>
      <div className="grid grid-cols-3 gap-8 mt-4">

        <div className="col-span-2 ">
          <MainNews data={data.firstnews} />

          <div className="grid gap-4 mt-4 ">
            {data.othernews.map((value) => (
              <div key={value.id}>

                <h2 className="border-b-2 border-red-600 font-bold">
                  {value.title}
                </h2>

                <div className="grid grid-cols-2 gap-2 mt-3">
                  {value.articles.map((news) => (
                    <Newscard
                      key={news.id}
                      news={news}
                    />
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Most Read */}
        <div className="col-span-1 min-w-0">
          <Mostread />
        </div>

      </div>
    </div>
  );
}