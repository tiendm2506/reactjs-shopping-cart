import React from 'react';
import PropTypes from 'prop-types';

import './style.scss'
import AlbumItem from '../AlbumItem';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired
};

function AlbumList(props) {
    const { albumList } = props
    return (
        <ul className='alnum-list'>
            {
                albumList.map(album => (
                    <li key={album.id}><AlbumItem album={album} /></li>
                ))
            }
        </ul>
    );
}

export default AlbumList;