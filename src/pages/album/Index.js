import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { api } from '../../utils/api'

import Navbar from '../../components/client/navbar/Index'
import AlbumList from '../../components/client/album-list/Index'
import FooterComponent from '../../components/client/footer/Index'

const Index = () => {
    const [isLoading, setLoading] = useState(true)
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        // Fetch Albums
        const fetchAlbums = async () => {
            try {
                const response = await axios.get(`${api}list?page=3&limit=42`)
                if (response.status === 200) {
                    setAlbums(response.data)
                    setLoading(false)
                }
            } catch (error) {
                if (error) console.log(error.response)
            }
        }
        fetchAlbums()
    }, [])

    return (
        <div className="index">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 p-2">
                        <AlbumList albums={albums} loading={isLoading} loaderitem={18} />
                    </div>
                </div>
            </div>

            {/* Footer component */}
            <FooterComponent />
        </div>
    );
};

export default Index;