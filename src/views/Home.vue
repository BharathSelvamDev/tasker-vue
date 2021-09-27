<template>
  <div class="home">
    <Task/>
  </div>
</template>

<script>
// @ is an alias to /src
import Task from '@/components/Task.vue'

export default {
  name: 'Home',
  components: {
    Task
  }
}
</script>
