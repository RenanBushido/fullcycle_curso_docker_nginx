const url = 'http://localhost:3000/'

const ObterLoadingElement = document.querySelector("#Obterloading")
const listaElement = document.querySelector("#lista")
const cadNomeElement = document.querySelector("#cadNome")

async function obterTodosNomes() {
    await fetch(url + 'listar')
        .then(async (resp) => {

            ObterLoadingElement.classList.add("hide")

            if (!resp) {
                listaElement.remove();
                const linha = document.createElement("tr");
                const coluna = document.createElement("td");
                listaElement.appendChild(linha);
                listaElement.appendChild(coluna);
                coluna.innerText = 'Ocorreu um erro ao chamar a API';
            }

            if (resp.ok) {

                await resp.json().then((data) => {

                    if(data) {
                        while(listaElement.lastElementChild) {
                            listaElement.removeChild(listaElement.lastElementChild);
                        };
                    }

                    data.map((n) => {
                        showData(n);
                    });
                });
            }
        });
}

async function cadastrarNome() {

    ObterLoadingElement.classList.add("hide");

    let cadNome = {
        nome: cadNomeElement.value
    }

    const _cadNome = JSON.stringify(cadNome);

    const responseCadastrar = await fetch(url, {
        method: 'POST',
        body: _cadNome,
        headers: {
            "Content-Type": "application/json",
        },
    })

    if(responseCadastrar) {
        await obterTodosNomes().then(() => {
            cadNomeElement.value = '';
            cadNomeElement.focus();
        });
    }
}

function showData(data) {
    const linha = document.createElement("tr");
    const coluna = document.createElement("td");

    const { nome } = data

    listaElement.appendChild(linha);
    listaElement.appendChild(coluna);
    coluna.innerText = nome;
}