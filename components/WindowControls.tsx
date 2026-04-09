import usewindowstore from '@/store/window'
import React from 'react'

const WindowControls = ({target}) => {
    const {closeWindow}=usewindowstore();
    return (
    <div id='window-controls'>
        <div className='close' onClick={()=>closeWindow(target)}/>

        <div className='minimize'/>
        <div className='maximize'/>
    </div>
  )
}

export default WindowControls

