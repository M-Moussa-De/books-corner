class Login {
  constructor(username, pwd) {
    this.username = username;
    this.pwd = pwd;
  }

  getUserInput(id) {
    let val = document.getElementById(id).value;

    val = this.escapeHtml(val);

    return val;
  }

  escapeHtml(text) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return text.replace(/[&<>"']/g, function (m) {
      return map[m];
    });
  }
}
