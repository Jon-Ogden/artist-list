import { useContext } from "react";
import { DataContext } from "./providers/DataProvider";

const ArtistCard = ({id, name, born}) => {
    const data = useContext(DataContext);
    return(
        <div className="artist-card">
            <h3 className="card-text">{name}</h3>
            <p className="card-text">Born in {born}</p>
            <button onClick={() => data.deleteArtist(id)}>delete</button>
        </div>
    );
};
export default ArtistCard;