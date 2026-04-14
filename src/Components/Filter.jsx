function Filter({ setVille, setPrix }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Ville"
        onChange={(e) => setVille(e.target.value)}
      />

      <input
        type="number"
        placeholder="Prix max"
        onChange={(e) => setPrix(e.target.value)}
      />
    </div>
  );
}

export default Filter;