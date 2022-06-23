<template >
  <div style="padding: 10px">
<!--    功能区域-->
    <div style="margin: 10px 0">
      <el-button type="primary" @click="add" v-if="[1, 2].includes(user.role)">新增</el-button>
                        <!--      多判定方法2  v-if="user.role === 1 ||user.role === 2"-->
      <el-button type="primary" disabled>导入表格</el-button>
      <el-button type="primary" disabled>导出为表格</el-button>
    </div>
<!--    搜索区域-->
    <div style="margin: 10px 0">
      <el-input v-model="search" placeholder="请输入关键字" style="width: 15%" clearable />
      <el-button type="primary" style="margin-left: 5px" @click="load">查询</el-button>
    </div>
    <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
      <el-table-column
          prop="id"
          label="ID"
          sortable />

      <el-table-column
          prop="username"
          label="用户名"
           />

      <el-table-column
          prop="nickName"
          label="昵称"
          />

      <el-table-column
          prop="role"
          label="职务"
      >
        <template #default="scope">
          <span v-if="scope.row.role === 1">社长</span>
          <span v-if="scope.row.role === 2">管理</span>
          <span v-if="scope.row.role === 3">社员</span>
        </template>
      </el-table-column>

      <el-table-column
          prop="age"
          label="年龄"
      />

      <el-table-column
          prop="sex"
          label="性别"
      />

      <el-table-column
          prop="address"
          label="地址"
      />
      <el-table-column fixed="right" label="操作" width="150" v-if="[ 1, 2,3].includes(user.role)">
        <template #default="scope">
          <el-button type="text"  @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm title="确认删除?" @confirm="handleDelete(scope.row.id)">
            <template #reference>
              <el-button type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin: 10px 0">
      <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[5, 10, 20]"
          :page-size="pageSize"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />

      <el-dialog
          v-model="dialogVisible"
          title="提示"
          width="30%">

        <el-form :model="form" label-width="80px">
          <el-form-item label="用户名" >
            <el-input v-model="form.username" style="width: 80%"/>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="form.nickName" style="width: 80%"/>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age" style="width: 80%"/>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio v-model="form.sex" label="男" >男</el-radio>
            <el-radio v-model="form.sex" label="女" >女</el-radio>
            <el-radio v-model="form.sex" label="未知" >未知</el-radio>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.address" style="width: 80%"/>
          </el-form-item>
          <el-form-item label="职务">
            <el-select v-model="form.role" class="m-2" placeholder="选择职务">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
              />
            </el-select>
          </el-form-item>

        </el-form>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="save">完成</el-button>
      </span>
        </template>
      </el-dialog>
    </div>

  </div>
</template>





<script>

import request from "@/utils/request";

export default {
  name: 'Home',
  data(){
    return{
      user:{},
      form:{},
      dialogVisible: false,
      currentPage:1,
      total:0,
      pageSize:10,
      search:'',
      tableData:[],
      options:  [
        {
          value:1,
          label:"社长",
          disabled:false,
        },
        {
          value:2,
          label:"管理",
          disabled:false,
        },
        {
          value:3,
          label:"社员",
          disabled:false,
        },
      ]
    }
  },

  created() {
    let userStr = sessionStorage.getItem("user") || "{}"
    this.user = JSON.parse(userStr)

    // 请求服务器端 确认当前用户的合法信息
    request.get("/user/" + this.user.id).then(res =>{
      if (res.code === '0'){
        this.user = res.data
      }
    })

    // 建议用户完善个人信息
    if (this.user.address == null || this.user.age == null || this.user.sex == null){
      this.$messageBox({
        type:"warning",
        message:"个人信息未完善，请在左上角个人信息页面完善信息。"
      })
      // alert("请在左上角完善个人信息");
    }

    // 权限分割 高权限可以控制低权限 最高给到同级别权限
    for(let i=1;i<this.user.role;i++){
      this.options[i-1].disabled=true
    }

    // 重新加载
    this.load()
  },

  methods:{

    load(){
      request.get("/user",{
        params:{
          pageNum:this.currentPage,
          pageSize:this.pageSize,
          search:this.search
        }
      }).then(res =>{
        console.log(res)
        this.tableData = res.data.records
        this.total= res.data.total
      })


    },

    add(){
      this.dialogVisible = true
      this.form = {}
    },

    save(){
      if (this.form.id){
        request.put("/user",this.form).then(res =>{
          console.log(res)
          if (res.code === '0'){
            this.$message({
              type:"success",
              message:"更新成功"
            })
            this.load()
          }else {              this.$message({
              type:"error",
              message:"更新失败"+res.msg
            })
          }

        })
      }else {
        request.post("/user",this.form).then(res =>{
          console.log(res)
          if (res.code === '0'){
            this.$message({
              type:"success",
              message:"新增成功"
            })
          }else {
            this.$message({
              type:"error",
              message:"新增失败"+res.msg
            })
          }
        })
      }

      this.load();     //刷新数据
      this.dialogVisible = false; //关闭弹窗

    },

    handleEdit(row){
      // 深拷贝
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
    },
    //改变当前每页个数
    handleSizeChange(){
      this.load()
    },
    //改变当前页码
    handleCurrentChange(){
      this.load()
    },
    handleDelete(id){
      console.log("i delete "+id)
      request.delete("/user/"+id).then(res => {
        if (res.code === '0'){
          this.$message({
            type:"success",
            message:"删除成功"
          })
        }else {
          this.$message({
            type:"error",
            message:"删除失败"+res.msg
          })
        }
        this.load()  //删除后重新加载表格
      })

    }
  }

}


</script>
