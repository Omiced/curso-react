import { useState } from "react"

export const RemoveCategory = ({onRemoveCategory, category}) => {
  const [remove, setRemove] = useState("")
  const onClick = (e)=> {
    e.preventDefault();
    setRemove(e.target.name);
    onRemoveCategory(remove);
  }

  return (
    <button onClick={onClick} name={category} >Remove Category</button>
  )
}
