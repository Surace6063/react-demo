import UserAddress from "./UserAddress"

const UserProfile = ({id,name,age,country}) => {

    return(
       <div className="border border-slate-300 shadow rounded-md mt-6 mb-4 p-4 w-80">
         <p>ID: {id}</p>
         <p>Name: {name}</p>
         <p>age: {age}</p>
         
         <UserAddress country={country} />
       </div>
    )
}

export default UserProfile