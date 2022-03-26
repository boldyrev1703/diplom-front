import { useState, useEffect } from 'react';
import Diplomas from './components/diplomas/Diplomas';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import History from './components/History/Hestory';
import { defaultHero, defaultHistory, defaultLinks } from './utils/defaultprops';
import { Http } from './utils/http';

export type Links = {
  id: number,
  content: string,
}


export type Hero = {
  id: number,
  content: string,
  subContent: string,
}

export type Hestory = {
  id: number,
  yearDate: number,
  content: string,
  subContent: string,
  title: string,
}



function App() {
    const [linksState, setLinksState] = useState<Array<Links>>([]);
    const [heroState, seHeroState] = useState<Array<Hero>>([]);
    const [hestoryState, setHestoryState] = useState<Array<Hestory>>([]);

    useEffect(() => {
        Http.Get('/contacts/all')
            .then(response => response.json())
            .then((response) => {
                setLinksState(response.contacts);
        });
    }, [])

    useEffect(() => {
      Http.Get('/hero/all')
          .then(response => response.json())
          .then((response) => {
            seHeroState(response.hero);
          });
  }, [])

  useEffect(() => {
    Http.Get('/history/all')
        .then(response => response.json())
        .then((response) => {
          setHestoryState(response.history);
        });
}, [])
    
  return (
    <div>
      <Hero 
        heroHeader={{
          phone: linksState.length > 0 ? linksState[0].content : defaultLinks[0].content,
          mail: linksState.length > 0 ? linksState[1].content : defaultLinks[0].content
        }} 
        heroContent={{
          content: heroState.length > 0 ?  heroState[0].content : defaultHero.heroContent.content,
          subContent: heroState.length > 0 ?  heroState[0].content : defaultHero.heroContent.content,
        }}
      />
      <History historyData={hestoryState.length > 0 ? hestoryState : defaultHistory} />
      <Diplomas 
        mail={linksState.length > 0 ? linksState[1].content : defaultLinks[0].content } 
        phone={linksState.length > 0 ? linksState[0].content : defaultLinks[0].content} 
      />
      <Footer links={ linksState.length > 0 ? linksState : defaultLinks }/>
    </div>
  );
}

export default App;
