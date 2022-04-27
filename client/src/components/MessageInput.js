function MessageInput({ onSend }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSend(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <div className="box">
      <div className="control">
        <input className="input" type="text" placeholder="Say something..."
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default MessageInput;
