import LikeButton from './like-button';
import NavBar from './components/navBar';

 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return (
    <div>
      <NavBar/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}