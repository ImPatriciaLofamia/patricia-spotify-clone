interface UserProps {
    src: string,
    username: string,
    className: string,
    dropdown: any
}
const UserProfile = ({src, username, className, dropdown}: UserProps) => {
    return(
        <div className="flex items-center">
            <img 
                className={`${className} sm: w-10 h-10`}
                src={src}
            />
            <p className="text-base hidden sm:block">{username}</p>
            <button
                onClick={() => alert('Menu: Account, Profile, Get Premium, Settings, Logout')}
                className=""
            >{dropdown}</button>
        </div>
    )
}
export default UserProfile;