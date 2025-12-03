function ApiComponent() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/posts/1`);

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Errore nel fetch:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <p>API URL: {baseUrl ? "Presente" : "Mancante"}</p>
    </div>
  );
}

export default ApiComponent;
