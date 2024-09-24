export async function getAllProduct() {
  const response=await fetch("books.json");
  const results=await response.json();
  console.log(results);
  return results; 
  
}

