import { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getDogsData() {
      const response = await fetch("https://dogapi.dog/api/v2/breeds");
      const json = await response.json();
      setData(json.data);
    }

    getDogsData();
  }, []);

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item.attributes.name}</li>
      ))}
    </ul>
  );
}

export default FetchData;