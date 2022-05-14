<template>
  <div id="box">
    <!--上面的盒子-->
    <div id="headbox">
      <!--淘宝商标-->
      <div id="headbox_img">
        <img src="https://s2.loli.net/2022/04/26/inXfUOcNbITC3oV.png">
      </div>
      <!--背景图片-->
      <div id="headboximg"></div>
      <!--背景图片上灰色的背景-->
      <div id="headboxcolor"></div>
      <!--页面文字-->
      <div id="headboxfind">
        <div>淘宝呗免费开店</div>
        <div>让天下没有难做的生意</div>
        <div @click="drawer = true" type="primary">
          个人开店
        </div>
      </div>
    </div>
    <!--下面的盒子-->
    <div id="lastbox">
        <ul>
          <li class=" lastboxli">
            <img src="../assets/注册01小图标.png">
            <div>免费开店</div>
            <div>0元入驻，免费开淘宝呗店</div>
          </li>
          <li class=" lastboxli">
            <img src="../assets/注册02小图标.png">
            <div>海量用户</div>
            <div>上亿平台消费者，不愁没订单</div>
          </li>
          <li class=" lastboxli">
            <img src="../assets/注册03小图标.png">
            <div>新商家成长扶持</div>
            <div>官方交流群，带你快速破单晋级</div>
          </li>
          <li class=" lastboxli">
            <img src="../assets/注册04小图标.png">
            <div>全球资源</div>
            <div>全球资源丰富，无忧进货</div>
          </li>
        </ul>
    </div>

    <!--登录抽屉-->
    <el-drawer :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <!--登录-->
      <div id="loginbox">
        <p class="shangjia">商家登录</p>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="商家账号" prop="age" class="yongone">
            <el-input class="yong" type="text" v-model="ruleForm.age" placeholder="请输入商家账号"></el-input>
          </el-form-item>
          <el-form-item label="商家密码" prop="pass" class="yongone">
            <el-input class="yong" type="password" v-model="ruleForm.pass" autocomplete="off"  placeholder="请输入商家密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <a href="#" class="zhanhbox" @click="loginboxOn">没有账号？点击注册</a>
          </el-form-item>
        </el-form>
        <div id="boximg"></div>
      </div>
      <!--注册-->
      <div id="registerbox">
        <p class="shangjia">商家注册</p>
        <el-form :model="zruleForm" status-icon :rules="zrules" ref="zruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="商家账号" prop="zage" class="yongone">
            <el-input class="yong" type="text" v-model="zruleForm.zage" placeholder="用户名3-10位"></el-input>
          </el-form-item>
          <el-form-item label="商家密码" prop="zpass" class="yongone">
            <el-input class="yong" type="password" v-model="zruleForm.zpass" autocomplete="off"  placeholder="密码6-10位"></el-input>
          </el-form-item>
          <el-form-item label="店铺名字" prop="zname" class="yongone">
            <el-input class="yong" type="text" v-model="zruleForm.zname" placeholder="请输入店铺名字，长度不能超过20"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="zpho" class="yongone">
            <el-input class="yong" type="text" v-model="zruleForm.zpho" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <!-- 选择店铺类型 -->
          <div class="selectbox">
            <el-select v-model="value" clearable placeholder="请选择店铺类型">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <el-form-item>
            <el-button type="primary" @click="zsubmitForm('zruleForm')">注册</el-button>
            <el-button @click="resetForm('zruleForm')">重置</el-button>
            <a href="#" class="zhanhbox" @click="registerboxOn">已有账号？点击登录</a>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'CarLogon',
  data() {
    /*登录表单*/
    let checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }else {
        callback();
      }
    };
    /*注册表单*/
    let zcheckAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }else if(value.length<3 || value.length>10){
        return callback(new Error('用户名不规范'));
      } else {
        callback();
      }
    };
    let zvalidatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if(value.length<6 || value.length>10){
        return callback(new Error('密码不规范'));
      }else {
        callback();
      }
    };
    let zchexckname= (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入店铺名'));
      } else if(value.length>20){
        return callback(new Error('店铺名不规范'));
      }else {
        callback();
      }
    };
    let zphoyz=(rule, value, callback) => {
      let reg =/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (value === '') {
          callback(new Error('请输入手机号'));
      } else if(value.length<11 || !reg.test(value)){
          return callback(new Error('手机号码不规范'));
      }else {
          callback();
      }
    };
    return {
      /*抽屉数据*/
      drawer: false,
      direction: 'rtl',
      /*登录数据*/
      ruleForm: {
        pass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      },
      /*注册数据*/
      zruleForm: {
        zpass: '',
        zage: '',
        zname:'',
        zpho:''
      },
      zrules: {
        zpass: [
          { validator: zvalidatePass, trigger: 'blur' }
        ],
        zage: [
          { validator: zcheckAge, trigger: 'blur' }
        ],
        zname:[
          { validator: zchexckname, trigger: 'blur' }
        ],
        zpho:[
          { validator: zphoyz, trigger: 'blur' }
        ]
      },
      // 下拉选择框
      options: [],
      value: '',
    };
  },
  mounted() {
    //页面进来获取下拉款的数据赋值
    this.axios.get(`http://localhost:8080/merchant/seller/select`)
    .then((response)=>{
      console.log(response.data);
      for(let i=0;i<response.data.length;i++){
        this.options.push({
          value:response.data[i].category_id,
          label:response.data[i].category_name
        })
      }
    },(error)=>{
      console.log(error);
    })
  },
  methods: {
    /*点击更换登录注册页面方法*/
    loginboxOn(){//在登录页面中切换注册
      //隐藏登录页面
      document.querySelector('#loginbox').style.display='none'
      //显示注册页面
      document.querySelector('#registerbox').style.display='block'
    },
    registerboxOn(){//在注册页面中切换登录
      //显示登录页面
      document.querySelector('#registerbox').style.display='none'
      //隐藏注册页面
      document.querySelector('#loginbox').style.display='block'
    },
    /*抽屉方法*/
    handleClose(done) {
      this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
    },
    /*点击登录方法  规范成功后会拿到用户名和密码*/
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {//规范成功
          this.axios.get(`http://localhost:8080/merchant/seller?name=${this.ruleForm.age}&pas=${this.ruleForm.pass}`).then((response)=>{
            // 数组长度为1则登录成功 数组长度为0则登录失败
            if(response.data.length==0){//登录失败，提醒用户
              console.log("失败");
              this.$notify.error({
              message: '用户名或者密码错误'
              });
            }else{//成功后存入session跳转前一个页面
              window.sessionStorage.setItem("sellername",JSON.stringify(this.ruleForm.age))
              window.sessionStorage.setItem("sellerid",JSON.stringify(response.data[0].sel_id))
              this.$router.push({
                path: "/carback_stage",
              });
            }
          },(error)=>{
            console.log(error);
          })
        } else {//规范失败
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    /*注册的方法  验证成功后*/
    zsubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {//规范成功
          let age=this.zruleForm.zage
          let pas=this.zruleForm.zpass
          let name=this.zruleForm.zname
          let pho=this.zruleForm.zpho
          let num=this.value
          let genre='';
          for(let i=0;i<this.options.length;i++){
              if(this.options[i].value==num){
                genre=this.options[i].label+"店"
              }
          }
          console.log(age,pas,name,pho,genre);
          this.axios.get(`http://localhost:8080/merchant/seller/zu?zage=${age}&zpas=${pas}&zname=${name}&value=${genre}&zpho=${pho}`).then((response)=>{
            if(response.data=='yes'){
              //显示登录页面
              document.querySelector('#registerbox').style.display='none'
              //隐藏注册页面
              document.querySelector('#loginbox').style.display='block'
              return;
            }
            //如果数据的长度是1就代表用户名存在0代表用户名不存在,yes就是存储成功
            if(response.data.length==0){//没有用户名
              
              }else{//有用户名进行提醒
                this.$notify.error({
                  message: '用户名已经存在，请重新输入'
                });
              }
          },(error)=>{
            console.log("错误"+error);
          })
        } else {//规范失败
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  #box:after{
    content: '';
    display: block;
    clear: both;
  }
  #headbox{
    width: 100%;
  }
  #headbox:after{
    content: '';
    display: block;
    clear: both;
  }
  /*背景图片*/
  #headboximg{
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 500px;
    background: url(../assets/商家登录注册背景2.png)
    no-repeat;
    background-size: cover;
    background-position: center -70px;
    z-index: -20;
  }
  #headboxcolor{
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 500px;
    background-color: rgba(0,0,0,.6);
    border-bottom: 10vh solid #fff;
    z-index: -1;
  }
  /*商标图片*/
  #headbox_img>img{
    width: 200px;
    padding: 20px;
    margin-left: 230px;
  }
  /*文字*/
  #headboxfind{
    margin-top: 60px;
    position: relative;
    width: 100vw;
    text-align: center;
  }
  #headboxfind>div:nth-of-type(1){
    color: #fff;
    text-align: center;
    line-height: 90px;
    font-size: 64px;
    font-weight: 600;
  }
  #headboxfind>div:nth-of-type(2){
    line-height: 33px;
    font-size: 24px;
    margin-top: 10px;
    opacity: .7;
    color: #fff;
    text-align: center;
  }
  #headboxfind>div:nth-of-type(3){
    width: 170px;
    height: 50px;
    line-height: 50px;
    background: linear-gradient(90deg,#ff5000,#ff6f06);
    font-size: 16px;
    margin-top: 50px;
    color: #fff;
    text-align: center;
    margin: 20px;
    border-radius: 30px;
    margin: 40px auto 0;
  }
  #headboxfind>div:nth-of-type(3):hover{
    cursor:default
  }
  /*下面的图标*/
  #lastbox{
    width: 100vw;
    padding-left: calc(50% - 595px);
    padding-right: calc(50% - 595px);
    border-radius: 0;
    padding-top: 65px;
    margin-top: 80px;
  }
  .lastboxli{
    display: inline;
    width: 215px;
    height: 163px;
    float: left;
    align-items: center;
    align-content: center;
    margin-left: 75px;
  }
  /*图标图片*/
  .lastboxli>img{
    width: 70px;
    height: 70px;
  }
  .lastboxli>div:nth-of-type(1){
    width: 215px;
    margin-top: 15px;
    font-size: 24px;
    line-height: 20px;

  }
  .lastboxli>div:nth-of-type(2){
    width: 215px;
    font-size: 14px;
    color: #999;
    margin-top: 13px;
    line-height: 20px;
  }
  /*抽屉商家标题样式*/
  .shangjia{
    color: #333;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 8px;
    text-align: center;
    margin: 20px 0px 47px 0px;
  }
  .yong{
    width: 90%;
  }
  /*图片*/
  #boximg{
    width: 100vm;
    height: 360px;
    background: url(../assets/2b90d01be4ffff0e1ec24b089af287f3.png)
    no-repeat;
    background-size: cover;
    margin-top: -60px;
  }
  /*登录盒子*/
  #loginbox{

  }
  /*注册盒子*/
  #registerbox{
    display: none;
  }
  #registerbox>>>.el-input{
    width: 308px;
  }
  #registerbox>>>.el-input__inner{
    width: 308px;
  }
  .selectbox{
    margin: 0px 0px 20px 100px;
  }
  /*点击a标签切换按钮*/
  .zhanhbox{
    font-size: 12px;
    display: inline-block;
    margin-left: 20px;
  }
</style>
