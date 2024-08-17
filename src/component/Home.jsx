import React, { useState} from 'react'
import curly from "../images/curly.jfif"
import logo from "../images/logo.jpg"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedHairstyle, setSelectedHairstyle] = useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [SelectedSalon, setSelectedSalon] = useState('');

  const hairstyles =[
    {
      id:1,
      name:'Braided updo',
      price:'$50',
      town:'Yaounde',
      salon:'Curl Emporium',
      imageUrl: require("../images/braided updo1.jfif"),
    },
    {
      id:2,
      name:'Curly Bob',
      price:'$40',
      town:'Douala',
      salon:'Curl Oasis',
      imageUrl:curly,
    },
    {
      id:3,
      name:'Sleek Ponytail',
      price:'$35',
      town:'Buea',
      salon:'Smooth styles',
      imageUrl:'',
    },
    {
      id:4,
      name:'Bohomian braids',
      price:'$50',
      town:'Yaounde',
      salon:'Curl Emporium',
      imageUrl:'',
    },
    {
      id:5,
      name:'Braided updo',
      price:'$50',
      town:'Buea',
      salon:'Stylish beauty',
      imageUrl:'',
    },
    {
      id:6,
      name:'Braided updo',
      price:'$45',
      town:'Bafoussam',
      salon:'Curl Emporium',
      imageUrl:'',
    },
  ];

  const filteredHairstyles = hairstyles.filter((hairstyle) =>
    hairstyle.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  && (selectedPrice === '' ||
    hairstyle.price === selectedPrice) &&
    (selectedHairstyle === '' || 
      hairstyle.name === selectedHairstyle)
      &&
      (selectedTown === '' ||
        hairstyle.town ===selectedTown) &&
        (SelectedSalon === '' ||
          hairstyle.salon === SelectedSalon)
        );
  return (
    <div>
      <header style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'1rem',
        backgroundColor:'gray',
        height:'70px'
      }}>
        <div style={{display:'flex',
        justifyContent:'space-between'
        }}>
          <img src={logo} alt='logo' style={{height: '80px'}}/>
          <h1>NextLuk</h1>
        </div>
        <div style={{display:'flex',
          alignItems:'center'
        }}>
          <input 
          type='text'
          placeholder='Search hairstyles'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{padding:'0.5rem',
            borderRadius:'4px', border:'1px solid #ccc',
            marginRight:'1rem'
          }}
          />
          <select 
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          style={{padding:'0.5rem',
            borderRadius:'4px', border:'1px solid #ccc',
            marginRight:'1rem'
          }}>
            <option value="">Price</option>
            <option value="$30">$30</option>
            <option value="$40">$40</option>
            <option value="$50">$50</option>
          </select>
          <select 
          value={selectedHairstyle}
          onChange={(e) => setSelectedHairstyle(e.target.value)}
          style={{padding:'0.5rem',
            borderRadius:'4px', border:'1px solid #ccc',
            marginRight:'1rem'
          }}>
            <option value="">Hairstyle</option>
            <option value="Braided updo">Braided updo</option>
            <option value="Curly Bob">Curly Bob</option>
            <option value="Sleek Ponytail">Sleek Ponytail</option>
            <option value="Bohomian braid">Bohomian braid</option>
            </select>
            <select 
          value={selectedTown}
          onChange={(e) => setSelectedTown(e.target.value)}
          style={{padding:'0.5rem',
            borderRadius:'4px', border:'1px solid #ccc',
            marginRight:'1rem'
          }}>
            <option value="">Town</option>
            <option value="Yaounde">Yaounde</option>
            <option value="Douala">Douala</option>
            <option value="Buea">Buea</option>
            <option value="Bafoussam">Bafoussam</option>
          </select>
          <select 
          value={SelectedSalon}
          onChange={(e) => setSelectedSalon(e.target.value)}
          style={{padding:'0.5rem',
            borderRadius:'4px', border:'1px solid #ccc',
            marginRight:'1rem'
          }}>
            <option value="">Salon</option>
            <option value="Curl Emporium">Curl Emporium</option>
            <option value="Curl Oasis">Curl Oasis</option>
            <option value="Smooth styles">Smooth styles</option>
            <option value="Stylish beauty">Stylish beauty</option>
          </select>
        </div>
      </header>

      <div
      style={{
        display:'grid',
        gridTemplateColumns:'repeat (auto-fit, minmax(300px, 1fr))',
        gap:'2rem',
      }}
      >
        {filteredHairstyles.map((hairstyle) => (
          <div key={hairstyle.id}
          style={{display:'flex', flexDirection:'column',
            alignItems:'center'
          }}>
            <img src={hairstyle.imageUrl}
            alt={hairstyle.name} style={{width:'100%',height:'200px', objectFit:'cover'}}/>
            <h3>{hairstyle.name}</h3>
            <p>Price:{hairstyle.price}</p>
            <p>Town:{hairstyle.town}</p>
            <p>Salon:{hairstyle.salon}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Home