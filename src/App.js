import React, { Component } from 'react';
import {MainBody, BackgroundImage} from './styles';
import Level0 from './pages/Level0'
import Level1 from './pages/Level1'
import Level2 from './pages/Level2'
import Level3 from './pages/Level3'
import Level4 from './pages/Level4'
import Level5 from './pages/Level5'

const App = () => {
    const [activeLevel, setActiveLevel] = React.useState('level5')
    function clickHandler (level) {
      setActiveLevel(level);
    }

    return (
      <MainBody className="App">
        <BackgroundImage />
        {activeLevel === "level0" && <Level0 onClick={clickHandler}/>}
        {activeLevel === "level1" && <Level1 onClick={clickHandler}/>}
        {activeLevel === "level2" && <Level2 onClick={clickHandler}/>}
        {activeLevel === "level3" && <Level3 onClick={clickHandler}/>}
        {activeLevel === "level4" && <Level4 onClick={clickHandler}/>}
        {activeLevel === "level5" && <Level5 onClick={clickHandler}/>}
        {activeLevel === "level6" && <Level3 onClick={clickHandler}/>}
      </MainBody>
    );
  }
export default App;