'use strict';

var color1 = '#fff';
var color2 = '#0cf';

var delta = 0.12;
var delta1 = 0.08;
var delta2 = 0.041;
var delta3 = 0.66;

var width = Math.floor( window.innerWidth );
var height = Math.floor( width * delta );
var width1 = Math.floor( width * delta3 );
var height1 = Math.floor( width * delta1 );
var height2 = Math.floor( width * delta2 );

var block = document.querySelector( '.block' );
var blockTop = document.querySelector( '.block__top' );
var blockBottom = document.querySelector( '.block__bottom' );
var blockImageTop = document.querySelector( '.block-image-top' );
var blockImageBottom = document.querySelector('.block-image-bottom');

var triangleTop = document.querySelector( '#triangleTop' );
var triangleTopCtx = triangleTop.getContext( '2d' );

var triangleBottom = document.querySelector( '#triangleBottom' );
var triangleBottomCtx = triangleBottom.getContext( '2d' );

window.addEventListener( 'DOMContentLoaded', function () {

    blockTop.style.height = height + 'px';
    blockBottom.style.height = height + 'px';
    block.style.paddingTop = height + 'px';
    block.style.paddingBottom = height + 'px';

    triangleTopCtx.lineWidth = 1;
    triangleBottomCtx.lineWidth = 1;

    triangleTop.width = width;
    triangleBottom.width = width;

    triangleTop.height = height;
    triangleBottom.height = height;


    // TRIANGLE TOP
    // -------------------------------------------------

    triangleTopCtx.strokeStyle = color1;
    triangleTopCtx.fillStyle = color1;
    triangleTopCtx.beginPath();
    triangleTopCtx.moveTo( 0, 0 );
    triangleTopCtx.lineTo( width, 0 );
    triangleTopCtx.lineTo( 0, height );
    triangleTopCtx.stroke();
    triangleTopCtx.fill();
    triangleTopCtx.closePath();


    // TRIANGLE BOTTOM
    // -------------------------------------------------

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

    blockImageTop.src = triangleTopCtx.canvas.toDataURL();
    blockImageBottom.src = triangleBottomCtx.canvas.toDataURL();

}, false );

















