function ToggleText() {
  const [visible, setVisible] = React.useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <p>Hello, World!</p>}
    </div>
  );
}
