import LikeButton from './like-button';
import NavBar from './components/navBar';
import SectionOne from './components/sectionOne';
import SectionTwo from './components/sectionTwo';
import SectionThree from './components/sectionThree';
import SectionFourth from './components/sectionFourth';
import SectionFive from './components/sectionFive';
import Footer from './components/footer';
import Faq from './components/faq'


export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return (
    <div className="flex justify-center py-8 min-h-screen w-full bg-gray-900">
    <div className='flex flex-col w-11/12 items-center '>
      <NavBar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFourth/>
      <SectionFive/>
      <Faq/>
      <Footer/>
    </div>
    </div>
  );
}