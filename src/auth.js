const isAuthenticated = () => {
    return sessionStorage.getItem('token') ?  true :  false;
};

export default isAuthenticated;