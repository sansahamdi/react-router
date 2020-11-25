import React from 'react'
import '../App.css'

const StarRating=({count,value,inactiveColor='#ddd',size=24,activeColor='#f00',onChange})=>{
   

    const stars = Array.from({length: count}, ()=>'🟊')
    const handleChange=(value)=>{
        onChange(value+1)
    }


    return(
        <div>
            {stars.map((el,i)=>{
                let style=inactiveColor
                if(i<value){
                    style=activeColor
                }
                return (
                    <span className={'star'} 
                          key={i}
                          style={{color:style, width:size,height:size,fontSize:size}}
                          onClick={()=>handleChange(i)}
                          > {el} </span>
                )
            })}
            
        </div>
    )
}

export default StarRating