<template>
  <div>
  <el-form :model="form" label-position="left" label-width="100" ref= "form">
    <el-form-item label="其他表单项" prop="name" :rules="rules.name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-table :data="form.tableData" border stripe>
      <el-table-column label="该列单元格校验">
        <template slot-scope="{ row, $index }">
          <el-form-item
            :prop="`tableData.${$index}.input`"
            :rules="rules.input"
          >
            <el-input v-model="row.input"></el-input>
          </el-form-item>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
  <el-button @click="submitForm">提交</el-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        name: "",
        tableData: [
          { input: "" },
          { input: "" },
          { input: "" },
          { input: "" },
          { input: "" }
        ]
      },
      rules: {
        name: [
          { required: true, trigger: ["blur", "change"], message: "请选择" }
        ],
        input: [
          { required: true, trigger: ["blur", "change"], message: "请选择" }
        ]
      },
    }
  },
  methods: {
    submitForm() {
      // 触发表单整体校验
      this.$refs.form.validate(valid => {
        if (valid) {
          // 如果通过校验，可以继续执行提交的逻辑
          this.$message.success('提交成功！');
          // ... 提交数据的逻辑
        } else {
          this.$message.error('表单校验失败，请检查输入');
        }
      });
    }
  },
};

</script>

<style lang="scss" scoped>
</style>
