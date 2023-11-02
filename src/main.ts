import './style.css'

const fetchMobs = async () => {
  const data = await fetch('https://mobster-backend-production-094a.up.railway.app/')
  const json = await data.json()
  console.log(json)
}

fetchMobs()
