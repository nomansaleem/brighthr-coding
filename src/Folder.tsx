import React, { useState } from "react";
import data from './data.json';

const Folder = () => {
    const [filteredData, setFilteredData] = useState(data);

    const handleFilter = (event: any) => {
        const value = event.target.value;
        const filtered = data.filter(d => d.name.includes(value));
        setFilteredData(filtered);
    };

    return (
        <div>
            <input type="text" onChange={handleFilter} placeholder="Search by name" className="ml-12"/>
            <ul className="flex m-auto text-center">
                {filteredData.map(file => {
                    return <button>
                        <div key={file.name} className="w-[200px] h-[55px] bg-gray-300 rounded-lg m-12">
                        <h1>{file.name}.{file.type}</h1>
                        {file.added && (
                            <span>Date: {file.added}</span>
                        )}
                    </div>
                    </button>
                })}
            </ul>
        </div>
    );
}

export default Folder;