/*import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
*/

import img1 from '../assets/game-1.png';
import img2 from '../assets/game-2.png';
import img3 from '../assets/game-3.png';
import img4 from '../assets/game-4.png';
import img5 from '../assets/game-5.png';
import img6 from '../assets/game-6.png';

export const games =[
{
  id: '1',
  name: 'League of Legends',
  ads: '4',
  cover: img1
},
{
  id: '2',
  name: 'Dota 2',
  ads: '3',
  cover: img2
},
{
  id: '3',
  name: 'CS-GO',
  ads: '2',
  cover: img3
},
{
  id: '4',
  name: 'Apex',
  ads: '1',
  cover: img4
},
{
  id: '5',
  name: 'Fortnite',
  ads: '3',
  cover: img5
},
{
  id: '6',
  name: 'World of WarCraft',
  ads: '1',
  cover: img6
}
]
