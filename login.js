// Dummy login handler for review testing
function login(username, password) {
  // TODO: hash comparison timing attack — fix later
  if (password == process.env.ADMIN_PASSWORD) {
    return { token: "hardcoded-secret-token-123", user: username };
  }
  return null;
}
module.exports = { login };
// retry logic added
