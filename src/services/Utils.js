const Utils = { 
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    parseRequestURL : () => {

        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/")
        let request = {
            resource    : null,
            id          : null,
            verb        : null
        }
        request.resource    = r[1]
        request.id          = r[2]
        request.verb        = r[3]

        return request
    }

    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    setSStrg: (sessionName, sessionValue) => {
        window.sessionStorage.setItem(sessionName, sessionValue);
    },
    getSStrg: (sessionName) => {
        return window.sessionStorage.getItem(sessionName);
    },
    setLStrg: (localName, localValue) => {
        window.localStorage.setItem(localName, localValue);
    },
    getLStrg: (localName) => {
        return window.localStorage.getItem(localName);
    },
    sanitizeInput : (string) =>{
        const map = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#x27;',
          '/': '&#x2F;',
        };
        const reg = /[&<>"'/]/ig;
        return string.replace(reg, (match) => (map[match])).trim();
      }
}

export default Utils;