<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let yell;

  function deleteYell(id) {
    dispatch("change", {
      id
    });
  }

  setTimeout(function() {
    deleteYell(yell.id);
  }, 1000);
</script>

<style>
  p {
    background: #000;
    color: #fff;
    width: 200px;
  }
</style>

<p style="transform: rotate({yell.rotation}deg);" out:fade>{yell.yell}</p>
