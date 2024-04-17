import { useState } from 'react';
import gitLogo from '../assets/github.png'
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [respos, setRepos] = useState([])

  const handleSearchRepo = async () => {

    try {

      const { data } = await api.get(`repos/${currentRepo}`)

      if (data.id) {

        const isExist = respos.find(repo => repo.id === data.id)

        if (!isExist){
          setRepos(prev => [...prev, data]);
          setCurrentRepo("")
        }
        return

      }

    } catch (error) {

      alert("ERRO: Usuário ou repositório não encontrados")
    }

  }

  const handleRemoveRepo = (id) => {

    const updatedRepos = respos.filter(repo => repo.id !== id);
    const existe = respos.find(repo => repo.id === id)
    if (existe) {
        
      setRepos(updatedRepos)
      }
  }



  return (
    <div className="App">
      <Container>
        <img src={gitLogo} width={72} height={72} alt='GitLogo'></img>
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}></Input>
        <Button onClick={handleSearchRepo}></Button>
        {respos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}></ItemRepo>)}

      </Container>
    </div>
  );
}

export default App;
