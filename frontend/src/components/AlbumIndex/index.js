import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbums, createAlbum } from "../../store/album";
import { fetchAllTracks } from "../../store/track";
import "./AlbumIndex.css";
import AlbumCard from "./AlbumCard";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AlbumIndex(props) {
  const [newAlbumModal, setNewAlbumModal] = useState(false);
  const listOfTracks = useSelector((store) => store?.tracks?.all);
  let dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((store) => store.session.user);
  const albums = useSelector((store) => store?.albums?.albums || {});

  // ⁡⁢⁣⁣==================== new album form fields =================================⁡
    const [newAlbumTitle, setNewAlbumTitle] = useState();
    const [newAlbumDescription, setNewAlbumDescription] = useState();
    const [newAlbumImage, setNewAlbumImage] = useState();
    const [selectedTracks, setSelectedTracks] = useState([]);
    useEffect(() => {
        dispatch(fetchAlbums());
    }, [dispatch]);

    // useEffect(() => {
    //     console.log("Selected Tracks:", selectedTracks);
    // }, [selectedTracks]);

  const renderedAlbumCard = Object.values(albums).map((a) => (
    <AlbumCard
      id={a.id}
      title={a.title}
      description={a.description}
      image={a.imageUrl}
      uploaderUsername={a.uploaderUsername}
    />
  ));

  function handleNewAlbum() {
    setNewAlbumModal(true);
    dispatch(fetchAllTracks());
  }

  const renderedNewAlbumModal = () => {
    return (
      <div id="new-album-modal">
        {/* title, imageUrl, uploaderId, description */}
        <div className="x" onClick={() => setNewAlbumModal(false)}>
          X
        </div>
        <form onSubmit={(e) => handleCreateNewAlbum(e)}>
          <input
            type="text"
            onChange={(e) => setNewAlbumTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            onChange={(e) => setNewAlbumDescription(e.target.value)}
            placeholder="Description"
          />
          <input
            type="text"
            onChange={(e) => setNewAlbumImage(e.target.value)}
            placeholder="Image Url (optional)"
          />
          <input type="submit" />
        </form>
        
        <select
            name="selectedTracks"
            multiple
            value={selectedTracks}
            onChange={(e) => {
                // console.log(e.target.selectedOptions)
                // let insertedTrack = {
                //     title: e.target.title
                // }
                let tracksArray = Array.from(e.target.selectedOptions, (option) => ({
                    title: option.dataset.title, 
                    url: option.dataset.url,
                    albumId: option.dataset.album,
                    uploaderId: option.dataset.uploader
                }))
                setSelectedTracks([...selectedTracks, ...tracksArray])
                console.log(selectedTracks)
            }
            }   
        >

        {listOfTracks?.map((track) => (
            <option 
                key={track.id} 
                value={track.id}
                data-title={track.title}
                data-url={track.url}
                data-album={track.albumId}
                data-uploader={currentUser.id}
            >
                {track.title}
            </option>
        ))}
        </select>
      </div>
    );
  };

  function handleCreateNewAlbum(e) {
    e.preventDefault();
    console.log(selectedTracks)
    const newAlbumObj = {
        title: newAlbumTitle,
        uploaderId: currentUser.id,
        description: newAlbumDescription,
        imageUrl: newAlbumImage,
        tracksAttributes: selectedTracks
    };
    // console.log(newAlbumObj)
    dispatch(createAlbum(newAlbumObj));
    setNewAlbumModal(false);
    history.push("/home");
  }

  return (
    <div id="index-div">
      {newAlbumModal && renderedNewAlbumModal()}

      <div className="new-album" onClick={() => handleNewAlbum()}>
        <LibraryAddIcon />
        <h3>Add an album</h3>
      </div>
      {renderedAlbumCard}
    </div>
  );
}
