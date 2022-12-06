<script lang="ts">
  import Header from "../components/Header.svelte";
</script>

<Header
  title="The Title of my Article"
  subtitle="The subtitle of my article"
  author="Matthew Conlen"
  authorLink="https://github.com/mathisonian/"
/>

<Header
  title="Sid Components"
  subtitle="Svelte ❤️ Idyll"
  authors={["Josh Pollock", "Matthew Conlen"]}
/>

<Header
  title="Sid Components"
  subtitle="Svelte ❤️ Idyll"
  authors={[
    { name: "Josh Pollock", link: "https://joshmpollock.com" },
    { name: "Matthew Conlen" },
  ]}
  date="2020-10-10"
/>
