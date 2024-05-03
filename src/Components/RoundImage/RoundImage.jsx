import "./RoundImage.css"
function RoundImage({svgPath,label = "",customeStyle = "",svgColor,ViewBox = "" }){


    return(
        <div className="image_div" style={{backgroundColor:"#72c3e7", ...customeStyle}}>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox={ViewBox} width="100%" height="100%" borderRadius="50%"><path fill={svgColor} d={svgPath}/>
        
        </svg>

        
       
        
            <div className="Label">
            <b>{label}</b>
            </div>
                
        </div>
    )
    
}

export default RoundImage;