'use strict';

var color1 = '#fff';
var color2 = '#0cf';

var delta = 0.12;
var delta1 = 0.08;
var delta2 = 0.041;
var delta3 = 0.66;

var width, height, width1, height1, height2;

var block = document.querySelector( '.block' );
var blockTop = document.querySelector( '.block__top' );
var blockBottom = document.querySelector( '.block__bottom' );
var blockImageTop = document.querySelector( '.block-image-top' );
var blockImageBottom = document.querySelector('.block-image-bottom');

var triangleTop = document.querySelector( '#triangleTop' );
var triangleTopCtx = triangleTop.getContext( '2d' );

var triangleBottom = document.querySelector( '#triangleBottom' );
var triangleBottomCtx = triangleBottom.getContext( '2d' );

triangleTopCtx.lineWidth = 1;
triangleBottomCtx.lineWidth = 1;


// STYLING ELEMENTS
// -------------------------------------------------

function stylingElements() {
    width = Math.floor( window.innerWidth );
    height = Math.floor( width * delta );
    width1 = Math.floor( width * delta3 );
    height1 = Math.floor( width * delta1 );
    height2 = Math.floor( width * delta2 );

    blockTop.style.height = height + 'px';
    blockBottom.style.height = height + 'px';
    block.style.paddingTop = height + 'px';
    block.style.paddingBottom = height + 'px';

    triangleTop.width = width;
    triangleBottom.width = width;

    triangleTop.height = height;
    triangleBottom.height = height;
}

// DRAW TRIANGLE TOP
// -------------------------------------------------

function drawTriangleTop() {
    triangleTopCtx.strokeStyle = color1;
    triangleTopCtx.fillStyle = color1;
    triangleTopCtx.beginPath();
    triangleTopCtx.moveTo( 0, 0 );
    triangleTopCtx.lineTo( width, 0 );
    triangleTopCtx.lineTo( 0, height );
    triangleTopCtx.stroke();
    triangleTopCtx.fill();
    triangleTopCtx.closePath();
}

// DRAW TRIANGLE BOTTOM
// -------------------------------------------------

function drawTriangleBottom() {
    triangleBottomCtx.strokeStyle = color1;
    triangleBottomCtx.fillStyle = color1;
    triangleBottomCtx.beginPath();
    triangleBottomCtx.moveTo( width, 0 );
    triangleBottomCtx.lineTo( width, height );
    triangleBottomCtx.lineTo( 0, height );
    triangleBottomCtx.stroke();
    triangleBottomCtx.fill();
    triangleBottomCtx.closePath();

    triangleBottomCtx.beginPath();
    triangleBottomCtx.strokeStyle = color2;
    triangleBottomCtx.fillStyle = color2;
    triangleBottomCtx.moveTo( width, 0 );
    triangleBottomCtx.lineTo( width, height1 );
    triangleBottomCtx.lineTo( width1, height2 );
    triangleBottomCtx.stroke();
    triangleBottomCtx.fill();
    triangleBottomCtx.closePath();
}

// CONVERT CANVAS TO IMAGE
// ------------------------------------------------

function canvasToImage() {
    blockImageTop.src = triangleTopCtx.canvas.toDataURL();
    blockImageBottom.src = triangleBottomCtx.canvas.toDataURL();
}

window.addEventListener( 'DOMContentLoaded', function () {
    stylingElements();
    drawTriangleTop();
    drawTriangleBottom();
    canvasToImage();
}, false );

window.addEventListener( 'resize', function () {
    stylingElements();
    drawTriangleTop();
    drawTriangleBottom();
    canvasToImage();
}, false );

















