export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      TEST
      <input type="text" name="name" required />
      <input type="tel" name="number" required />
    </div>
  );
};
