import { useParams } from "react-router-dom"
const User = () => {
    const { userid } = useParams()
    return (
        <>
            <div className="flex justify-center text-5xl items-center h-[80vh] w-full">
                Hello {userid}
            </div>
        </>
    )
}

export default User
