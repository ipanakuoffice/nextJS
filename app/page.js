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

 
  return (
    <div className='flex flex-col items-center justify-center py-8 bg-gray-900 w-full px-8 sm:px-24'>
      <NavBar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFourth/>
      <SectionFive/>
      <Faq/>
      <Footer/>
    </div>
  );
}