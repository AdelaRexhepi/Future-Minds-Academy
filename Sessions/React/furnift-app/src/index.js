import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeHeader from './compontents/HomeHeader';
import Welcome from './compontents/Welcome';
import BestFurniture from './compontents/BestFurniture';
import ViewItems from './compontents/ViewItems';
import UniqueFurniture from './compontents/UniqueFurniture';
import Detail from './compontents/Detail';
import NewsLetter from './compontents/NewsLetter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeHeader />
    <div class="container">
      <main>
        <Welcome />
        <p class="nicorTxt"><b>NICOR</b></p>
        <BestFurniture />
        <ViewItems />
        <UniqueFurniture />
        <Detail />
        <shopCard />
        <NewsLetter />
      </main>
    </div>
  </React.StrictMode>
);
