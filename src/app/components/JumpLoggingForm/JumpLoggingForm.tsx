const JumpLogginForm = () => {
  return (
    <form className="flex flex-row justify-between">
      <label htmlFor="dropzone">Dropzone</label>
      <br></br>
      <input
        type="text"
        id="dropzone"
        name="dropzone"
        required
        className="border-4 border-indigo-500"
      />
      <br></br>
      <label htmlFor="date">Date</label>
      <br></br>
      <input
        type="date"
        id="date"
        name="date"
        required
        className="border-4 border-indigo-500"
      />
      <br></br>
      <label htmlFor="notes">Notes</label>
      <br></br>
      <input
        type="textarea"
        id="notes"
        name="notes"
        required
        className="border-4 border-indigo-500"
      />
    </form>
  );
};

export default JumpLogginForm;
