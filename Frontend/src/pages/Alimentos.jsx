// Importaciones de pages/Alimentos.jsx
import TablaAlimentos from '../components/Alimentos_components/TablaAlimentos.jsx'
import FilterAlimentos from '../components/Alimentos_components/FilterAlimentos.jsx'
import NewAlimentoButton from '../components/Alimentos_components/newAlimentoButton.jsx'
import '../components/ButtonsToCreate.scss'

//* Página de Alimentos
const Alimentos = () => {
  return (
    <>
        <FilterAlimentos />
          <NewAlimentoButton />
          <TablaAlimentos />
    </>
  )
}

export default Alimentos;