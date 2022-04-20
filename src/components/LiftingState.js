const { useState } = require("react");

const UserProfile = () => {
    const [user, setUser] = useState({
      username: "",
      password: "",
      avatarUrl:
        "https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg"
    });
  
    const handleFormChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log(user);
    };
  
    return (
      <div>
        <h1>My Profile</h1>
        <div>
          <img alt="avatar" src={user.avatarUrl} style={{ width: "100px" }} />
        </div>
        <form onSubmit={handleFormSubmit}>
          <ul>
            <li>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                value={user.username}
                onChange={handleFormChange}
                required
              />
            </li>
            
            <li>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleFormChange}
                required
              />
            </li>
          </ul>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export { UserProfile };
  