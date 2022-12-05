<script lang="ts">
  export let style: string | undefined = undefined;
</script>

<span {style} class={"aside-container"}>
  <span class={"aside"}><slot /></span>
</span>
