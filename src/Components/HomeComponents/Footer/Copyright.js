import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright">
            <small>Designed & Build by <a href="mailto:redowanrafy707@gmail.com" style={{color:'rgb(26 210 14)'}}>Redowan Aktar Rafy </a></small> <br />
            <small>{(new Date()).getFullYear()} &copy; copyright | Redowan </small> <br />
         </div>
    );
};

export default Copyright;