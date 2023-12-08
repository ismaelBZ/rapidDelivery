console.log("iniciou");

const getPilotInfo = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = response.json();
    return data;
  } catch(e) {
    console.log(e);
  }
}

const pilotInfo = async() => {
  const data = await getPilotInfo();
  const pilot = data.results[0];
  console.log(pilot); 
  document.querySelector(".pilot-name").innerHTML = `${pilot.name.first} ${pilot.name.last}`;
  document.querySelector(".pilot-photo").src = pilot.picture.medium;
}

pilotInfo();

// const pilot = {
//   name: getPilotInfo().then((result) => result.name.first),
//   photo: getPilotInfo().then((result) => result.photo)
// }

// console.log(pilot.name);