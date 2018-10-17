<template lang="html">
  <div class="body">
    <div class="main">
     
      <div class="main-left">
         <el-card  shadow="never" :body-style="{padding:'10px'}" class="box-card">
         <div style="line-height:5px;" slot="header" class="clearfix">
         <span style="font-size:16px;">采集区域</span>
         </div>
        <div class="top camera">
            <el-row>
              <el-col :span="12">
                 <el-tooltip  effect="light" content="头像" placement="top">
                  <i v-show="isphotograph"  @click="isphotograph = false" class="el-icon-Aicon-guanliyuanrenzheng icon"/>
                  </el-tooltip>
                   <el-tooltip  effect="light" content="其他证件" placement="top">
                  <i  v-show="!isphotograph" @click="isphotograph = true" class="el-icon-Aicon-credentials_icon icon"/>
                  </el-tooltip>
                  <video id="videoView" autoplay></video>
              </el-col>
          <div v-if="isphotograph" class="camera-ok" @click="photograph"></div>
          <div v-else class="camera-ok-other" @click="photographOther"></div>
          <el-col :span="12">
          <canvas id="canvas" class="photo">
          </canvas>
          <span v-show="showSpanPhoto" style="position:absolute;left:64%;top:40%;z-index:1;font-size:24px;">头像展示区</span>
          </el-col>
           </el-row>
        </div>
        <div class="bottom-nav">
            <!-- 标签页 -->
    <el-tabs v-model="activeName2" type="border-card" style="margin-left:10px;">
    <el-tab-pane label="身份证模式" name="first">
       <div style="line-height:36px;font-size:14px;" >
               <el-row>
                 <el-col   :span="8">
                    <img v-show="showBtn" @mouseover="showBtn = true"  @click="initIDCardRead" style="position:absolute; z-index:1;width:60px;top:27%;left:9%" src="../../assets/img/btn.png"/>
                    <img width="74%" @mouseleave="showBtn = false" @mouseover="showBtn = true" :src="idcardPhotoSrc"/>
                 </el-col>
                 <el-col :span="16">
                     <el-row>
                       <el-col :span="24">
                        <span>姓名:{{buyDrugPerson.name}}</span>
                       </el-col>
                       <el-col :span="24">
                         <span>性别:{{buyDrugPerson.gender}}</span>
                       </el-col>
                     </el-row>
                      <el-row>
                       <el-col :span="24">
                     <span>出生日期:{{buyDrugPerson.birthday}}</span>
                       </el-col>
                       <el-col :span="24">
                      <span>地址:
                         {{buyDrugPerson.hhrDetails}}</span>
                     </el-col>
                       <el-col :span="24">
                        <span>身份证号:
                         {{buyDrugPerson.idNo}}</span>
                        </el-col>
                        <el-col :span="24"> 
                        <span>联系方式:</span>
                         <el-input placeholder="请输入联系方式" style="width:180px;" v-if="showTel" size="small"></el-input>
                       </el-col>
                     </el-row>
                </el-col>
               </el-row>
           </el-form>
      </div>
    </el-tab-pane>
    <el-tab-pane label="其他证件模式" name="second">
             <div style="line-height:36px">
               <el-row>
                  <el-form :inline="true" label-width="80px"> 
                 <el-col style="margin-top:10px;" :span="12">
                   <el-row>
                     <el-col :span="24">
                       <center>
                      <span v-show="showSpanCard" style="position:absolute;left:35%;top:32%;z-index:1;font-size:20px">证件展示区</span>
                       <canvas style="width:60%;height:150px" id="canvasOtherId" class="photo"></canvas>
                      </center>
                     </el-col>
                   </el-row>

                   <el-row>
                        <el-col :span="24">
                          <el-form-item label="证件类型:">
                            <el-select style="width:180px;" size="small" >
                              <el-option key="1" label="护照" value="护照"></el-option>
                              <el-option key="2" label="台胞证" value="台胞证"></el-option>
                              <el-option key="3" label="港澳通行证" value="港澳通行证"></el-option>                              
                            </el-select>
                          </el-form-item>
                        </el-col>
                    </el-row> 

                    <el-row>
                        <el-col :span="24">
                          <el-form-item  label="证件号码:">
                           <el-input style="width:180px;" size="small"></el-input>
                          </el-form-item>
                        </el-col>
                    </el-row>

                 </el-col>
                 <el-col :span="12">
                     <el-row>
                       <el-col :span="24"> 
                       <el-form-item label="姓名:">
                         <el-input style="width:180px;" size="small"></el-input>
                       </el-form-item>
                       </el-col>
                       <el-col :span="24"> 
                       <el-form-item label="性别:">
                         <el-select style="width:180px;" size="small" >
                              <el-option key="1" label="男" value="男"></el-option>
                              <el-option key="2" label="女" value="女"></el-option>
                        </el-select>
                       </el-form-item>
                       </el-col>
                     </el-row>
                      <el-row>
                       <el-col :span="24"> 
                       <el-form-item  label="出生日期:">
                         <el-date-picker style="width:180px;" size="small"></el-date-picker>
                       </el-form-item>
                       </el-col>
                       <el-col :span="24">
                       <el-form-item label="国籍:">
                         <el-select style="width:180px;" size="small" >
                              <el-option key="1" label="男" value="男"></el-option>
                              <el-option key="2" label="女" value="女"></el-option>
                        </el-select>
                       </el-form-item>
                       </el-col>
                       <el-col :span="24"> 
                       <el-form-item  label="联系方式:">
                         <el-input  style="width:180px;" size="small"></el-input>
                       </el-form-item>
                       </el-col>
                     </el-row>
                </el-col>
                 </el-form>
               </el-row>
      </div>
    </el-tab-pane>
   </el-tabs>
        </div>
              </el-card>
      </div>

      <div class="main-right">
        <el-card shadow="never" :body-style="{padding:'10px'}" class="box-card">
         <div slot="header"  style="line-height:5px;" class="clearfix">
          <span style="font-size:16px;">购买药品</span>
         </div>
          <i  style="color:blue;float:right;font-size:20px;" @click="showSearch = !showSearch" class="el-icon-search"></i>          
          <div v-if="showSearch" style="background-color:#EFEFEF;margin-left:10px;border:1px solid #EDEFF2;padding:10px;border-radius: 5px;">
          <el-row>
            <el-col :span="12">
             <el-radio-group @change="radioChange" v-model="radio">
                <el-radio  label="1">扫码</el-radio>
                <el-radio  label="2">常用药品</el-radio>
                <el-radio  label="3">条件查询</el-radio>                
            </el-radio-group>
            </el-col>
          </el-row>
          <el-row v-if="radio==='1'&&showSearch" style="margin-top:10px;">
            <el-col :span="24">
               <el-input @blur="getByCode" style="width:45%" size="small"  placeholder="扫描条形码搜索"></el-input>
            </el-col>
          </el-row>
          <el-row v-if="radio==='3'&&showSearch" style="margin-top:10px;" >
            <el-col :span="8">
              <el-input style="width:95%" size="small"  placeholder="药品名称"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input style="width:95%" size="small"  placeholder="规格"></el-input>
            </el-col>
               <el-col :span="8">
              <el-input style="width:95%" size="small"  placeholder="厂家"></el-input>
            </el-col>
           <el-col style="margin-top:10px;" :span="8">
              <el-select clearable size="small" style="95%" placeholder="是否处方药">
               <el-option key="1" label="是" value="是"></el-option>
               <el-option key="2" label="否" value="否"> </el-option>                
              </el-select>
            </el-col>
            <el-col style="margin-top:10px;" :span="8">
             <el-select clearable size="small" style="95%" placeholder="药品种类">
               <el-option key="1" label="含麻黄碱类复方制剂" value="含麻黄碱类复方制剂"></el-option>
               <el-option key="2" label="第二类精神药品" value="第二类精神药品"> </el-option>                
              </el-select>
            </el-col>
            <el-col style="margin-top:10px;" :span="8">
              <el-button @click="getList" style="width:100px;margin-left:50px" size="small" type="primary">搜索</el-button>
            </el-col>
          </el-row>
          </div>

        <div class="right-bottom">
        <div style="width:100%">
            <el-row>
              <el-col :span="8" v-for="(item,index) in cards" :key="index">
                 <el-card :body-style="{padding:'10px'}" style="margin-left:10px;margin-bottom:10px;line-height:14px;font-size:14px;">
                       <div slot="header" style="line-height:10px;font-size:16px;"> 
                        <span>{{item.name}}</span>
                      </div>
                    规格:<span style="margin-left:10px;"> {{item.gg}}</span><br/>
                    <el-tooltip :content="item.cj" placement="top">
                    <p style="text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">厂家:<span style="margin-left:10px;">{{item.cj}}</span></p>
                    </el-tooltip>
                    数量:<el-input-number @change="addCar(item)" style="margin-left:10px;width:90px;"  size="mini" v-model="item.num" :min="0" :max="2"></el-input-number>
                 </el-card>
              </el-col>
            </el-row>
         </div>
         <el-tag style="margin-left:10px">待购药品清单</el-tag>
              <el-table size="medium" style="margin-left:10px;width:100%;" border  :header-cell-style="{background:'#EEF5FD'}" :data="buyList">
                <el-table-column prop="name" label="药品名称"></el-table-column>
                <el-table-column prop="gg" label="规格"></el-table-column>
                <el-table-column prop="num" label="数量"></el-table-column>
              </el-table>
           <el-tag v-if="showCheckRole" style="margin-left:10px;margin-top:10px">角色核验</el-tag>     
          <el-row v-if="showCheckRole" style="margin-left:20px;font-size:14px;">
            <el-col :span="8">
           <span style="margin-right:5px;">营业专员:</span>
          <el-select  size="small" style="width:50%;" v-model="defaultDoctor" >
          <el-option value="1" key="1" label="张三"></el-option>
            <el-option value="2" key="2" label="李四"></el-option>
          </el-select> 
            </el-col>
            <el-col :span="8">
               <span style="margin-right:5px">审核员:</span>
          <el-select  size="small" style="width:50%;" v-model="defaultDoctor" >
          <el-option value="1" key="1" label="张三"></el-option>
            <el-option value="2" key="2" label="李四"></el-option>
          </el-select> 
            </el-col>
            <el-col :span="8">
              <span style="margin-right:5px">医师:</span>
          <el-select  size="small" style="width:50%;" v-model="defaultDoctor" >
            <el-option value="1" key="1" label="张三"></el-option>
            <el-option value="2" key="2" label="李四"></el-option>
          </el-select> 
            </el-col>
          </el-row>
          <div class="btn-group">
            <el-button :disabled="btnDis" icon="check" type="primary" @click="passwordVisible = true">登记</el-button>
          </div>
        </div>
      </el-card>
      </div>
  </div>
  <el-dialog v-dialogDrag  title="确认密码" :visible.sync="passwordVisible"  width="25%" :close-on-click-modal="false">
  <el-form label-width="100px">
    <el-form-item label="营业专业">
      <el-input placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="审核员">
      <el-input placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="药师">
      <el-input placeholder="请输入密码"></el-input>
    </el-form-item>
  </el-form>
  <div class="dialog-footer">
    <center>
      <el-button @click="regist" type="primary">确定</el-button>
      <el-button @click="passwordVisible = false">取消</el-button>
    </center>
  </div>
  </el-dialog>
