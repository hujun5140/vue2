<template>
    <div>
        <div class="title">热销推荐</div> 
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>  
    </div>
</template>
<script>
export default {
    name: 'HomeRecommend',
    data(){
        return{
            recommendList:[
                {
                    id:'0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/fe/feea19ebd8ed685ba3.img.jpg_200x200_4fc6f4e8.jpg',
                    title: '东湖樱园',
                    desc: '武汉大学，浪漫樱花'
                },
                {
                    id:'0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/bb/bbbbe63e21822952.water.jpg_200x200_9fa7fc75.jpg',
                    title: '紫薇都市田园',
                    desc: '花花草草'
                },
                {
                    id:'0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/bf/bf53a52a9e1c9905.water.jpg_200x200_01729033.jpg',
                    title: '东湖海洋世界',
                    desc: '亲子乐园'
                },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    .title {
        margin-top: .2rem;
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }
    .item {
        overflow: hidden;
        display: flex;
        height: 1.9rem;
        .item-img {
            width: 1.7rem;
            height: 1.7rem;
            padding: .1rem;
        }
        .item-info {
            flex: 1;
            padding: .1rem;
            min-width: 0;
            .item-title {
                line-height: .54rem;
                font-size: .32rem;
                @include ell();
            }
            .item-desc {
                line-height: .4rem;
                color: #ccc;
                @include ell();
            }
            .item-button {
                line-height: .44rem;
                margin-top: .16rem;
                background: #ff9300;
                padding: 0 .2rem;
                border-radius: .06rem;
                color: #fff;
            }
        }
    }
</style>