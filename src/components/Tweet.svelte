<script lang="ts">
  import { onMount } from "svelte";

  export let id: string;
  export let parameters: any = undefined;
  let loading = true;
  let loadingMessage = "Loading tweet...";
  let tweetContainer: HTMLElement;
  let style: string | undefined = undefined;

  function isTwttrReady() {
    return !!window["twttr"];
  }

  function loadTwttr() {
    return new Promise<void>((resolve, reject) => {
      const twttrEl = document.createElement("script");
      twttrEl.setAttribute(
        "src",
        `${
          document.location.protocol === "file:"
            ? "https:"
            : document.location.protocol
        }//platform.twitter.com/widgets.js`
      );
      twttrEl.onload = () => resolve();
      twttrEl.onerror = (error) => reject(error);
      (document.head || document.body || { appendChild: () => {} }).appendChild(
        twttrEl
      );
    });
  }

  function loadTweet() {
    const twttr = window["twttr"];

    twttr.widgets
      .createTweet("" + id, tweetContainer, parameters)
      .then((el) => {
        if (el) {
          loading = false;
        } else {
          loadingMessage = `Error loading tweet ${id}.`;
        }
      });
  }

  onMount(async () => {
    if (!isTwttrReady()) {
      try {
        await loadTwttr();
      } catch (error) {
        loadingMessage = `Error loading twitter.`;
        return;
      }
    }

    loadTweet();
  });
</script>

<div
  class="tweet-container"
  bind:this={tweetContainer}
  style={style ?? "minHeight: 309; marginTop: 10; marginBottom: 10"}
>
  {#if loading}
    <p class="loading">{loadingMessage}</p>
  {/if}
</div>
