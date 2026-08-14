import ProfileCard from "../components/ProfileCard";
import profiles from "../data/profiles";

 

function ProfilePage() {
  return (
    <div className="profile-page">

      <h1>Our Teams</h1>

      <div className="profiles-container">

        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            email={profile.email}
            role={profile.role}
            image={profile.image}
            skills={profile.skills}
          />
        ))}

      </div>

    </div>
  );
}

export default ProfilePage;