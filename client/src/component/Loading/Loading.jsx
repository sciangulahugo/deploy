import React from 'react';
import image from '../../image/dogLoading.gif';
import './Loading.css';

export default function Loading() {
    return (
        <div className="loading">
            <img src={image} alt="" />
        </div>
    );
}
