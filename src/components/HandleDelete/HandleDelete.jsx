export function HandleDelete(ID, data, setData, type) {
  const index = data.findIndex((item) => item.id === ID);

  if (index !== -1) {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
  } else {
    console.log(`${type} with ID ${ID} not found.`);
  }
}
