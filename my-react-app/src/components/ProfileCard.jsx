
function ProfileCard({name, email, role, image, skills}){
    return(
        <div className="profile-card">
            <img src={image} alt={name} className="profile-image" />
            <h2>{name}</h2>
            <h3>{role}</h3>
            <p className="email">{email}</p>
            <div className="skills">
                {
                    skills.map((skill, index)=>(
                        <span key={index} className="skill">{skill}</span>
                    ))
                } 
                </div>
                <button className="profile-button">View Profile</button>
        </div>
    )
}

export default ProfileCard;