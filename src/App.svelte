<script>
  import TalkCard from "./card/TalkCard.svelte";

  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  const flipDurationMs = 300;

  export let tracks;

  function handleDndConsiderCards(e) {
    tracks = e.detail.items;
    tracks = [...tracks];
  }
  function handleDndFinalizeCards(e) {
    tracks = e.detail.items;
    tracks = [...tracks];
  }
</script>

<style>
  .board {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    width: 100%;
    height: 95vh;
    /* margin-bottom: 10px; */
    /* overflow-x: auto; */
    /* overflow-y: hidden; */
  }
  .track-title {
    place-content: center flex-start;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
  }
  .card-list {
    /* height: 100%; */
    padding: 8px;
    width: 320px;
    overflow: auto;
    margin: 0 8px 8px 0;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</svelte:head>
<div
  class="board"
  use:dndzone={{ items: tracks, flipDurationMs }}
  on:consider={(e) => handleDndConsiderCards(e)}
  on:finalize={(e) => handleDndFinalizeCards(e)}>
  {#each tracks as track (track.id)}
    <div class="card-list" animate:flip={{ duration: flipDurationMs }}>
      <div class="track-title">
        <h2 style="margin-top: 0.5em">{track.title}</h2>
      </div>
      <TalkCard talks={track.talks} />
    </div>
  {/each}
</div>