</div>
</template>

<script>
import { initIDCardRead } from '@/common/api';
import { DICT_CONTROLLED_MEDICINE, NATIONAL } from '@/common/js/dict.js';
export default {
  data() {
    return {
      showBtn: false,
      radio: '1',
      // 登记按钮置灰
      btnDis: true,
      // 联系方式
      showTel: false,
      passwordVisible: false,
      // 角色核验
      showCheckRole: false,
      // 搜索条
      showSearch: true,
      showSpanPhoto: true,
      showSpanCard: true,
      defaultDoctor: '1',
      isphotograph: true,
      buyList: [],
      cards: [],
      activeName2: 'first',
      selected: '1',
      video: {},
      video2: {},
      active: 0,
      showPanel: 1,
      buyDrugs: [],
      historyDrugs: [],
      IDCardPhoto: false,
      buyDrugPerson: {},
      page: 1,
      limit: 11,
      totalRows: 0,
      allDrugs: []
    };
  },
  watch: {
    selected(newVal, oldVal) {
      this.buyDrugPerson = {};
      this.IDCardPhoto = false;
      let canvasOther = document.getElementById('canvasOtherId');
      let context2 = canvasOther.getContext('2d');
      context2.clearRect(0, 0, canvasOther.width, canvasOther.height);
    }
  },
  computed: {
    drugs() {
      return this.allDrugs.filter(d => d.checked);
    },
    idcardPhotoSrc() {
      if (this.IDCardPhoto) {
        return 'data:image/png;base64,' + this.IDCardPhoto;
      } else {
        return require('../../assets/img/card.png');
      }
    },
    startRow() {
      return (this.page - 1) * this.limit;
    },
    endRow() {
      return this.startRow + this.limit;
    },
    tableHeight() {
      return window.screen.availHeight > 700 ? 500 : 430;
    }
  },
  methods: {
    // radio改变事件
    radioChange() {
      if (this.radio === '2') {
        // 常用药品
        this.getListUse();
      } else {
        // 清空
        this.cards = [];
      }
    },
    // 条件搜索
    getList() {
      this.cards = [
        {
          id: 1,
          name: '氨麻酶敏片1',
          gg: '16片+8片',
          cj: '中美天津制药有限公司',
          num: 0
        },
        {
          id: 1,
          name: '氨麻酶敏片1',
          gg: '16片+8片',
          cj: '中美天津制药有限公司',
          num: 0
        }
      ];
    },
    // 条码搜索
    getByCode() {
      this.cards = [
        {
          id: 1,
          name: '氨麻酶敏片1',
          gg: '16片+8片',
          cj: '中美天津制药有限公司',
          num: 0
        }
      ];
    },
    // 常用药品
    getListUse() {
      this.cards = [
        {
          id: 1,
          name: '氨麻酶敏片1',
          gg: '16片+8片',
          cj: '中美天津制药有限公司',
          num: 0
        },
        {
          id: 2,
          name: '氨麻酶敏片2',
          gg: '16片+8片',
          cj: '中美天津制药有限公司',
          num: 0
        },
        {
          id: 3,
          name: '氨麻酶敏232片3',
          gg: '16片+8片',
          cj: '中美天津制药有限公司',
          num: 0
        },
        {
          id: 4,
          name: '阿吃爽肤32水大餐',
          gg: '16片+8片',
          cj: '中美天津制药有限公司',
          num: 0
        },
        {
          id: 5,
          name: '氨麻酶敏片34',
          gg: '16片+8片',
          cj: '中美天津制药有限公司',
          num: 0
        },
        {
          id: 6,
          name: '阿吃爽11肤水大餐',
          gg: '16片+8片',
          cj: '中美天津制药有限公司',
          num: 0
        }
      ];
    },
    regist() {
      this.passwordVisible = false;
    },
    // 加入购物车
    addCar(item) {
      // 是否已加入购物车
      let f = false;
      let j;
      for (let i = 0; i < this.buyList.length; i++) {
        if (this.buyList[i].id === item.id) {
          // 已加入
          f = true;
          j = i;
        }
      }
      if (f) {
        // 存在则移除
        this.buyList.splice(j, 1);
      }
      if (item.num > 0) {
        // 加入
        this.buyList.push(item);
        this.showCheckRole = true;
        this.btnDis = false;
      }
      // 购物车清空隐藏角色核验 按钮置灰
      if (this.buyList.length === 0) {
        this.showCheckRole = false;
        this.btnDis = true;
      }
    },
    photograph() {
      this.showSpanPhoto = false;
      // 拍照
      let canvas = document.getElementById('canvas');
      let context = canvas.getContext('2d');
      console.log(canvas.width, canvas.height);
      context.drawImage(this.video, 0, 0, canvas.width, canvas.height);
    },
    photographOther() {
      this.showSpanCard = false;
      // 其他证件拍照
      let canvas = document.getElementById('canvasOtherId');
      if (!canvas) {
        console.log('Canvas not found.');
      }
      let context2 = canvas.getContext('2d');
      if (!context2) {
        console.log('context2 not support.');
      }
      context2.drawImage(this.video, 0, 0, canvas.width, canvas.height);
      // 对其他证件的照片进行赋值
      // this.IDCardPhoto = canvas.toDataURL('image/jpeg', 0.3).substr(23);
    },
    initIDCardRead() {
      initIDCardRead()
        .then(data => {
          this.buyDrugPerson = {
            name: data.data.Name,
            gender: data.data.Sex === '1' ? '男' : '女',
            birthday: data.data.Birthday,
            ethnic: NATIONAL[data.data.Nation],
            idNo: data.data.CardNo,
            hhrDetails: data.data.ResidenceAddress
          };
          this.IDCardPhoto = data.data.IDCardPhoto;
          this.showTel = true;
          this.photograph();
          this.showBtn = false;
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  },
  created() {
    let f = false;
    for (let v in DICT_CONTROLLED_MEDICINE) {
      console.log(v, DICT_CONTROLLED_MEDICINE[v]);
      this.allDrugs.push({
        name: DICT_CONTROLLED_MEDICINE[v],
        id: v,
        checked: !f
      });
      f = !f;
    }
    this.$nextTick(() => {
      // 购药现场拍照
      let video = document.getElementById('videoView');
      this.video = video;
      console.log('videoView', video);
      let videoObj = {
        video: true
      };
      let errBack = function(error) {
        console.log('Video capture error: ', error);
      };
      setTimeout(() => {
        if (navigator.getUserMedia) {
          navigator.getUserMedia(
            videoObj,
            function(stream) {
              // cameraStream = stream;
              console.log(stream);
              video.srcObject = stream;
              video.play();
            },
            errBack
          );
        } else if (navigator.webkitGetUserMedia) {
          navigator.webkitGetUserMedia(
            videoObj,
            function(stream) {
              video.src = window.webkitURL.createObjectURL(stream);
              video.play();
            },
            errBack
          );
        }
      }, 1000);
    });
  }
};
</script>

<style lang="css" scoped>
.body {
  
  width: 100%;
  /* height: 100%; */
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  /* justify-content: center; */
}

.main {
  /* height: 40em;
  width: 60em;
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #ddd; */
  overflow: hidden;
  display: flex;
  /* align-items: center; */
  flex-direction: row;
  justify-content: center;
}

@media (max-height: 100%) {
  .main {
    /* height: 35em;
    width: 60em;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #ddd; */
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
}

.main-left {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
}

.main-right {
  width: 50%;
  height: 100%;
  margin-top: 10px;
  padding-left: 20px;
}

.top {
  height: 100%;
  width: 100%;
  color: #000;
}

.camera {
  position: relative;
  align-items: center;
  overflow: hidden;
}

.camera video {
  background-color: #f1f1f1;
  width: 90%;
  height: 230px;
  margin-top: 10px;
  margin-left: 10px;
}
.photo {
  background-color: #f1f1f1;
  width: 90%;
  height: 230px;
  margin-top: 10px;
  margin-left: 10px;
}

.bottom-nav {
  margin-top: 10px;
  width: 97%;
  height: 40%;
}

.bottom {
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.bottom-left {
  background-color: #f1f1f1;
  width: 40%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 15px;
}

.bottom-right {
  height: 100%;
  width: 60%;
  text-align: left;
}

.bottom-right-other {
  height: 100%;
  width: 60%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.drug {
  width: 100%;
  height: 85%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.add {
  border: 1px dashed #ccc;
}

.active {
  background-color: #13ce66;
  color: #000;
}

.camera-ok,
.camera-ok-other {
  width: 5em;
  position: absolute;
  bottom: 10px;
  left: 18%;
  top: 40%;
  height: 5em;
  cursor: pointer;
  background-image: url('../../assets/img/照相_.png');
  background-size: 5em;
}

.camera-ok:hover {
  background-image: url('../../assets/img/照相_.png');
  background-size: 5em;
}

.right-bottom {
  width: 95%;
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.btn-group {
  margin-top: 10px;
  /* background-color: #a9afb9; */
  width: 100%;
  padding: 5px 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
}

.padding-right20 {
  padding-right: 20px;
}

.birthplace {
  display: block;
  width: 60%;
  text-align: right;
}
.cards {
  border: solid 1px black;
  padding: 10px;
}
.input-other {
  /* border-top: 3px dashed #1ee829; 上边框线 */
  /* border-bottom: 1px solid #f1f1f1; 下边框线 */
  /* border-left: 10px solid #ffd800; 左边框线  solid实线 */
  /* border-right: 16px groove #ce6a1f; 右边框线 */
  border: none;
}
.photo-other {
  position: absolute;
  /* background-color: #13ce66; */
  width: 40%;
  height: 100%;
  left: 0px;
  align-items: left;
}
.videoView2 {
  background-color: #f1f1f1;
  width: 90%;
  height: 100%;
  margin-top: 10px;
  object-fit: fill;
}
.icon {
  z-index: 1;
  position: absolute;
  top: 20px;
  left: 41%;
  font-size: 30px;
  color: #13227a;
}
</style>

