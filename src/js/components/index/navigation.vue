<template>
    <div>
        <header>
            <div class="fixed-width">
                <div class="logo"></div>
                <div class="nav">
                    <ul>
                        <li v-for="item in data"><a href="#">{{item}}</a></li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    //定义子组件的props 作用域
    export default{
        props:['data']
    }

</script>
