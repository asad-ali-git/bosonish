<template>
  <slide-out-panel
    v-model="show"
    :outside-close="true"
    tag="form"
    @closed="handleHide"
  >
    <template slot="header">
      <div class="">
        <h2 class="text-white font-semibold">
          {{ form.id ? "Edit Expenses" : "Add Expenses" }}
        </h2>
      </div>
    </template>
    <template slot="body">
      <InputGroup
        v-model="form.name"
        tag="t-input"
        label="Name"
        field="name"
        :errors="form.errors"
      />
      <InputGroup
        v-model="form.amount"
        tag="t-input"
        label="Amount"
        field="amount"
        :errors="form.errors"
      />
      <div class="mt-4">
      <label for="">Type</label>
      <select
        name=""
        id=""
        v-model="form.group_id"
        class="w-full"
        style="border-color: #d5d6d7; border-radius: 5px"
      >
      <option :value="null">Select Expense Group</option>
        <option :value="expense.id" v-for="(expense, i) in expenses" :key="i">
          {{ expense.name }}
        </option>
      </select>
      <has-error :errors="form.errors" field="group_id" />
      </div>
      <div class="mt-4">
      <label for="">Paid By</label>
      <select
        name=""
        id=""
        v-model="form.paid_by"
        class="w-full"
        style="border-color: #d5d6d7; border-radius: 5px"
      >
      <option :value="null">Select Paid By</option>
        <option :value="user.id" v-for="(user, i) in users" :key="i">
          {{ user.name }}
        </option>
      </select>
      <has-error :errors="form.errors" field="paid_by" />
      </div>
    </template>
    <template slot="footer">
      <div class="flex justify-end items-end space-x-2 px-4">
        <t-button type="button" variant="default" @click="handleHide">
          Cancel
        </t-button>
        <t-button :loading="form.busy" variant="primary" @click="handleSubmit">
          Submit
        </t-button>
      </div>
    </template>
  </slide-out-panel>
</template>

<script>
import Form from "vform";
import SlideOutPanel from "~/components/app/panel/SlideOutPanel.vue";
import InputGroup from "~/components/utilities/InputGroup";
import Api from "~/services/expense";

export default {
  components: {
    SlideOutPanel,
    InputGroup,
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  props: {
    value: {
      type: Boolean,
      required: false,
    },
    record: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: new Form(this.record),
      expenses: [],
      users: [],
    };
  },
  mounted() {
    this.fetchExpense();
    this.fetchUsers();
  },
  watch: {
    record: {
      deep: true,
      handler(val) {
        this.form.fill(val);
      },
    },
  },
  methods: {
    async handleSubmit() {
      const { data } = await Api.save(this.form);
      this.show = false;
      this.form.reset();
      this.$notify(
        { group: "success", title: "Success", text: data.message },
        2000
      );
      this.$emit("submitted");
    },
    handleHide() {
      this.show = false;
      this.form.reset();
    },
    async fetchExpense() {
      const { data } = await Api.getExpenses();
      this.expenses = data;

      // console.log(this.expenses);
    },
    async fetchUsers() {
      const { data } = await Api.getUsers();
      this.users = data;
    },
  },
};
</script>

<style></style>
