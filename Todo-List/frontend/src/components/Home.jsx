import React, {  useState } from 'react'
import axios from 'axios';
import './Home.css'
const Home = () => {

    const [data, setData] = useState({
        work: '',
        status: '',
        time: ''
      });
      const [todo, settodo] = useState([]);
    
      const onchangehandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const addpath= async(e)=>{
    
        const url='http://localhost:4000/todo/add'
        try {
           const response=await axios.post(url,data);
           if(response.status==200){
               e.preventDefault();
               alert('Todo added')
               
           }else{
               alert('error in upload')
           }
        } catch (error) {
           alert(error)
        }
      }
    
    //   useEffect(() => {
    //     const fetchdata = async () => {
    //       const url = 'http://localhost:4000/todo/list';
    //       try {
    //         const response = await axios.get(url);
    //         if (response.status === 200) {
    //           settodo(response.data.data);
    //         }
    //       } catch (error) {
    //         console.error('Error fetching todo datas:', error);
    //       }
    //     };
    
    //     fetchdata();
    //   }, []);
    
    //   const deletetodo = async (id) => {
    //     const url = `http://localhost:4000/todo/delete/${id}`;
    //     try {
    //       const response = await axios.delete(url);
    //       if (response.status === 200) {
    //         alert('Todo deleted');
    //         settodo(todo.filter((items) => items._id !== id));
    //       } else {
    //         alert('Failed to delete');
    //       }
    //     } catch (error) {
    //       console.error('Error deleting Todo list:', error);
    //     }
    //   };
    
  return (
    <>
      <div className='add'>
      <h1>ADD TODO WORK</h1>
      <form onSubmit={addpath} >
        <p><b>Work</b></p> 
        <input type="text" placeholder='Work' name='work' value={data.work} onChange={onchangehandler}/>
       <p><b>Status</b></p> 
       <input type="text" placeholder='Status' name='status' value={data.status} onChange={onchangehandler}/>
       <p><b>Time</b></p>
       <input type="text" placeholder='Time' name='time' value={data.time} onChange={onchangehandler}/><br /><br />
       <button type='submit' ><b>Add</b></button>
      </form>
      </div>

      <h1>TODO LIST</h1>
      {/* <ul>

          {todo.map((item) => (
            <li key={item._id}>
              <span> {item.work} - work: {item.status} - status: {item.time}- time</span>
              <button onClick={() => deletetodo(item._id)}>Delete</button>
            </li>
        ) )}

      </ul> */}
       
    
    </>
    
  )
}

export default Home