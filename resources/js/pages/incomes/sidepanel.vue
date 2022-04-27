<template>
  <slide-out-panel
    v-model="show"
    :outsideClose="true"
    tag="form"
    @closed="handleHide"
    @formSubmit="handleSubmit"
  >
    <template slot="header">
      <div>
        <h2 class="text-white font-semibold">
          {{ form.id ? "Edit Income" : "Add Income" }}
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
        <label for=""> Income Groups </label>
        <select
          v-model="form.group_id"
          class="w-full"
          name=""
          id=""
          style="border-color: #d5d6d7; border-radius: 5px"
        >
          <option :value="null">Select a option</option>
          <option :value="item.id" v-for="(item, i) in data" :key="i">
            {{item.name}}
          </option>
        </select>
        <has-error :errors="form.errors" field="group_id" />
      </div>
      <div class="mt-4">
        <label for=""> Collected By </label>
        <select
          v-model="form.collected_by"
          class="w-full"
          name=""
          id=""
          style="border-color: #d5d6d7; border-radius: 5px"
        >
          <option :value="null" selected disabled>Select a User</option>
          <option :value="user.id" v-for="(user, i) in users" :key="i">
            {{ user.name }}
          </option>
        </select>
        <has-error :errors="form.errors" field="collected_by" />
      </div>
    </template>
    <template slot="footer">
      <div class="flex justify-end items-end space-x-2 px-4">
        <t-button type="button" variant="default" @click="handleHide">
          Cancel
        </t-button>
        <t-button :loading="form.busy" variant="primary"> Submit </t-button>
      </div>
    </template>
  </slide-out-panel>
</template>

<script>
import SlideOutPanel from "../../components/app/panel/SlideOutPanel.vue";
import InputGroup from "../../components/utilities/InputGroup.vue";
import Form from "vform";
import Api from "../../services/income";

export default {
  components: { Form, InputGroup, SlideOutPanel },
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
      data: [],
      users: [],
      form: new Form(this.record),
    };
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
  watch: {
    record: {
      deep: true,
      handler(val) {
        this.form.fill(val);
      },
    },
  },
  mounted() {
    this.getIncomeGroup();
    this.getUsers();
  },
  methods: {
    async getIncomeGroup() {
      const { data } = await Api.getIncomesGroups();
      this.data = data;
    },

    async getUsers() {
      const { data } = await Api.getUsers();
      this.users = data
    },

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
  },
};
</script>
