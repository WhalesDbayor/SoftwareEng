import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
  const [blogs, setBlog] = useState([
    {title: 'A new world!', author: 'Ishaq Adebayo', content: 'In the age of prime numbers where everything presents itself in a unique, yet definitive mathematical concepts, realism is born. It\'s a new way to see our world, our lives in a whole new perspective.', id: 1 },
    {title: 'Conquering doubts!', author: 'Luther Maxwell', content: 'Am I good enough? Can I change my status quo? Can I dare to be that change in my world? How do I conquer self-doubts and societal entrapments? Am I even supposed to?', id: 2 },
    {title: 'The river died!', author: 'Ishaq Adebayo', content: 'History tells of valiant warriors, of great men who defiled odds, reshaped destinies and lived on in eternal bliss. I know of many a few, and it is worth telling. Listen!', id: 3 },
    {title: 'The pain slides!', author: 'Luther Maxwell', content: 'The bereaved mind. Defeated soul. Strength vamped, and courage deemed. Life\'s purpose questioned-\'meaningless dreams I suppose.\'. But... the pain slides, if only you can hold stead.', id: 4 }
  ]);
  const title = "All Blogs!";
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlog(newBlogs);
  }

  const [name, setName] = useState('Ishaq Adebayo');

  useEffect(() => {
    console.log('UseEffect ran');
  });

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title={ title } handleDelete={handleDelete} />
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Ishaq Adebayo')} title="Ishaq's Posts" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Luther Maxwell')} title="Luther's Posts" handleDelete={handleDelete} /> */}
      {/* <button onClick={ setName('Wabalonline01@gmail.com')}>Click Me</button> */}
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;