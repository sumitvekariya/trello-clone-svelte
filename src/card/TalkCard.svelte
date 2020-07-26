<script>
  import Card, {
    Content,
    Actions,
    ActionButtons,
    ActionIcons,
    PrimaryAction,
    Media,
  } from "@smui/card";
  import { Label, Icon } from "@smui/common";
  import IconButton from "@smui/icon-button";
  import Button from "@smui/button";
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  const flipDurationMs = 300;
  export let talks;

  function handleDndConsiderCards(e) {
    talks = e.detail.items;
    talks = [...talks];
  }
  function handleDndFinalizeCards(e) {
    talks = e.detail.items;
    talks = [...talks];
  }
</script>

<style>
  .mat-card-image {
    width: calc(100% + 32px);
    margin: 0 -16px 16px -16px;
  }
</style>

<div
  class="card-list-content"
  use:dndzone={{ items: talks, flipDurationMs }}
  on:consider={(e) => handleDndConsiderCards(e)}
  on:finalize={(e) => handleDndFinalizeCards(e)}>
  {#each talks as talk (talk.id)}
    <div
      animate:flip={{ duration: flipDurationMs }}
      class="card-container short"
      style="margin-bottom: 10px;">

      <Card style="width: auto;">
        <div style="padding: 1rem;">
          <!-- <h2 class="mdc-typography--headline6" style="margin: 0;">
              A card with media.
            </h2> -->
          <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">
            {talk.text}
          </h3>
        </div>
        <PrimaryAction>
          {#if talk.image}
            <img class="mat-card-image" src={talk.image} alt="event" />
          {/if}

          {#if talk.speaker}
            <Content class="mdc-typography--body1">By: {talk.speaker}</Content>
          {/if}
        </PrimaryAction>
        <Actions>
          <ActionButtons>
            <Button>
              <Label>Action</Label>
            </Button>
            <Button>
              <Label>Another</Label>
            </Button>
          </ActionButtons>
          <!-- <ActionIcons>
            <IconButton
              toggle
              aria-label="Add to favorites"
              title="Add to favorites">
              <Icon class="material-icons" on>favorite</Icon>
              <Icon class="material-icons">favorite_border</Icon>
            </IconButton>
            <IconButton class="material-icons" title="Share">share</IconButton>
            <IconButton class="material-icons" title="More options">
              more_vert
            </IconButton>
          </ActionIcons> -->
        </Actions>
      </Card>
    </div>
  {/each}
</div>
