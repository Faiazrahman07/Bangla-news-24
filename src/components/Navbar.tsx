import Link from "next/link";

const navbarlinks = async()=>{
  const res= await fetch('https://news-api-v2.vercel.app/api/categories');
  const result = await res.json();

  return result.data;
}
interface Nav {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}
const Navbar = async () => {
  const data : Nav[]= await navbarlinks();
  return (
    <div className="flex justify-center gap-5 my-4 ">
      <Link href={'/'}>হোম</Link>
      {
        data.filter(v=> v.scrapable === true).map((value,i)=>{
          return <Link href={`/category/${value.slug}`} key={i}>{value.title}</Link>
        })
      }
    </div>
  );
};

export default Navbar;