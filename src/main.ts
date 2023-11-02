import './style.css';

const fetchMobs = async () => {
  try {
    const data = await fetch(
      'https://mobster-backend-production-094a.up.railway.app/',
    );
    console.log(data);
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.log("dsfsdgdsgfggg");
    console.log(error);
  }
  
};

fetchMobs();
