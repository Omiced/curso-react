import { useState } from "react";
import {AddCategory, GiftGrid} from "./components";
import { RemoveCategory } from "./components/RemoveCategory";
export const GiftExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
    
  }

  const onRemoveCategory =(removeCategory)=> {
    if(!removeCategory)return;
    const categoriesNew = categories.filter(categorie => categorie !== removeCategory);
    setCategories(categoriesNew);
  }

  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory onNewCategory={onAddCategory}/>
      {categories.map(category => {
        return( 
        <>
         <GiftGrid key={category} category={category}/>   
         <RemoveCategory category={category}  key={category + "button"} onRemoveCategory={onRemoveCategory} />
        </>
      )
      })
      }
    </>
  );
};
