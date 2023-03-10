import mainstyles from '../styles/mainstyles.module.css';
import { useEffect, useState } from 'react';

export default function StarGenerator({ number, class_, n, name }) {
    useEffect(() => {
        let canvas = document.getElementById(name);

        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        canvas.style.width = canvas.width;
        canvas.style.height = canvas.height;
        let ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;

        let canvasWidth = canvas.width;
        let canvasHeight = canvas.height;
        let rad = 0;
        let x = 0;
        let y = 0;
        let opacity = 1;

        for (let i = Math.random() * 2000 + number; i > 0; i -= 1) {
            rad = (Math.random() / 400) * canvasHeight;
            opacity = Math.random() * n;
            x = Math.random() * canvasWidth;
            y = Math.random() * Math.random() * canvasHeight;
            ctx.fillStyle = `rgb(255,255,255,${opacity})`;
            ctx.fillRect(x, y, rad, rad);
        }
    }, []);

    return (
        <div className={class_}>
            <canvas id={name} width="100" height="100"></canvas>
        </div>
    );
}
