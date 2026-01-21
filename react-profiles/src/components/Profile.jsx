function Profile({ nombre, role }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{nombre}</h3>
      <p>Rol: {role}</p>
    </div>
  );
}

export default Profile;
