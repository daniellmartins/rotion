import { Link } from 'react-router-dom'

export function BlackPage() {
  return (
    <div className="flex flex-1 justify-center items-center text-rotion-400">
      <h1>Selecione ou crie um documento</h1>

      <Link to="/document">Ir para documento</Link>
    </div>
  )
}
