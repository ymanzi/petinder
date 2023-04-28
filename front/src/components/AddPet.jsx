import {useState} from "react";
import {addPet} from "../services/PetService";

export default function AddPet({onAddPet}) {
    const [formValue, setFormValue] = useState({
        "name": "",
        "kind": "",
        "image": "",
        "profileText": ""
    })

    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value});
    }

    const submitHandler = () => {
        addPet(formValue);
        onAddPet(formValue.name);
        setFormValue({
            "name": "",
            "kind": "",
            "image": "",
            "profileText": ""
        });
    }

    return (<>
        <section className="tiny-dialog fader" id="petProfile">
            <div className="form-group">
                <h3>Add your pet</h3>
                <form name="addPetForm"  id = "addPetForm" onSubmit={submitHandler}>
                    <label>
                        Name:
                        <input className="form-control" name="name" type="text" value={formValue.name} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Kind:
                        <input className="form-control" name="kind" type="text" value={formValue.kind} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Picture:
                        <input className="form-control" name="image" type="text" value={formValue.image} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Profile Text:
                        <input className="form-control" name="profileText" type="text" value={formValue.profileText} onChange={handleChange} />
                    </label>
                    <br />
                </form>
                <button onClick={submitHandler}
                    className="btn btn-primary pull-right"
                >
                    Create Pet
                </button>
            </div>
        </section>
    </>);
};