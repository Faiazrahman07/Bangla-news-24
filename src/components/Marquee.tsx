import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
const marqueelink =async()=>{
          const res= await  fetch('https://news-api-v2.vercel.app/api/news?limit=10');
          const result = await res.json();
          return result.data;
}
const Marquee = async () => {
   const data = await marqueelink();
  return (
    <div className="bg-red-600 my-2 text-white ">
    <div className="flex">
        <div className="bg-red-800 px-5">সর্বশেষ</div>
      <MarqueeText className="py-1" direction="right" duration={8}>
      
       {

        data.map(value => {
          return (
               <span key={value.id}>
      {value.title}
      <span className="mx-4">•</span>
    </span>
          )
        }
      )
       }
       </MarqueeText>
    </div>
      
    </div>
  );
};

export default Marquee;