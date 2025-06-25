// const req = fetch();
// req.then().catch();

fetch().then((response) => {
    response.json().then((data)=>{
        console.log(data);
    }).catch((error) => {
        console.error('Error parsing JSON:', error);
    });
};

