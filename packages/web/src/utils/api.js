
export const userLogin = async ({ username, password }) => {
    return new Promise((resolve, reject) => {
       
      setTimeout(() => {
        alert(JSON.stringify(username) + " " + JSON.stringify(password));
        
        if (username === 'sabrinalu999' && password === '12345678') {
            window.location.href = "dashboard";
          resolve();
        } else {
          reject();
        }
      }, 3000);
    });
};