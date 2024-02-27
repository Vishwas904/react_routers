import { useEffect, useState } from "react"

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Vishwas904')
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data);
            })
    }, [])
    return (
        <>
            <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
                Followers: {data.followers}
            </div>
        </>
    )
}

export default Github
