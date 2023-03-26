import React from "react"



export default function Header(){
    const styleHead = {
        background: 'black',
        position: 'fixed',
        top: '0',
        margin: '0',
        width: '100%',
        color: 'white',
        paddingBottom: '17px',
        width: "100%"
    }
 
    const styleDiv={
        marginBottom: '10px',
        marginLeft: '-5px'
    }
    const styleDiv2={
        marginBottom: '1px',
        marginTop: '100px',
        maxWidth: '100%'
        
    }
    const icon = <img src="https://images3765588.s3.us-east-2.amazonaws.com/icons/logo132.png" id="icon1"/>
    return (
        <div style={styleDiv}>
            <h1 style={styleHead}>VINO<span>{icon}</span>BEVUTO</h1><span></span>
            <div style={styleDiv2}>
                <h4>Beverly Hills * 1-800-900-3422 * Order Online</h4>
            </div>
            
        </div>
        
    )
}

