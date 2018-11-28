<style>
.login {
    border-width: 15px;
    border-style: solid;
    border-color:black;
    padding: 200px;
    color:black;
    background:orange;
    height: fill;
    width: fill;
}
</style>

<template>
    <div id="login">
        <h3>this is the login page</h3>
    </div>
</template>

<template>
    <div class= "login">
        <h3>SIGN IN</h3>
        <input type="text" placeholder="Email"><br>
        <input type="password" placeholder="Password"><br>
        <br>
        <button>Connection</button>
        <p> You don't have an account? You can create one</p>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
        }
    },
    methods: {}
}
</script>

