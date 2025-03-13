import LikeButton from './like-button';
import NavBar from './components/navBar';
import SectionOne from './components/sectionOne';

 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return (
    <div>
      <NavBar/>
      <SectionOne/>
    </div>
  );
}