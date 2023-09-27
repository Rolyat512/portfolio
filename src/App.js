import { useState } from 'react';
import { Bubbles, Header, Title, About, Portfolio, Resume, Socials, Divider, Contact } from './componets';

const App = () => {
  const [page, setPage] = useState('about');

  return <>
    <Header setPage={setPage} />

    {
      page == 'about' ?
        <Bubbles>
          <About />
          <Divider />
          {/* <Title title="Portfolio" /> */}
          <Portfolio />
          {/* <Title title="Contact" /> */}
          <Contact />
        </Bubbles> :
        <Resume />
    }
    <Socials />
  </>
}

export default App;
