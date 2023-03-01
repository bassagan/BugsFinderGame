import { useState } from 'react';

const DoctorForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, specialty });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Specialty:
                <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default DoctorForm;
