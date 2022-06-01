import { useContext } from "react";
import { Container } from "semantic-ui-react";
import ArtistCard from "./ArtistCard";
import { DataContext } from "./providers/DataProvider";

export default function Artists() {
    const data = useContext(DataContext);
    const renderArtists = () => {
        return data.artists.map((c) => {
            return <ArtistCard key={c.id} {...c} />;
        });
    };
    return(
        <div className="page">
            <h1>Artists</h1>
            {renderArtists()}
            <hr />
        </div>
    )
}