<template>
   <h1>This is user page {{ username }}</h1>
</template>

<script>
export default {
   props: ["username"]
};
</script>