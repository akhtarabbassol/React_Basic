// import Counter from '../src/components/Counter';

// function App(){
//   return (
//     <div>
//       <h1>Welcome to the Counter App </h1>
//       <Counter />
//       <Counter title="count 1" />
//       <Counter title="count 2" />
//       <Counter title="count 3" />
//     </div>
//   )
// }

// export default App;


import ProfileCard from './components/ProfileCard';
import profiles from './data/profiles';

function App(){
  return(
    <div className="app">
      <h1>ours Teams</h1>
      {
        profiles.map((profile)=>(
          <ProfileCard 
            key={profile.id}
            name={profile.name}
            email={profile.email}
            role={profile.role}
            image={profile.image}
            skills={profile.skills}
          />
        ))
      }
    </div>
  )
}

export default App;