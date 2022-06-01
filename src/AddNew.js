import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DataContext } from "./providers/DataProvider"

export default function AddNew() {
    let navigate = useNavigate();
    const data = useContext(DataContext);
    let [name, setName] = useState("");
    let [year, setYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let newArtist = {id: Math.random(), name, born:year};
        data.addArtist(newArtist)

        navigate("/Artists");
    };

    return(
        <div className="page">
            <h1>Add New Artist</h1>
            <form onSubmit={handleSubmit}>
                <p>Name of Artist</p>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p>Year Born</p>
                <input value={year} onChange={(e) => setYear(e.target.value)} />
                <button>add</button>
            </form>
        </div>
    )
}