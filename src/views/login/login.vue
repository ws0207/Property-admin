<template>
  <div class="login">
    <div class="dl">
      <h3>小区物业管理</h3>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <!-- 选择框 -->
        <el-radio-group v-model="radio" class="el-radio__label">
          <el-radio :label="3">业主</el-radio>
          <el-radio :label="6">物主</el-radio>
        </el-radio-group>

        <el-form-item>
          <el-button type="primary" class="logins" @click="submit(ruleFormRef)">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { loging } from '../../api/manager'

const radio = ref()
// import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref()
const ruleForm = reactive({
  username: '',
  password: ''
})

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '用户名必须为3-5位', trigger: 'change' }
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const submit = () => {
  ruleForm.value.validate((valid) => {
    if (!valid) {
      return false
    }
    loging(ruleForm.username, ruleForm.password).then((res) => {
      console.log(res)
    })
  })
}

// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`
// }))
</script>

<style>
html,
body {
  background: #409eff;
}
.dl {
  width: 500px;
  margin: 206px auto;
  text-align: center;
  background: #fff;
  padding: 60px;
  border-radius: 10px;
}

h3 {
  font-size: 26px;
  font-weight: 700;
  color: #409eff;
}
.logins {
  width: 100%;
}
.el-radio__label {
  color: #000;
}
</style>
