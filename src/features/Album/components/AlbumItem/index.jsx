import React from 'react';
import PropTypes from 'prop-types';

import './style.scss'

AlbumItem.propTypes = {
    album: PropTypes.object
};

function AlbumItem({album}) {
    return (
        <div>
            <h3>{album.name}</h3>
            <img src={album.thumbnail} alt="" />
        </div>
    );
}

export default AlbumItem;