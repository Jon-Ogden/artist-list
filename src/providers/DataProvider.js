import React, { useState } from 'react';

export const DataContext = React.createContext();
export const DataConsumer = DataContext.Consumer;

const initialArtists = [
    {id:0, name:"Vincent Van Goh", born:1853},
    {id:1, name:"Leonardo Da Vinci", born:1452},
    {id:2, name:"Michelangelo", born:1475}
];

const DataProvider = (props) => {
    const [artists, setArtists] = useState(initialArtists);

    const addArtist = (artist) => {
        setArtists([artist, ...artists]);
    };
    const deleteArtist = (id) => {
        setArtists(artists.filter((c) => c.id !== id));
    };

    return (
        <>
        <DataContext.Provider
            value={{ artists, addArtist, deleteArtist, x: 1}}
        >
            {props.children}
        </DataContext.Provider>
        </>
    );
};

export default DataProvider;