import { useState } from 'react';
import { Bubbles, Header, About, Experience, Portfolio, Resume, Socials, Contact } from './components';

const App = () => {

  const [page, setPage] = useState('about');
 
  return <>
    <Header setPage={setPage} />  

    <Bubbles >

        {page == 'about' ? <About />: page == 'experience' ? <Experience /> : <Portfolio />}
      
        {/* <Contact /> */}

      {/* <Resume /> */}
      
    </Bubbles>
    <Socials />

    
  </>
}

export default App;