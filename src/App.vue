<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'app',
    };
</script>
<style>
    .van-picker__title{
        line-height: normal;
    }
    .van-picker__toolbar{
        height: 100px;
    }
    .van-picker__confirm{
        font-size: 42px;
    }
    .van-picker__cancel{
        font-size: 42px;
    }
    .van-tabs--line .van-tabs__wrap{
        width: 100vw;
        height: 127px;
    }
    .van-tab{
        line-height: normal;
        font-size: 44px;
    }
    .van-tabs__line{
        width: 100px;
        height: 6px;
        color: #0943ec;
        background-color: #0943ec;
    }
    .van-tab--active{
        font-weight: bold;
    }
    *{
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -khtml-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
    input , textarea{
        -webkit-user-select:auto !important;
        user-select:auto !important;
    }
    html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        min-height: 100vh;
    }
    body {
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: column;
    }
    img {
        width: 100%;
        height: auto;
        vertical-align: top;
        content: normal !important;
    }

    [aspectratio] {
        position: relative;
    }

    [aspectratio]::before {
        content: '';
        display: block;
        width: 1px;
        margin-left: -1px;
        height: 0;
    }

    [aspectratio-content] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }

    [flexContainer] {
        display: flex;
    }

    ul, li {
        list-style: none outside none;
        margin: 0;
        padding: 0;
    }

    figure {
        display: block;
        margin: 0;
    }

</style>
