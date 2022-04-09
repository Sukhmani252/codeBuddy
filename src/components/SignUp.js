export default function SignUp() {
  return (
    <form>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          @example.com
        </span>
      </div>
      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </form>
  );
}
