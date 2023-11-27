import React from 'react'
import AlbumList from './components/AlbumList'

const AlbumFeature = (props) => {
    const albumList = [
        { id: 1, name: 'Gác Lại Âu Lo', thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/e/8/83e83c4a068f0b994a99735e440b76df.jpg' },
        { id: 2, name: 'Nhạc quẩy quốc dân, lâng lâng', thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/f/3/1/8f31a4ab282b3293da2604ba7374c25c.jpg' },
        { id: 3, name: 'Nhạc gì mà nghe xong dính cứng', thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/1/8/b/e18bdc910198a0bb3c9b29da4848c13a.jpg' },
        { id: 4, name: 'Công chúa, hoàng tử Teen Pop', thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/e/1/c/8e1c286a0626d6d240e641baccb6ab7c.jpg' },
    ]
    return (
        <div>
            <AlbumList albumList={albumList} />
        </div>
    )
}

AlbumFeature.propTypes = {}

export default AlbumFeature
