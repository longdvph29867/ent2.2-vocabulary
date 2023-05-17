import React, { useState } from 'react'
import { Input } from 'antd';
import { arrEnt2 } from './ent1';
const { Search } = Input;
export default function Searchs() {
    const [arr1, setArr1] = useState(arrEnt2)
    const checkString = (str, letters) => {
        return [...letters].every(letter => new RegExp(`(?=.*${letter})`, 'i').test(str));
    }
    const onSearch = (el) => {
        let {value} = el.target
        let newArr1 = [];
        
        arrEnt2.forEach((item) => {
            if(checkString(item.eng, value)) {
                newArr1.push(item);
            }
        })
        setArr1(newArr1);
    };


  return (
    <div className='container'>
        <Search className='mt-5 mb-2'
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
                {arr1.map((item, index) => {
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
  )
}
