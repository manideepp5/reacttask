function InputExample() {
  const [text, setText] = React.useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}
