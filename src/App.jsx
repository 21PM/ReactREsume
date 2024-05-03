
import './App.css'
import ProfileDiv from "./Components/main_container/profie_div/profileDiv.jsx"
import MiddleDIv from './Components/main_container/middle_div/middle_div.jsx'
import RoundImage from './Components/RoundImage/RoundImage.jsx';
import BottomDIv from './Components/main_container/bottom_logo_container/bottom_div.jsx';

function App() {


  return (
    
      <div id="App-main">
        <section id="Round_Image_div">
          
          <RoundImage ViewBox={"0 0 448 512"} customeStyle={{backgroundColor:"#72c3e7"}} svgPath={"M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"} label="Profile"/>

          <RoundImage ViewBox={"0 0 512 512"} svgPath={"M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"} label="Work"/>

          <RoundImage ViewBox={"0 0 384 512"} svgPath={"M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"} label="Work"/>

          <RoundImage ViewBox={"0 0 384 512"} svgPath={"M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"}/>

        </section>

        
        <artcile id="Profile_container">
          <ProfileDiv rstyle={{padding:"10px"}} rightcontent={"I specialize in writing long-form blog content, case studies, e-books, and white papers for B2Bs, tech startups, and marketing agencies.s"} cstyle={{fontWeight:"900",fontSize:"45px",paddingTop:"10px",paddingBottom:"10px"}} name={"JESSCIA GREENE"} post={"FREELANCE WRITER"} emailid={"Email :"} web={"Website :"}email={"myemail@gmail.com"} website={"mywebsite.com"}/>


          <MiddleDIv/>
          <ProfileDiv emailid={"Zapiers -"} web={"Spoke -"}email={"    Organize Your Life with the Agile Method"} website={"    Is 40 hours a week too much? Here's what history and science say."} last={"nDash -"} lastconent={"   Why Generalist Writers Lead to Lost Profits in B2B Tech"}/>
          <BottomDIv/>
          


        </artcile>

        
        
        

      </div>

  )
}

export default App



