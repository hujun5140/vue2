<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'HomeSwiper',
    data(){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList:[{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/18/c1e1a713c0543a02.jpg_750x200_c1295fcf.jpg'
            },{
                id: '0002',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/4c816b1e5e73973ade5a8dac7f808ff1.jpg_750x200_0c475545.jpg'
            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff;
.wrapper
    overflow: hidden
    width:100%
    height: 0
    padding-bottom: 26.66%
    background: #eee
    .swiper-img
        width:100%
</style>