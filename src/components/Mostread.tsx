import Link from "next/link";
type News = { id: string;
   title: string; 
  };
const mostreadlinks= async (): Promise<News[]> => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const result =  await res.json();
    return result.data;
}

const Mostread = async () => {
  const data = await mostreadlinks();
  return (
    <div className="card p-2 bg-base-100 border bg-gray-100 w-90 ">
      <h1 className="text-2xl font-bold mb-3">সর্বাধিক পঠিত</h1>
     <div className="grid gap-2">
       {
        data.map((value,i) =>
          <Link href={`/news/${value.id}`}  key={value.id}>
        <div className="flex gap-2"
        >
         <p className="text-xl text-red-500">{i+1}.</p> <div className="font-semibold">{value.title}</div>
           </div>
           </Link>
           )
      }
     </div>
    </div>
  );
};

export default Mostread;