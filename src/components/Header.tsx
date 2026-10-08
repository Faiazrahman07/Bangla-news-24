import Image from 'next/image';
import logo from '@/assets/logo.webp';
import Link from 'next/link';
import Userinfo from './Userinfo';
const Header = () => {
  const date = new Date().toLocaleDateString('bn-BD',{
    dateStyle :'full'
  })
  return (
   <div className="relative flex items-center justify-between mt-2">
  
  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
    <Image height={42} src={logo} alt="" />

    <div>
      <p className='text-2xl text-red-700 font-bold'>Bangla news 24</p>
      <p className='text-xs'>{date}</p>
    </div>
  </div>

  <div className="ml-auto flex gap-2">
  <Userinfo></Userinfo>
  </div>

</div>
  );
};

export default Header;