import {useState, useEffect} from "react"

function Repositorios (){

    const [repositorios, setListas] = useState([])
    const [busca, setBusca] = useState([])
    const [filtro, setFiltro] = useState('')
    
    

    useEffect(()=>{
    fetch("https://api.github.com/users/carinee/repos")
    .then(resposta=>resposta.json())
    .then(dados=> setListas(dados.results))
    },[])


    /*useEffect(()=> {
        setFiltro(
            repositorios.filter(nomes =>  {
            return nomes.name.includes(busca)
        })
        )
    }, [repositorios, busca])*/

    return(
    
        <div>
        <input 
            placeholder="Digite o que está buscando" 
            onChange={e => {setBusca(e.target.value)}}
        />
        
        </div>
    )
    }

export default Repositorios


/*{filtro.map(repositorios => 
    <div key={repositorios.}>
    <h2>{repositorios.name}</h2>
    </div>
)}*/