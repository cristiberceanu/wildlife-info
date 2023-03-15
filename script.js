async function fetchData() {
  const taxonId = document.getElementById('taxonId').value;
  const apiUrl = `https://eol.org/api/pages/1.0.json?id=${taxonId}&images=2&texts=2&videos=0&details=true&format=json`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    document.getElementById('speciesName').textContent = data.scientificName;
    document.getElementById('speciesImage').src = data.dataObjects[0].eolMediaURL;
    document.getElementById('speciesDescription').textContent = data.dataObjects[1].description;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
