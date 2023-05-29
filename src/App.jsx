import { useEffect, useState } from 'react'
import './index.css'

const url='https://course-api.com/react-tabs-project';

function App() {
  const [data,setData]=useState()
  const [loading,setLoading] = useState(true)
  const [values,setValues] = useState(0)

  useEffect(()=>{
    fetchUrl()
  },[])

  const fetchUrl=async()=>{
    const response=await fetch(url);
    const data=await response.json();
    setData(data);
    setLoading(false);
  
  }

  if(loading){
    return<h1>Loading....</h1>
  }

  const {title,company,dates,duties}=data[values];
  return (
    <div>
        <h1 className="text-3xl text-center mt-5">Endure</h1>
        <div className="flex justify-around">
        <div className="my-2">
        {data.map((item,index)=>{
            return (
            <>
            <button
              className={`job-btn ${index === values &&'active-btn'}`} 
              key={item.id} 
              onClick={()=>setValues(index)}>
                {item.company}</button>
                <div className={`${index === values &&'active'}`}></div>
                </>)
        })}
        </div>
        <div className='mt-16'>
        <h1 className='text-2xl font-semibold my-2'>{title}</h1>
        <p className='bg-slate-400 w-fit px-1 rounded-sm mx-1'>{company}</p>
        <p className='text-slate-600 my-2'>{dates}</p>
        {duties.map((duty,index)=>{
          return (
            <p key={index} className='text-slate-500 w-2/3 my-2'>◻{duty}</p>
            )
          })}
          </div>
          </div>
    </div>
  )
}

export default App
