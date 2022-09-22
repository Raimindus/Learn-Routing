import { Routes, Route } from 'react-router-dom';
import Allmeetuppages from './pages/Allmeetup';
import Newmeetuppages from './pages/Newmeetup';
import Favpages from './pages/Favourites';
import Layout from "./components/layout/Layout";

function App() {
  return <Layout>
    <Routes>
        <Route path="/" element={<Allmeetuppages/>}/>
        <Route path="/new-meetup" element={<Newmeetuppages/>}/>
        <Route path="/Fav" element={<Favpages/>}/>
    </Routes>
    </Layout>;
}

export default App;
