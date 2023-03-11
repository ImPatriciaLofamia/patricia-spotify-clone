interface UserProps {
    image: any,
    userName: any,
    className: string,
    dropdown: any
}
const UserProfile = ({image, userName, className, dropdown}: UserProps) => {
    return(
        <div className="flex items-center">
            <img src={image} className={`${className}sm: w-10 h-10`}/>
            <p className="text-base hidden sm:block">{userName}</p>
            <button
                onClick={() => {}}
                className=""
            >{dropdown}</button>
        </div>
    )
}
export default UserProfile;