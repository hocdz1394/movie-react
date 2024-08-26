import { useState } from "react"

function header({onSearch}) {
  const [search, setSearch] = useState('');
  
  return (
    <div className="p-4 flex justify-between">
      <div className="flex items-center gap-8">
        <h1
          className="uppercase text-[30px] font-bold text-red-700"
        >movie</h1>
        <nav>
          <ul className="flex gap-5">
            <li className="hover:text-red-700">Home</li>
            <li className="hover:text-red-700" >About</li>
            <li className="hover:text-red-700" >Contact</li>
          </ul>
        </nav>
      </div>
      <div className="">
        <input type="text" className="text-black rounded-l-md px-2 py-3" placeholder="Search" value={ search }
          onChange={(e) => setSearch(e.target.value) } />
        <button onClick={() => onSearch(search)} className="rounded-sm px-2 py-3 bg-red-700 rounded-r-md">Search</button>
      </div>
    </div>
  )
}

export default header