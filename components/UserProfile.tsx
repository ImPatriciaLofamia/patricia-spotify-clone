interface UserProps {
    image: any,
    userName: any,
    className: string,
    dropdown: any
}
const UserProfile = ({image, userName, className, dropdown}: UserProps) => {
    return(
        <div className="flex items-center space-x-2">
            <img src={image} className={`${className}sm: w-10 h-10`}/>
            <p className="text-base hidden sm:block">{userName}</p>
            <button
                onClick={() => {}}
                className="hover:scale-125"
            >{dropdown}</button>
        </div>
    )
}
export default UserProfile;