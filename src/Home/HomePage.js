import React, { useState } from "react";
import { Input } from 'antd';
import { arrEnt2 } from "../Vocabulary/ent2";
import { arrEnt3, arrImgGrama3 } from "../Vocabulary/ent3";
import { arrEnt4, arrImgGrama4 } from "../Vocabulary/ent4";

const { Search } = Input;



export default function HomePage() {
  const [data, setData] = useState(arrEnt2);
  const [isData, setIsData] = useState(arrEnt2);
  const [grama, setGrama] = useState(false)
  const [arrImgGrama, setArrImgGrama] = useState(arrImgGrama3);
  const [unit, setUnit] = useState('Unit 2')

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
              setUnit('Unit 2')
              }} className="btn - btn-warning text-white">Unit 2</button>
            <button onClick={() => {
              setGrama(true)
              setData(arrEnt3)
              setIsData(arrEnt3)
              setArrImgGrama(arrImgGrama3)
              setUnit('Unit 3')
            }} className="btn - btn-warning text-white mx-2">Unit 3</button>
            <button onClick={() => {
              setGrama(true)
              setData(arrEnt4)
              setIsData(arrEnt4)
              setArrImgGrama(arrImgGrama4)
              setUnit('Unit 6')
            }} className="btn - btn-warning text-white mx-2">Unit 6</button>
        </div>
      </header>
      <div className='container'>
        <h3 className="mt-2">{unit}</h3>
        <Search className='my-2'
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
          <h3>Grammar</h3>
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
