<template>
  <!-- Add Group -->
  <slide-out-panel v-model="show" :outside-close="true" tag="form" @closed="handleHide" @formSubmit="handleSubmit">
    <template slot="header">
      <div class="">
        <h2 class=" text-white font-semibold">
          {{ form.id ? 'Edit Group' : 'Add Group' }}
        </h2>
      </div>
    </template>
    <template slot="body">
      <InputGroup v-model="form.name" tag="t-input" label="Name" field="name" :errors="form.errors" />
      <div>
          <label for="">Type</label>
          <select class="w-full" v-model="form.type" name="" id="" style="border-color: #d5d6d7; border-radius: 5px">
              <option :value="null" selected disabled>Please Select Type </option>
              <option value="Expenses">Expenses</option>
              <option value="Incomes">Incomes</option>
          </select>
      </div>
    </template>
    <template slot="footer">
      <div class="flex justify-end items-end space-x-2 px-4">
        <t-button type="button" variant="default" @click="handleHide">
          Cancel
        </t-button>
        <t-button :loading="form.busy" variant="primary">
          Submit
        </t-button>
      </div>
    </template>
  </slide-out-panel>
</template>

<script>
import SlideOutPanel from '~/components/app/panel/SlideOutPanel.vue'
import InputGroup from '~/components/utilities/InputGroup'
import Api from '~/services/group'
import Form from 'vform'
export default {
  name: 'GroupSidePanel',
  components: {
    SlideOutPanel,
    InputGroup
  },
  props: {
    value: {
      type: Boolean,
      required: false
    },
    record: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      form: new Form(this.record)
    }
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    record: {
      deep: true,
      handler (val) {
        this.form.fill(val)
      }
    }
  },
  methods: {

    async handleSubmit () {
      const { data } = await Api.save(this.form)
      await Api.sendmails();
      this.show = false
      this.form.reset()
      this.$notify({ group: 'success', title: 'Success', text: data.message }, 2000)
      this.$emit('submitted')
    },
    handleHide () {
      this.show = false
      this.form.reset()
    }
  }
}
</script>

<style scoped>

</style>
