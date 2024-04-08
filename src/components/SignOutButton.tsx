import { IoLogOut } from "react-icons/io5"

export const SignOut = () => {
    return (
        <button className="fixed top-0 right-0 m-6 p-4 bg-purple-100 bg-grey-light hover:bg-grey text-black font-bold py-2 px-4 rounded inline-flex items-center">
        <div className="text-xl mr-2">
            <IoLogOut/>
        </div>
            <span>Log Out</span>
        </button>
    )
}