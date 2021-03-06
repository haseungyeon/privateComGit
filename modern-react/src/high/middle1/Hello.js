import React from 'react';
import '../../App.css';

function Hello(props){
    const style={
        backgroundColor:'black',
        color:'aqua',
        fontSize:24,
        padding:'1rem'
    }
    const name='react';
    return (
        <>
            <div> {props.isSpecial && <b>*</b>}{props.name}님, 안녕하세요</div>
            <div> {props.isSpecial ? <>삼항연산자</> : null}</div>
            <div> {props.call && <>별명은 {props.call}</>}</div>
            <div style={style}>{name}</div>
            <div className="gray-box"></div>
            <div style={{color:props.color}}>textColor</div>
        </>
    )
}

export default Hello;