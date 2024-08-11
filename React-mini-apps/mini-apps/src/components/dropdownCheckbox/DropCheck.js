import React, {useState, useEffect} from 'react'

 const DropCheck = () => {


    const countries = ['India', 'Aus', 'USA'];

    const [isChecked, setIsChecked] = useState(false);

    const [country1, setCountry1] = useState('');

    const [country2, setCountry2] = useState('');

    const handleChange = (e) => {
        if(e.target.name === "first") {
            setCountry1(e.target.value);
        } else {
            setCountry2(e.target.value);
        }
    };

    useEffect(()=> {
        if(country1 === country2) {
            setIsChecked(true);
        } else {
            setIsChecked(false)
        }
    }, [country1, country2])

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems : "center"}}>
        <p>DropCheck</p>

        <div style={{display: "flex", marginTop: "10px"}}>
            <select value={country1} onChange={handleChange} name="first"
            style={{display: "flex", margin: "10px", cursor: "pointer"}}>
                {countries.map((ele) => {
                    return <option value={ele}>{ele}</option>
                })}
            </select>

            <select value={country2} onChange={handleChange} name="second"
            style={{display: "flex", margin: "10px", cursor: "pointer"}}>
                {countries.map((ele) => {
                    return <option value={ele}>{ele}</option>
                })}
            </select>
        </div>

        <input type="checkbox" checked={isChecked} readOnly/>
    </div>


  )
}

export default DropCheck;
