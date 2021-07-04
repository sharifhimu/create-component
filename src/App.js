import React, {useEffect}  from 'react';
import logo  from './logo.svg';
import './App.css';
import Buttoncomp from './Components/Button/Buttoncomp'; 
import Dropdowncomp from './Components/Dropdowncomp/Dropdowncomp'
import Tagcomp from './Components/Tagcomp/Tagcomp'

function App() {


      let menu =  [
        {
            name: 'Create Page',
            link: '#Create page'
        },
        {
            name: 'Manage Page',
            link: '#Manage page'
        },
        {
            name: 'Delete Page',
            link: '#Delete page'
        },
        {
          name: 'Create Page',
          link: '#Create page'
      },
      {
          name: 'Manage Page',
          link: '#Manage page'
      },
      {
          name: 'Delete Page',
          link: '#Delete page'
      },
    ]

  return (
    <div className="App">
      <Buttoncomp text='button name' type="default" />   {/* available type is : primary, subtle, link, default */}
      <Dropdowncomp  name="default" menu={menu} type="default" />  {/* available type : default, fit-container, tall   */}
      <Tagcomp  name="Link tag" link="https://fb.com" closable='true'  /> 
      <Tagcomp  name="tag"  closable='true'  />
      <Tagcomp  name="Not closable tag"    /> 


    </div>
  );
}

export default App;
