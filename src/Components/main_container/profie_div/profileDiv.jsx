import "./profileDiv.css"
import MiddleDIv from "../middle_div/middle_div";

function ProfileDiv({name,post,cstyle={},rightcontent,rstyle = {},email,website,emailid,web,last,lastconent }){
    return(
        <div id="profile_main_div">
            <div id="Two_section">
                    <section className="left">
                        <p style={{...cstyle}}>{name}</p>
                        <p rstyle={{}}>{post}</p>
                        <div class="container">
                     <div class="box">Writing</div> 
                    <div class="box">Editing</div>
                    <div class="box">Social Media</div>
                    <div class="box">Researching</div>
                    <div class="box">SEO</div>
    </div>
                     </section>

                    <section className="right">
                        <p>{rightcontent}</p>
                        <span> <b>{emailid} </b> {email}</span><br></br><br></br>
                        <span> <b>{web}</b> {website}</span><br></br><br></br>
                        <span><b>{last}</b>{lastconent}</span>
                    
                    </section>

                   
            </div>

        </div>
    )
}


export default ProfileDiv;