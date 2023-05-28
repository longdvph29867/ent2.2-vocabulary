import React, { useState } from "react";
import { Input } from 'antd';
import { arrEnt2 } from "../Vocabulary/ent2";
import { arrEnt3 } from "../Vocabulary/ent3";
const { Search } = Input;

export default function HomePage() {
  const [data, setData] = useState(arrEnt2);


  const checkString = (str, letters) => {
    return [...letters].every(letter => new RegExp(`(?=.*${letter})`, 'i').test(str));
  }
  const onSearch = (el) => {
    let {value} = el.target
    let newArr1 = [];
    
    data.forEach((item) => {
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
            <button onClick={() => setData(arrEnt2)} className="btn - btn-warning text-white">Unit 2</button>
            <button onClick={() => setData(arrEnt3)} className="btn - btn-warning text-white mx-2">Unit 3</button>
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
    </div>
  );
}
