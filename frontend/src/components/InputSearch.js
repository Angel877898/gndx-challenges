import React ,{useState} from 'react';
import "../static/css/InputSearch.css"



export default function InputSearch() {
    
    const [text, setText]=useState("")

    const handleSubmit= (e) =>{
        e.preventDefault()
        console.log(text);
    }

  return (
    <div className="inputSearch">
        <form onSubmit={handleSubmit} className="inputSearchForm">
            <div>
              <i className="fa fa-search inputSearchForm-icon" ></i> 
              <input className="inputSearchForm-input"  type="text" value={text} placeholder="search a place" onChange={(e)=>{setText(e.target.value)}} />
            </div>
            <div className="div-boton">
              <button className="inputSearchForm-button" type="submit" >Search</button>
            </div>
        </form>
    </div>
  );
}