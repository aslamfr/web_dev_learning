fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("Resolved", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("Error", e);
  });

// const loadPeopleData = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/2/");
//     const data2 = await res2.json();
//     console.log(data2)
//   } catch (e) {
//     console.log("Error",e)
//   }
  
// }

// loadPeopleData();

const loadPeopleData2 = async (num) => {
  try {
    const req = await fetch(`https://swapi.dev/api/people/${num}/`);
    console.log("Resolved", req)
    const data = await req.json();
    console.log(data);
  } catch (e) {
    console.log("Error", e);
  }
}

loadPeopleData2(10);