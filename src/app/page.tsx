
"use client"

import { Itim } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

const [todo,setTodo]= useState([{move:"suchmay", id:1},{move:"suchmuch", id:4}])


const [inputvale, setInputvale]=useState("")
const [id, setId]=useState(0)

const edit=(id:any)=>{

  let obj:any=todo.find(items=>items.id==id)
  setId(obj.id)
  setInputvale(obj.move)

}


const deleteitems=(id:any)=>{
  let newarry=todo.filter(items=>items.id!==id)

setTodo([...newarry])

}

const additems=()=>{
  let obj:any=todo.find(items=>items.id==id)
  if(obj){
let newarry=todo.filter(items=>items.id!==obj.id)

setTodo([...newarry,{ move:inputvale,id:id }])
setInputvale("")
  setId(0)
  return
  }


setTodo([...todo,{ move:inputvale,id:id }])
setInputvale("")
  setId(0)
}

console.log(inputvale,id)


  return (
    <main className="">
    <div className='flex justify-center m-auto rounded-2xl mt-11 p-4 items-center text-center max-w-xl text-3xl bg-red-200'>Todo App</div>
    
    <div className='flex gap-10 justify-center m-auto rounded-2xl mt-11 p-8 items-center text-center max-w-7xl bg-red-200'>
<input type="text" value={inputvale}  onChange={(e)=>setInputvale(e.target.value)} className='p-2  w-[60%] rounded-xl border' placeholder='write the name of movie ' />


<input type="text" value={id}  onChange={(e:any)=>setId(e.target.value)} className='p-2 w-[20%] rounded-xl border' placeholder='Enter id  ' />


<button onClick={additems} className='bg-blue-300 rounded-xl text-white p-2'>Add movie</button>








    </div>



    <div className='flex justify-center m-auto rounded-2xl mt-11 p-4 items-center text-center max-w-xl text-3xl bg-red-200'>movies list</div>
    
    
    <div className=" ml-14 grid grid-cols-2 gap-4">

{
todo.map((items:any,i:any)=>{
  return(
    <div key={i}> <div className='h-30 shadow-md border max-w-md mt-10'>


      

    <div className='flex justify-between '>
    
      <h1 className='p-2 rounded-full shadow'>{i+1}</h1>
      <h1 onClick={()=>deleteitems(items.id)} className='p-2 text-xl shadow cursor-pointer rounded-full'>x</h1>
    </div>
    
    <h1 className=' text-2xl mt-3 p-2'>{items.move}</h1>
    
    <h1 key={items.i} onClick={()=>edit(items.id)   } className='flex justify-end text-sm p-2 mt-4 cursor-pointer '>Edit</h1>

    </div></div>
  )

})}

 
  
  
</div>
    
    
    
     
    </main>
  )
}
