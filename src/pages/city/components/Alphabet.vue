<template>
    <div>
        <ul class="list">
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'CityAlphabet'
}
</script>
<style lang="scss" scoped>
    .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: .4rem;
        .item {
            text-align:  center;
            line-height: .4rem;
            color: $bgColor;
        }
    }
</style>