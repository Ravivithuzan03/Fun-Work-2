import React, { Component } from 'react';
import { render } from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Home      from './common/home.component.jsx'
import About     from './common/about.component.jsx'
import Main      from './common/main.component.jsx'
import Car       from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    { 
        id: 1,
        name: 'Sigiriya Fortress',
        address: 'Rock Front, Sigiriya 21120',
        media: 'https://www.serendibleisure.com/hotelsigiriya/wp-content/uploads/sites/3/2019/07/Sigiriya-Rock-Fortress-b3.jpg',
        story: 'Sigiriya or Sinhagiri is an ancient rock fortress located in the northern  Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive  column of rock nearly 200 metres high.'
       
        

    },
    {
        id: 2,
        name: 'Yala National Park',
        address: 'Katagamuwa, Yala',
        media: 'https://ttcsrilanka.com/wp-content/uploads/2016/06/sri-lanka-yala-national-park-sri-lanka1-1024x768.jpg',
        story: 'Yala National Park is a huge area of forest, grassland and lagoons bordering the Indian Ocean, in southeast Sri Lanka. It’s home to wildlife such as leopards, elephants and crocodiles, as well as hundreds of bird species. Inland, Sithulpawwa is an ancient Buddhist monastery. Nearby caves contain centuries-old rock paintings. Southwest, Magul Maha Viharaya also has ancient Buddhist ruins. Both are pilgrimage sites.'

    },
    {
        id: 3,
        name: 'Udawalawe National Park Safari',
        address: 'Katagamuwa, Yala',
        media: 'https://wallpapercave.com/wp/om9t3kf.jpg',
        story: 'Yala National Park is a huge area of forest, grassland and lagoons bordering the Indian Ocean, in southeast Sri Lanka. It’s home to wildlife such as leopards, elephants and crocodiles, as well as hundreds of bird species. Inland, Sithulpawwa is an ancient Buddhist monastery. Nearby caves contain centuries-old rock paintings. Southwest, Magul Maha Viharaya also has ancient Buddhist ruins. Both are pilgrimage sites.'
    },
    {
        id: 4,
        name: 'Horton Plains National Park',
        address:' ‎Central province, Sri Lanka',
        media: 'https://wallpapercave.com/wp/wp2602012.jpg',
        story: 'Horton Plains National Park is a national park in the central highlands of Sri Lanka that was designated in 1988. It is located at an elevation of 2,100–2,300 m and encompasses montane grassland and cloud forest. It is rich in biodiversity and many species found here are endemic to the region. '
    },
    {
        id: 5,
        name: 'Elephant Orphanage (Zoo)',
        address:'B199, Rambukkana 71100',
        media: 'https://wallpapercave.com/wp/wp6961698.jpg',
        story: 'Pinnawala Elephant Orphanage is an orphanage, nursery and captive breeding ground for wild Asian elephants located at Pinnawala village, 13 km northeast of Kegalle town in Sabaragamuwa Province of Sri Lanka. Pinnawala has the largest herd of captive elephants in the world.'
    }
];

render(
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/"         component={Home} />
      <Route path="/cars"     component={Car} data={data}/>
      <Route path="/cars/:id" component={CarDetail} data={data}/>
      <Route path="/about"    component={About}/>
    </Route>
  </Router>,
  document.getElementById('container')
);
