
import './prof.css';
import { useEffect, useState } from 'react';

function Prof() {
  const [profile, setProfile] = useState(null);
  const[name, setName]=useState("")
  const[age, setAge]=useState("")
  const[gender, setGender]=useState("")
  const[country, setCountry]=useState("")
  const[balans, setBalans]=useState("")
  const[games, setGames]=useState("")
  const[spent, setSpent]=useState("")
  const[win, setWin]=useState("")
  const[img, setImg]=useState("")
  useEffect(() => {
    fetch('http://localhost:3003/profile')
    .then(response => response.json())
    .then(data => {
      setName(data[0].name);
      console.log(data[0].name)
      setAge(data[0].age);
      setGender(data[0].gender);
      setCountry(data[0].country);
      setBalans(data[0].balans);
      setWin(data[0].win);
      setGames(data[0].games);
      setSpent(data[0].spent);
      setImg(data[0].img)
      console.log(data[0].img)
    })
    .catch(error => console.log(error));
  }, []);

    const backImg={
       backgroundImage: `url(${img})`
    }
  return (
    <div className="Prof">
      
        <div className='wrapper'>
          <div className="data">
            <div className='personal_data'>
              <h2>ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h2>
              <div className='line'></div>
              <ul>
              <div  className="imgprof" style={backImg}> </div>
                <li>Ник:  <div className='inf'> {name}</div></li>
                <li>Возраст: <div className='inf'>{age}</div></li>
                <li>Пол:<div className='inf'> {gender}</div></li>
                <li>Страна: <div className='inf'>{country}</div></li>
                <li>Баланс: <div className='inf'>{balans}</div></li>
                <li>Всего игр: <div className='inf'>{games}</div></li>
                <li>Потрачено: <div className='inf'>{spent}</div></li>
                <li>Выиграно: <div className='inf'>{win}</div></li>
              </ul>
            </div>

            <div className="Leaderboard">
            <h2>LEADERBOARD</h2>
            
              <ul className='liderdata'>
              <div  className="imglid" style={backImg}> </div>
                <li className='lid'>#01 - {name}</li>
                <li className='lid'>{balans}</li>
              </ul>
           
            <ul>
              <li className="place">02 <div className="imgpl" style={backImg}></div> <div>{name}</div><div>{balans}</div><div className='icon'></div></li>
              <li className="place">03 <div className="imgpl" style={backImg}></div> <div>{name}</div><div>{balans}</div><div className='icon'></div></li>
              <li className="place">04 <div className="imgpl" style={backImg}></div> <div>{name}</div><div>{balans}</div><div className='icon'></div></li>
              <li className="place">05 <div className="imgpl" style={backImg}></div> <div>{name}</div><div>{balans}</div><div className='icon'></div></li>
            </ul>
          </div>
          </div>
         
        </div>
        </div>
    
   
  )
  }


export default Prof;