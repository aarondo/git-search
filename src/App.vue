<template>
  <div id="app">
    <main-header /> 
    <router-view/>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue"
export default {
  name: 'app',
  components: {MainHeader}
}
  
</script>

<style lang="less">
///////// ******* GLOBAL STYLES USED THROUGHOUT THE APP ****** /////////An improved 
*{
  box-sizing:border-box;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
}
html {
    background: @silver;
}
#app {
    font-family: 'Open Sans',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    h1, h2, h3 {
        font-family: 'Roboto Slab',serif;
        font-weight: bold;
        margin-bottom: 20px;
        line-height: 1.5;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-all;
        word-break: break-word;
        hyphens: auto;
        &.nm {
            margin-bottom: 0px;
        }
    }
    p {
        margin-bottom: 20px;
        color: @lightSilver;
        font-size: 1rem;
        line-height: 1.5;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-all;
        word-break: break-word;
        hyphens: auto;
        a {
            color: @blue;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.5rem;
    }
    h3 {
        font-size: 1.2rem;
    }
}
.wrapper {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    &.mini {
        max-width: 700px;
    }
}
form {
    input[type="search"] {
        padding: 15px 18px;
        appearance: none;
        font-size: 1rem;
        width: 100%;
        border: 1px solid @border;
        border-radius: @radius;
        &:focus {
            outline: 0;
            border-color: @blue;
            box-shadow: 0px 0px 3px 5px fade(@blue,10);
            color: @blue;
        }
    }
}
.badge {
    background: @yellow;
    color: white;
    display: inline-block;
    padding: 8px 10px;
    border-radius: @radius;
    font-size: 0.8rem;
    font-weight: bold;
}
.avatar {
    display: block;
    border-radius: 50%;
    margin-bottom: 20px;
    background: @border;
    &.small {
        width: 48px;
        height: 48px;
    }
    &.large {
        width: 150px;
        height: 150px;
    }
    &.center {
        margin: 0 auto;
        margin-bottom: 20px;
    }
}
.placeholder {
    width: 100%;
    height: 15px;
    background: @border;
    display: block;
    &.large {
        height: 40px;
    }
}
#meta {
    padding: 20px;
    text-align: center;
}
#errorPage {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
}
.box {
    background: white;
    padding: 20px;
    border: 1px solid @border;
    border-radius: @radius;
}
.loadMore {
    appearance: none;
    border: 0px;
    bakground: #FFFFFF;
    font-size: 1rem;
    text-align: center;
    width: 100%;
    cursor: pointer;
    &:hover {
        color: @blue;
    }
    &:focus {
        outline: 0;
    }
}

</style>
