<template>
    <div class="mapping">
        <!-- 顶部banner -->
        <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
            <!-- <img :src="bannertop_img.image" alt /> -->
        </div>
        <div class="content1">
            <!-- 标题 -->
            <div class="title_all">
                <span class="span"></span>
                <p>智慧交通规划</p>
            </div>
            <p
                class="title"
            >秉承衔接优化，协调发展的规划理念，以融合多源数据为内核，以数据流串联业务流，构建多模式全出行链，实现交通规划领域数据闭环的应用，从而实现交通规划资源整合化、管理精细化、决策科学化。</p>
        </div>
        <div class="content1">
            <!-- 标题 -->
            <div class="title_all">
                <span class="span"></span>
                <p>客户</p>
            </div>
            <div class="environment_first">
                <div class="environment_first_l">
                    <img src="../../assets/imgs/trafficplanning/img1.png" />
                    <p class="title1">市、区规划部门</p>
                </div>
                <div class="environment_first_l">
                    <img src="../../assets/imgs/trafficplanning/img2.png" />
                    <p class="title1">规划设计单位</p>
                </div>
            </div>
        </div>
        <div class="content1">
            <!-- 标题 -->
            <div class="title_all">
                <span class="span"></span>
                <p>解决问题</p>
            </div>
            <div class="word">
                <img class="word_img" src="../../assets/imgs/trafficplanning/img3.png" />
            </div>
            <p
                class="title"
            >秉承衔接优化，协调发展的规划理念，以融合多源数据为内核，以数据流串联业务流，构建多模式全出行链，实现交通规划领域数据闭环的应用，从而实现交通规划资源整合化、管理精细化、决策科学化。</p>
        </div>
        <div class="content1">
            <!-- 标题 -->
            <!-- <div class="title_all">
                <span class="span"></span>
                <p>产品特色</p>
            </div>-->
            <div class="word">
                <img class="word_imga" src="../../assets/imgs/trafficplanning/trafficplanninga.png" />
                <img class="word_imga" src="../../assets/imgs/trafficplanning/trafficplanningb.png" />
            </div>
        </div>
        <!-- <div class="content1"> -->
        <!-- 标题 -->
        <!-- <div class="title_all">
                <span class="span"></span>
                <p>城市交通数据中心</p>
            </div>
            <div class="word">
                <img class="word_img" src="../../assets/imgs/trafficplanning/img5.png" />
            </div>
            <p
                class="title"
            >以大数据分析技术为基础，汇聚融合基础地理、社会经济、土地利用、交通行业特征（？出行数据）、交通调查、规划等多源异构数据，使利用大数据治理和深度挖掘等技术手段，融合综合交通模型（TransCAD，TransModel），分析区域交通出行生成、交通分布、方式划分、交通分配规律（？情况），为交通基础设施建设、交通政策制定、交通影响评价提供更科学的量化参考和决策支持。并实现与其他政府部门、机构的信息共享。</p>
        </div>
        <div class="content1">-->
        <!-- 标题 -->
        <!-- <div class="title_all">
                <span class="span"></span>
                <p>城市交通模型</p>
            </div>
            <p
                class="title"
            >利用城市宏、中、微观三个层次交通模型，从不同空间维度，构建城市交通需求的量化指标体系，分析评价城市的交通需求，辅助交通规划、建设、管理等领域的科学决策。</p>
            <div class="trafficplanning-list">
                <div class="trafficplanning-listone">
                    <img src="../../assets/imgs/trafficplanning/img6.png" />
                    <p class="title1">宏观模型</p>
                </div>
                <div class="trafficplanning-listone">
                    <img src="../../assets/imgs/trafficplanning/img7.png" />
                    <p class="title1">中观模型</p>
                </div>
            </div>
            <div class="trafficplanning-list">
                <div class="trafficplanning-listone">
                    <img src="../../assets/imgs/trafficplanning/img8.png" />
                    <p class="title1">微观模型</p>
                </div>
                <div class="trafficplanning-listone">
                    <img src="../../assets/imgs/trafficplanning/img9.png" />
                    <p class="title1">路口模型</p>
                </div>
            </div>
        </div>-->
        <!-- 侧边按钮 -->
        <Sidebarpopup></Sidebarpopup>
    </div>
</template>

<script>
import Sidebarpopup from "../../components/Sidebarpopup/Sidebarpopup";
export default {
    data() {
        return {
            bannertop_img: ""
        };
    },
    components: { Sidebarpopup },
    created() {
        sessionStorage.setItem("add", "traffic-regulation");
        this.banner();
        // this.productsfn();
    },
    mounted() {
        this.$router.afterEach((from, next) => {
            window.scrollTo(0, 0);
        });
    },
    methods: {
        //axios请求轮播图
        banner: function() {
            this.$api.get(
                "banners/product-child",
                {
                    page: 1,
                    pageSize: 10
                },
                response => {
                    if (response.status >= 200 && response.status < 300) {
                        // console.log(response.data); //请求成功，response为成功信息参数
                        this.bannertop_img = response.data.data[0];
                    } else {
                        // console.log(response.message); //请求失败，response为失败信息
                    }
                }
            );
        }
    }
};
</script>

<style lang="scss" scoped>
@import "trafficplanning.scss";
</style>