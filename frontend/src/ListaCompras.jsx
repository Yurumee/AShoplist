import { useEffect, useState } from "react"

function ListaCompras() {
    
    const [listaItens, setListaItens] = useState([])

    const [nomeProduto, setNomeProduto] = useState()
    const [quantidadeProduto, setQuantidadeProduto] = useState()
    const [precoProduto, setPrecoProduto] = useState()


    // async function getItens() {
    //         const URL = 'http://localhost:3030/lista'
    //         const res = await fetch(URL, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const data = await res.json()
    //         console.log(data)
    //         setListaItens(data)

    //         await getItens()
    //     }
        
    useEffect(() => {
        async function getItens() {
            const URL = 'http://localhost:3030/lista'
            const res = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const data = await res.json()
            setListaItens(data)
        }

        getItens()
    }, [])

    async function submit() {

        const URL = 'http://localhost:3030/lista/add'
        const res = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nomeProd: nomeProduto,
                quantidade: parseInt(quantidadeProduto),
                preco: parseFloat(precoProduto)
            })
        })
        const data = await res.json()
        // setListaItens(data)
        console.log(data)
    }

    return <>
                <h1>LISTA DE COMPRAS</h1>
                
                <form onSubmit={submit}>
                    <input type="text" placeholder="nome do item" onChange={(event) => setNomeProduto(event.target.value)}/>
                    <br />
                    <input type="number" min={0} placeholder="quantidade" onChange={(event) => setQuantidadeProduto(event.target.value)}/>
                    <br />
                    <input type="number" step={0.01} min={0} placeholder="preço" onChange={(event) => setPrecoProduto(event.target.value)}/>
                    <br />
                    <button type="submit"> Adicionar Produto </button>
                </form>

                <br />

                <table>
                    <tbody>
                        {
                            listaItens.map(item => (
                                <>
                                    <tr>
                                        <td> {item.nomeProd} </td>
                                        <td> {item.quantidade} </td>
                                        <td> {item.preco} </td>
                                        <td> {item.preco * item.quantidade} </td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>

                </table>
           </>
}

export default ListaCompras