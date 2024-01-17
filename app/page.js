"use client"
import React, { useState } from 'react'
import Link from "next/link" 

const page = () =>{
    
    const [title,settitle] = useState("")
    const [desc,setdesc]=useState("")
    const [mainTask,setMainTask] = useState([])  
  
    const submitHandler = (e) =>{
      e.preventDefault()
      console.log(title)
      console.log(desc)
      setMainTask([...mainTask,{title,desc}])
      settitle("")  
      setdesc("")
      console.log(mainTask)
    }
  
    const deleteHandler =(i)=>{
          let copyTask = [...mainTask]
          copyTask.splice(i,1)
          setMainTask(copyTask)
    }
  
  
    let renderTask = <h2 className='text-black font-semibold'> No Task Available...</h2>
  
    if(mainTask.length>0){
      renderTask = mainTask.map((t,i) => {
        return (
          <li className='flex items-center justify-between'>
          <div className='flex justify-between items-center mb-5 w-2/3'>
            <h5 className='text-xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button onClick={()=>{
            deleteHandler(i)}}
          className='bg-black text-white px-2 py-1 rounded font-bold'>❌</button>
          </li>
    
        );
      });
    }
    
    return (
        <>
        
        <h1 className='bg-blue-800 py-2 text-white text-5xl font-bold text-center mt-10'>Todo-list📝</h1>
   
        <form onSubmit = {submitHandler}>
            <input type='text' className='text-2xl border-2 border-black  m-5 p-4 text-black' placeholder= "Enter Title here" value={title} onChange={(e)=>{
              settitle(e.target.value)
            }}/>
  
            <input type='text' className='text-2xl border-2 border-black  m-5 p-4 text-black' placeholder= "Enter Description here" value={desc} onChange={(e)=>{
              setdesc(e.target.value)
            }}/> 
  
            <button className='bg-black text-white m-4 p-2 rounded font-semibold'>Add Task</button>
            
        </form>
  
        <hr />
        <div className='m-5 p-8 bg-blue-300'>
          <ul className='text-black '>{renderTask}</ul>
        </div>
        </>
    )
}

export default page



































// "use client"
// import React, { useState } from 'react'

// const page = () =>{
//     // const groom ="Swapnil"
//     // const bride = "Tanuja"
//     // // groom = "vicky"  ---->  cannot reassign to a variable declared with `const`
//     // return <div>Today {groom} weds {bride}</div>
    


//     const [marks,setmarks]=useState(80)
//     return (
//         <>
//         <h1>My marks were {marks}</h1>
//        <button onClick={()=>{
//         setmarks(60)
//        }}>Update</button>
//         </>
//     )
// }

// export default page



