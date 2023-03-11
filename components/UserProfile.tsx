interface UserProps {
    image: any,
    username: any,
    className: string,
    dropdown: any
}
const UserProfile = ({image, username, className, dropdown}: UserProps) => {
    return(
        <div className="flex items-center">
            <img src={image} className={`${className}sm: w-10 h-10`}/>
            <p className="text-base hidden sm:block">{username}</p>
            <button
                onClick={() => alert('Menu: Account, Profile, Get Premium, Settings, Logout')}
                className=""
            >{dropdown}</button>
        </div>
    )
}
export default UserProfile;