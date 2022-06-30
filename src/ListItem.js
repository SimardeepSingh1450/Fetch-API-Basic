import React from 'react'

function ListItem({items}) {


  if(items){  
  return (
    <div>{items.map((item)=>{return(<><li key={item.id}>{JSON.stringify(item)}</li><br/></>)})}</div>
  )
  }else{
    return(
        <div><h5>Select Data From Above Buttons...</h5></div>
    )
  }
}

export default ListItem