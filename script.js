async function fetchData() {
  const taxonId = document.getElementById('taxonId').value;
  const apiUrl = `https://eol.org/api/pages/1.0.json?id=${taxonId}&images=2&texts=2&videos=0&details=true&format=json`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    document.getElementById('speciesName').textContent = data.scientificName;

    const imageObject = data.dataObjects.find(obj => obj.dataType === 'http://purl.org/dc/dcmitype/StillImage');
    if (imageObject) {
      document.getElementById('speciesImage').src = imageObject.eolMediaURL;
    } else {
      document.getElementById('speciesImage').src = '';
    }

    const textObject = data.dataObjects.find(obj => obj.dataType === 'http://purl.org/dc/dcmitype/Text');
    if (textObject) {
      document.getElementById('speciesDescription').textContent = textObject.description;
    } else {
      document.getElementById('speciesDescription').textContent = 'No description available.';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
