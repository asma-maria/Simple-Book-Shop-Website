export async function getAllProduct() {
  const response=await fetch("Book.json");
  const results=await response.json();
  console.log(results);
  return results; 
  
}

