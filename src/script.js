let button = document.querySelector("#btn")


const cliqueBtn = () => {
    let btnWhats = document.querySelector("#endereco").value;
    
    window.location.replace(btnWhats)
}


button.addEventListener('click', cliqueBtn)