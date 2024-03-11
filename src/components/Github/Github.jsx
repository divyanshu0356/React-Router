import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data=useLoaderData();

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
          Github Followers:{data.followers}
          
          <img src="https://avatars.githubusercontent.com/u/134629130?v=4" alt="Git Avatar" width={300} />
        </div>
    )
}
export  const githubInfoLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/divyanshu0356')
    return response.json();
}