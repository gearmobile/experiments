<template>
  <section>
    <h2>second page</h2>
    <nav class="nav">
      <router-link to="/uno" tag="li"><a>uno</a></router-link>
      <router-link to="/duo" tag="li"><a>duo</a></router-link>
      <router-link to="/tre" tag="li"><a>tre</a></router-link>
    </nav>
    <router-view></router-view>
  </section>
</template>
