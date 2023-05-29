import React, { useState } from "react";
import { Input } from 'antd';
import { arrEnt2 } from "../Vocabulary/ent2";
import { arrEnt3 } from "../Vocabulary/ent3";
import imgGrama1 from '../image/3-p1.1.png'
import imgGrama2 from '../image/3-p1.2.png'
import imgGrama3 from '../image/3-p1.3.png'
import imgGrama4 from '../image/3-p1.4.png'
import imgGrama5 from '../image/3-p1.5.png'
import imgGrama6 from '../image/3-p1.6.png'
const { Search } = Input;

const arrImgGrama = [
  imgGrama1,
  imgGrama2,
  imgGrama3,
  imgGrama4,
  imgGrama5,
  imgGrama6,
]

export default function HomePage() {
  const [data, setData] = useState(arrEnt2);
  const [isData, setIsData] = useState(arrEnt2);
  const [grama, setGrama] = useState(false)

  const checkString = (str, letters) => {
    return [...letters].every(letter => new RegExp(`(?=.*${letter})`, 'i').test(str));
  }
  const onSearch = (el) => {
    let {value} = el.target
    let newArr1 = [];
    
    isData.forEach((item) => {
      if(checkString(item.eng, value)) {
        newArr1.push(item);
      }
    })
    console.log("🚀 ~ file: HomePage.js:19 ~ onSearch ~ newArr1:", newArr1)
    setData(newArr1);
  };
  return (
    <div>
      <header>
        <div className="container d-flex mt-3">
            <button onClick={() => {
              setGrama(false)
              setData(arrEnt2)
              setIsData(arrEnt2)
              }} className="btn - btn-warning text-white">Unit 2</button>
            <button onClick={() => {
              setGrama(true)
              setData(arrEnt3)
              setIsData(arrEnt3)
            }} className="btn - btn-warning text-white mx-2">Unit 3</button>
        </div>
      </header>
      <div className='container'>
        <Search className='mt-2 mb-2'
        placeholder="search"
        onChange={onSearch}
        style={{
          width: 200,
        }}
        />
        <table className='table'>
          <thead>
            <tr className='bg-success text-light'>
              <th>English</th>
              <th>Vietnamese</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.eng}</td>
                  <td>{item.vie}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {grama && (
        <div className="container my-5">
          <h3>Grama</h3>
          <div className="d-flex flex-wrap">
            {/*  */}
            {arrImgGrama.map((item, index) => [
            <div className="p-3 col-12 col-lg-6" key={index}>
              <div className="shadow">
                <img className="w-100" src={item} alt="" />
              </div>
            </div>
            ])}
            {/*  */}
          </div>
        </div>
        
        )}
      </div>
  );
}
