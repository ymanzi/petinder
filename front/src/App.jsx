import logo from './logo.svg';
import './App.css';
import {Header, Footer} from "./components";
import ProfileGallery from "./components/ProfileGallery";
import {SearchBar} from "./components/SearchBar";
import {useEffect, useState} from "react";
import getPets from "./services/PetService";

export default function App() {
    const [pets, setPets] = useState([]);

    const onChangeOfPets = (newPets) => {
      setPets(newPets);
    };

  return (
      <div>
          <Header />
        <div className="container-fluid">
            <SearchBar onPetsChange={onChangeOfPets} />

          <div className="row">
              <ProfileGallery pets={ pets}/>
          </div>

        </div>
          <Footer />
      </div>
  );
};
