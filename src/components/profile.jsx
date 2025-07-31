import AboutMe from "./aboutme";
import Button from "./button";
import ProfilePicture from "./profilepic";
import Skills from "./skills";

function Profile (){
    return(
    <div className="cmp-profile">
      <div>  
        <ProfilePicture />
        <AboutMe />
        <Skills />
        <Button />
      </div>  
    </div>
    )
}
export default Profile;