<script>
  import Yell from "./Yell.svelte";

  let profileImg =
    "https://i.pinimg.com/474x/9a/42/e6/9a42e6ce476d135a2f5ca8af3c201439.jpg";

  let array = [
      "Hi!",
      "Hello!",
      "Hey!",
      "Heya!",
      "Hellow!",
      "Hai!",
      "Hoi!",
      "Hewwo!",
      "Hej!"
    ],
    yells = [],
    click = 0;

  let showYell = () => {
    click++;
    const yell = array[Math.floor(Math.random() * array.length)];
    const rotation = -20 + Math.floor(Math.random() * 40 + 1);
    const id = Math.floor(Math.random() * 999);
    yells = [...yells, { yell, rotation, id }];
  };

  //Fired by Event Dispatcher
  function removeYell(event) {
    yells = yells.filter(arr => arr.id !== event.detail.id);
  }
</script>

<style>
  img {
    width: 150px;
  }
</style>

<div>
  <p>Click Count: {click}</p>
  <img src={profileImg} alt="Profile" on:click={showYell} />
  {#each yells as yell (yell.id)}
    <div>
      <Yell {yell} on:change={removeYell} />
    </div>
  {/each}
</div>
