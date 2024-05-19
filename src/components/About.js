import react, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'


export default function About() {
  const a = useContext(noteContext)
  useEffect(()=>{
    a.update()
  },[]
  )
  return (
    <div>
      This is about {a.state.name} and he is in class {a.state.class}
    </div>
  )
}